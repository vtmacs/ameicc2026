#!/usr/bin/env python3
import os
import time
import json
import argparse
from pathlib import Path

import requests
from pydub import AudioSegment

API_URL = "https://api.ai.sakura.ad.jp/v1/audio/transcriptions"
MODEL = "whisper-large-v3-turbo"


def mmss(sec: float) -> str:
    m = int(sec) / 60
    s = int(sec) % 60
    return f"{int(m):02d}:{s:02d}"


def split_audio(input_path: Path, outdir: Path, chunk_sec: int) -> list[Path]:
    """Split audio into chunks of chunk_sec seconds and save them. Returns a list of saved file Paths."""
    outdir.mkdir(parents=True, exist_ok=True)
    audio = AudioSegment.from_file(input_path)
    chunk_ms = chunk_sec * 1000
    parts: list[Path] = []
    for i in range(0, len(audio), chunk_ms):
        chunk = audio[i:i + chunk_ms]
        idx = i // chunk_ms
        out_file = outdir / f"output_{idx:03d}.mp3"
        # Re-encode for compatibility (adjust arguments if bit rate etc. is a concern)
        chunk.export(out_file, format="mp3")
        parts.append(out_file)
        start_s = i / 1000
        end_s = min((i + chunk_ms), len(audio)) / 1000
        print(f"[Split] {out_file.name}  ({mmss(start_s)} - {mmss(end_s)})")
    return parts


def transcribe_file(file_path: Path, token: str, retry: int = 3, backoff: float = 2.0) -> dict:
    """POST one file to the API and return the JSON response. Retries on 429/5xx."""
    headers = {
        "Authorization": f"Bearer {token}",
        "Accept": "application/json",
        # Content-Type is set automatically by requests (includes multipart boundary)
    }
    data = {"model": MODEL}

    for attempt in range(1, retry + 1):
        # Re-open each time for a clean upload
        with open(file_path, "rb") as f:
            files = {"file": (file_path.name, f, "audio/mpeg")}
            resp = requests.post(API_URL, headers=headers, files=files, data=data, timeout=300)

        if resp.status_code == 200:
            return resp.json()

        if resp.status_code in (429, 500, 502, 503, 504):
            # Retryable status codes
            wait = backoff * attempt
            print(f"[Warn] {file_path.name} -> HTTP {resp.status_code}, retry {attempt}/{retry} in {wait:.1f}s ...")
            time.sleep(wait)
            continue

        # 4xx etc.: show error and exit immediately
        try:
            err = resp.json()
        except Exception:
            err = resp.text
        raise RuntimeError(f"HTTP {resp.status_code}: {err}")

    raise RuntimeError(f"Failed after {retry} retries: {file_path.name}")


def main():
    ap = argparse.ArgumentParser(description="Split MP3 by N seconds and transcribe each chunk via Sakura AI API")
    ap.add_argument("--input", "-i", default="sample.mp3", help="Input MP3 path (default: sample.mp3)")
    ap.add_argument("--chunk-sec", "-s", type=int, default=29, help="Chunk length in seconds (default: 29)")
    ap.add_argument("--outdir", "-o", default="chunks", help="Output directory for split files (default: chunks)")
    ap.add_argument("--token", "-t", default=os.getenv("AI_ENGINE_TOKEN"),
                    help="API token (set AI_ENGINE_TOKEN environment variable or specify here)")
    ap.add_argument("--sleep", type=float, default=0.0,
                    help="Seconds to sleep between requests (optional, for rate-limit handling)")
    args = ap.parse_args()

    if not args.token:
        raise SystemExit("ERROR: API token not provided. Set AI_ENGINE_TOKEN or use --token")

    input_path = Path(args.input)
    if not input_path.exists():
        raise SystemExit(f"ERROR: input file not found: {input_path}")

    outdir = Path(args.outdir)
    # Split
    parts = split_audio(input_path, outdir, args.chunk_sec)
    if not parts:
        raise SystemExit("No chunks produced.")

    # Original audio (for timestamps)
    full_audio = AudioSegment.from_file(input_path)
    chunk_ms = args.chunk_sec * 1000
    total_chunks = len(parts)

    print(f"\n[Transcribe] {total_chunks} chunks -> {API_URL} (model={MODEL})\n")

    results = []
    for idx, path in enumerate(parts):
        start_ms = idx * chunk_ms
        end_ms = min((idx + 1) * chunk_ms, len(full_audio))
        start_s = start_ms / 1000
        end_s = end_ms / 1000
        window = f"{mmss(start_s)}-{mmss(end_s)}"
        print(f"[POST] {path.name} ({window})  [{idx+1}/{total_chunks}]")

        try:
            js = transcribe_file(path, args.token)
            text = js.get("text", "")
            results.append({
                "index": idx,
                "file": path.name,
                "start_sec": start_s,
                "end_sec": end_s,
                "window": window,
                "model": js.get("model"),
                "text": text,
                "raw": js,
            })
            print(f"[OK]  {path.name} -> {len(text)} chars")
        except Exception as e:
            print(f"[ERR] {path.name}: {e}")
            results.append({
                "index": idx,
                "file": path.name,
                "start_sec": start_s,
                "end_sec": end_s,
                "window": window,
                "model": None,
                "text": "",
                "error": str(e),
            })

        if args.sleep > 0 and idx < total_chunks - 1:
            time.sleep(args.sleep)

    # Output (JSON, with time tags, full concatenated text)
    out_json = Path("transcript.json")
    out_txt = Path("transcript.txt")          # [MM:SS-MM:SS] text
    out_full = Path("transcript_full.txt")    # no tags, full concatenated text

    with out_json.open("w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    with out_txt.open("w", encoding="utf-8") as f:
        for r in results:
            line = f"[{r['window']}] {r.get('text', '')}".rstrip()
            f.write(line + "\n")

    with out_full.open("w", encoding="utf-8") as f:
        for r in results:
            txt = (r.get("text") or "").strip()
            if txt:
                f.write(txt + "\n")

    print("\n Done. Saved:")
    print(f" - {out_json.resolve()}")
    print(f" - {out_txt.resolve()}   (with time range)")
    print(f" - {out_full.resolve()}  (no tags, full concatenation)")
    print("")

    # Also print transcript_full.txt to stdout
    print("\n===== transcript_full.txt (full text) =====\n")
    with out_full.open("r", encoding="utf-8") as f:
        print(f.read().strip())
    print("\n===== end of transcript_full.txt =====\n")


if __name__ == "__main__":
    main()
