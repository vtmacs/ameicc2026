# プロジェクト状況

## プロジェクト概要

**SAKURA AI Engine Practical Exercise Support Site**

さくらのAI Engine ハンズオン（モジュール 1〜4）向けの補助 Web サイト。GitHub Pages で公開しており、英語・日本語の切り替え機能を持つ。

- 公開 URL: https://vtmacs.github.io/ameicc2026/
- リポジトリ: https://github.com/vtmacs/ameicc2026
- 作業ディレクトリ: `/home/y-sekiguchi/ameicc2026`

## 現在の状況

- Module 1〜Module 4 の作成・反映は完了。
- 細かな UI/UX 調整（Copy ボタン、トークン入力・保存、Module 4 のスライド追従など）も完了。
- 追加で Module 1・2・4 の内容調整・ダウンロード資料追加を実施済み。
- GitHub Pages の反映を待ち。

## 完了済み

### 初期対応（Module 1〜4 作成時）

- サイト全体の枠組み（`index.html`、`assets/css/style.css`、`assets/js/i18n.js`）
- **Module 1**（RAG・API 入門）ページ作成・日本語訳追加
  - HO1 STEP4 / HO3 STEP3 のプロンプトを Copy ボタン付きに変更
  - HO2 STEP2 に Account Token 入力欄を追加（`sessionStorage` 保存、コピー時に `export` コマンドに反映）
- **Module 2**（音声文字起こし）ページ作成・日本語訳追加
  - スライド修正への追従（MCP 説明、英語/タイ語精度差セクション、話者情報セクション、録音アプリ URL など）
  - Account Token の確認（`echo`）→ 設定（`export`）の段階的な流れに整理
- **Module 3**（マルチモーダル AI）ページ作成・日本語訳追加
- **Module 3 の修正対応**
  - HO1: jq 関連の削除、json_pp 統一、Step2 と Step3 の間に注釈追加
  - HO2: Windows File Explorer パスの説明差し替え、jq → json_pp
  - HO3: スライドのコマンドをそのまま反映、jq → json_pp
  - HO4: Kimi モデル使用時の注意書き追加
  - Account Token の確認（`echo`）→ 設定（`export`）の段階的な流れに整理
- **Module 4**（Web アプリへの組み込み）ページ作成・日本語訳追加
  - 改訂された PDF に追従
    - zip ダウンロードを `wget` + `python3 -m zipfile` に変更
    - `app.js` の穴埋めを廃止
    - curl → Web App のコード対応表を追加
  - CSS / i18n.js のパスを修正
  - コピー機能の調整（URL のみコピー可能に、不要な Copy ボタンを削除）
  - レイアウト調整（system text、step numbering、deactivate 注釈など）
  - Account Token の確認（`echo`）→ 設定（`export`）の段階的な流れに整理
- ナビゲーションで Module 4 まで有効化

### 追加調整（2026-11-09）

- **Module 4 改修**
  - HO2 の `build_payload` / `requests.post` 空欄に `app.py` の行番号を明記
  - 解答部分を「View the answer」折りたたみに変更し、行番号付きの `app.py` 枠全体を表示
  - 空欄に入れる部分のみ `<span class="editable-content">` でハイライトしコピー可能に
  - Optional: Extra Challenges にも `app.py` 行番号を明記
  - 読み上げ機能（TTS）発展課題で利用規約同意が必要な旨を明記し、コピーブロックを削除
  - 非コピーブロック（表示のみのコード枠）を薄い緑で視覚的に区別
- **Module 1 改修**
  - HO2 の Request Parameters / JSON Response の読み方 / 答えの抽出 を STEP3 と STEP4 の間に移動
  - STEP4 の番号が継続するよう CSS / インラインスタイルで対応
  - HO2 STEP3 / STEP4 の curl コマンド末尾に `| json_pp` を追加
  - JSON Response 例から Copy ボタンを削除
- **Module 2 改修**
  - HO3 STEP1: `sample_long_en.wav` を文字起こし → `summarize.py` 作成 → `summary_before.txt` 生成のコマンドを追加
  - HO3 STEP2: 比較用の原文（Hands-On 1 Step4 と同じ文章）を折り返し表示で追加
  - HO3 STEP3: 正しい文章を `sample_long_en.txt` に保存し、その要約を `summary_after.txt` に保存
  - HO3 STEP4: `summary_before.txt` と `summary_after.txt` を比較するコードに変更。STEP5 を削除し、STEP5 の内容を STEP4 に統合
  - HO3 STEP4: 要約結果を JSON 全体ではなく要約文だけ表示するよう Python コードを変更
  - Optional（30分以上の音声対応）: `splitmp3.py` / `splitmp3+summary.py` を `assets/downloads/` に保存し、ダウンロードボタンを追加（日本語コメント・メッセージを英語に翻訳）

## 未完了

- GitHub Pages の反映を待ち、公開 URL で最終確認

## 注意事項

- リポジトリルートにある `.pptx` ファイルは **未追跡（untracked）**。現状コミット不要。
- `git push` を行う際は、一時的にトークン付き URL を設定していた（直近で push 後に HTTPS URL に戻している）。次回 push 時も同様の対応が必要。
- `i18n.js` は `innerHTML` で翻訳を適用するため、翻訳値に HTML タグを含められるが、二重引用符のエスケープに注意。
- Account Token は `sessionStorage` に保存され、ブラウザ（タブ）を閉じると削除される。

## GitHub リポジトリ構成

```
ameicc2026/
├── index.html                          # トップページ
├── module01.html                       # Module 1（RAG・API 入門）
├── module02.html                       # Module 2（音声文字起こし）
├── module03.html                       # Module 3（マルチモーダル AI）
├── module04.html                       # Module 4（Web アプリへの組み込み）
├── README.md
├── assets/
│   ├── css/style.css                   # サイト共通スタイル
│   ├── js/i18n.js                      # 日英切り替え・翻訳辞書
│   ├── downloads/                      # 音声・PDF・スクリプト等のダウンロード資料
│   │   ├── annual-report-2564.pdf
│   │   ├── sample_long_en.wav
│   │   ├── sample_long_en_fast.wav
│   │   ├── sample_long_en_noisy.wav
│   │   ├── sample_short_en.wav
│   │   ├── sample_short_th.wav
│   │   ├── splitmp3.py                 # 長音声分割・文字起こしスクリプト
│   │   └── splitmp3+summary.py         # 上記＋Chat Completions 要約スクリプト
│   ├── images/
│   ├── materials/                      # 各モジュールのスライド PDF
│   ├── manuals/                        # SAKURA AI Engine マニュアル PDF
│   └── references/                     # 参考資料 PDF
└── （各種 .pptx ファイル：未追跡）
```

最新コミット: `e718175 Add json_pp to Module 1 HO2 STEP3/4 and remove copy button from JSON example`
