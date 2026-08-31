(function() {
  const translations = {
  "ja": {
    "footer.copy": "SAKURA internet Inc.",
    "lecture01.hero.label": "中級講座 3コマ目 / Intermediate Course Session 3",
    "lecture01.hero.title": "さくらのAI Engine 操作実践 ①",
    "lecture01.hero.lead": "さくらのAI Engine での RAG 実践",
    "lecture01.hero.desc": "90分で、さくらのAI Engine へのログイン、curl による API 呼び出し、そして自分の資料を根拠に答える RAG チャットボットの作成を体験します。",
    "lecture01.hero.duration": "90分",
    "lecture01.how.title": "このクラスの進め方",
    "lecture01.how.desc": "スライドは「今から何をするか」を示し、詳しい手順やコピー＆ペースト用のコマンド、発展課題、資料ダウンロードはこの Web サイトを使います。",
    "lecture01.how.l1": "スライド：説明と、今から何をするか",
    "lecture01.how.l2": "Web サイト：手順・コマンド・発展課題",
    "lecture01.how.l3": "各ハンズオンには必須課題と発展課題があります",
    "lecture01.how.l4": "詰まったら Troubleshooting を探すか、講師・TA に聞いてください",
    "lecture01.schedule.title": "タイムテーブル（90分）",
    "lecture01.schedule.time": "時間",
    "lecture01.schedule.content": "内容",
    "lecture01.schedule.r1": "説明①：さくらのAI Engine とは",
    "lecture01.schedule.r2": "ハンズオン①：ログイン・Playground",
    "lecture01.schedule.r3": "説明②：API とは",
    "lecture01.schedule.r4": "ハンズオン②：curl で動かす",
    "lecture01.schedule.r5": "説明③：RAG の仕組み",
    "lecture01.schedule.r6": "ハンズオン③：RAG チャットボット",
    "lecture01.schedule.r7": "まとめ・OpenWebUI・次の案内",
    "lecture01.ov1.title": "説明①：さくらのAI Engine とは",
    "lecture01.ov1.genai.title": "生成AIとは",
    "lecture01.ov1.genai.desc": "生成AIは、大量のテキストから学習し、「次に来る言葉」を予測して答えを作ります。検索とは違い、既存の文章を見つけるのではなく、AI が答えを生成します。",
    "lecture01.ov1.genai.l1": "同じ質問でも答え方が変わることがある",
    "lecture01.ov1.genai.l2": "受け取っていない資料や社内ルールは答えられない",
    "lecture01.ov1.genai.l3": "この制限を補うのが RAG です",
    "lecture01.ov1.sae.title": "さくらのAI Engine について",
    "lecture01.ov1.sae.desc": "さくらのAI Engine は、生成AIアプリケーションを構築するための安全で柔軟な API プラットフォームです。日本のデータセンターで処理が完結します。",
    "lecture01.ov1.sae.l1": "複数の基盤モデルから選択できる",
    "lecture01.ov1.sae.l2": "ドキュメント管理と RAG",
    "lecture01.ov1.sae.l3": "音声文字起こし、TTS、画像入力",
    "lecture01.ov1.model.title": "モデルの概念",
    "lecture01.ov1.model.desc": "モデルは AI システムの「脳」です。学習内容・サイズ・得意分野が異なります。",
    "lecture01.ov1.model.type": "タイプ",
    "lecture01.ov1.model.example": "例",
    "lecture01.ov1.model.note": "特徴",
    "lecture01.ov1.model.small": "小型",
    "lecture01.ov1.model.small_note": "軽量・高速",
    "lecture01.ov1.model.standard": "標準",
    "lecture01.ov1.model.standard_note": "このクラスで使用",
    "lecture01.ov1.model.large": "大型",
    "lecture01.ov1.model.large_note": "高性能",
    "lecture01.ov1.tags": "利用可能なモデルには「コーディング」「マルチモーダル」「パブリックプレビュー」などのタグがあり、用途に応じて選べます。",
    "lecture01.ho1.title": "ハンズオン①：さくらのAI Engine に触ってみよう",
    "lecture01.ho1.goal": "ブラウザの Playground からさくらのAI Engine にログインし、モデルを選んで質問してみます。",
    "lecture01.ho1.req.title": "必ずやること",
    "lecture01.ho1.req.l1": "さくらのクラウドのコントロールパネルにログインする",
    "lecture01.ho1.req.l2": "「さくらのAI Engine」を開く",
    "lecture01.ho1.req.l3": "使えるモデルの一覧を見る",
    "lecture01.ho1.req.l4": "Playground でモデルを選んで質問する",
    "lecture01.ho1.prep.title": "事前準備",
    "lecture01.ho1.prep.desc": "以下が揃っていることを確認してください。",
    "lecture01.ho1.prep.l1": "ユーザコード・会員ID・パスワード",
    "lecture01.ho1.prep.l2": "あらかじめ作成・選択しておくさくらのクラウドのプロジェクト",
    "lecture01.ho1.steps.title": "手順",
    "lecture01.ho1.s1.title": "STEP 1：コントロールパネルにログイン",
    "lecture01.ho1.s1.desc": "ユーザコード・会員ID・パスワードの3つを入力します。入力欄が3つあることを確認してください。",
    "lecture01.ho1.s2.title": "STEP 2：さくらのAI Engine を開く",
    "lecture01.ho1.s2.desc": "ホーム画面のメニューから「さくらのAI Engine」を選択します。表示されない場合は、プロジェクトが選択されているか確認してください。",
    "lecture01.ho1.s3.title": "STEP 3：Playground でモデルを選ぶ",
    "lecture01.ho1.s3.desc": "左メニューから Playground を開き、画面下部のモデル選択欄から例えば gpt-oss-120b を選びます。",
    "lecture01.ho1.s4.title": "STEP 4：プロンプトを入力して送信",
    "lecture01.ho1.s4.desc": "入力欄に質問を入れて、送信ボタンまたは Enter キーを押します。まずは以下を試してください。",
    "lecture01.ho1.optional.title": "発展課題",
    "lecture01.ho1.optional.desc": "同じ質問を別のモデル（例：llm-jp-3.1-8x13b-instruct4）に投げて、答えの長さ・書き方・内容を比べてみましょう。",
    "lecture01.ho1.check.title": "進捗確認",
    "lecture01.ho1.check.l1": "さくらのクラウドにログインできた",
    "lecture01.ho1.check.l2": "さくらのAI Engine の画面を開けた",
    "lecture01.ho1.check.l3": "モデルを選んで質問できた",
    "lecture01.ho1.check.l4": "応答が表示された",
    "lecture01.ov2.title": "説明②：API とは",
    "lecture01.ov2.desc": "API は、プログラムからサービスを呼び出すための「窓口」です。決まった形でリクエストを送ると、決まった形でレスポンスが返ってきます。",
    "lecture01.ov2.four.title": "API を使うときに決める4つのこと",
    "lecture01.ov2.four.item": "項目",
    "lecture01.ov2.four.role": "役割",
    "lecture01.ov2.four.value": "今回の値",
    "lecture01.ov2.four.endpoint": "Endpoint",
    "lecture01.ov2.four.endpoint_role": "どこに送るか",
    "lecture01.ov2.four.auth": "Authentication",
    "lecture01.ov2.four.auth_role": "誰が送ったか",
    "lecture01.ov2.four.auth_value": "アカウントトークン",
    "lecture01.ov2.four.request": "Request",
    "lecture01.ov2.four.request_role": "何を聞くか",
    "lecture01.ov2.four.request_value": "モデル名とプロンプト",
    "lecture01.ov2.four.response": "Response",
    "lecture01.ov2.four.response_role": "返ってくる答え",
    "lecture01.ov2.four.response_value": "JSON 形式のテキスト",
    "lecture01.ov2.note": "Playground で行った操作も、裏側ではすべてこの API を呼び出しています。",
    "lecture01.ho2.title": "ハンズオン②：コマンドから AI を動かそう",
    "lecture01.ho2.goal": "アカウントトークンを発行し、WSL（Ubuntu）のターミナルから curl コマンドで AI を呼び出します。",
    "lecture01.ho2.req.title": "必ずやること",
    "lecture01.ho2.req.l1": "アカウントトークンを発行する",
    "lecture01.ho2.req.l2": "トークンを環境変数に設定する",
    "lecture01.ho2.req.l3": "curl でさくらのAI Engine に質問を送る",
    "lecture01.ho2.req.l4": "返ってきた JSON から答えを取り出す",
    "lecture01.ho2.req.l5": "プロンプトを書き換えて、もう一度実行する",
    "lecture01.ho2.steps.title": "手順",
    "lecture01.ho2.s1.title": "STEP 1：アカウントトークンを発行",
    "lecture01.ho2.s1.desc": "左メニューから「アカウントトークン」を選び、「アカウントトークンを作成」をクリックします。名前を入力し、表示されたトークンをコピーして保存します。トークンは発行時にしか表示されません。",
    "lecture01.ho2.s2.title": "STEP 2：トークンを環境変数に設定",
    "lecture01.ho2.s2.desc": "WSL（Ubuntu）のターミナルを開き、以下のコマンドを実行します。トークンは毎回貼り付けなくて済みます。",
    "lecture01.ho2.s2.note": "この設定はターミナルを閉じるまで有効です。開き直したら再度 export してください。",
    "lecture01.ho2.s3.title": "STEP 3：curl で質問する",
    "lecture01.ho2.s3.desc": "以下のコマンドをコピーして実行します。エンドポイント・認証・リクエスト・レスポンスの4つがどこに書かれているか確認しましょう。",
    "lecture01.ho2.s4.title": "STEP 4：プロンプトを書き換えて再実行",
    "lecture01.ho2.s4.desc": "messages 部分を書き換えて、もう一度実行します。",
    "lecture01.ho2.params.title": "リクエストパラメータの意味",
    "lecture01.ho2.params.meaning": "意味",
    "lecture01.ho2.params.model": "使用する AI モデル名",
    "lecture01.ho2.params.messages": "会話の内容（役割と発言内容）",
    "lecture01.ho2.params.role": "話者の役割。user＝利用者、system＝AI への指示",
    "lecture01.ho2.params.content": "送信するメッセージ本文",
    "lecture01.ho2.params.temperature": "応答のランダムさ。小さいほど安定、大きいほど多様",
    "lecture01.ho2.params.max_tokens": "生成される応答の最大トークン数",
    "lecture01.ho2.params.stream": "レスポンスの取得方式（ストリーム／非ストリーム）",
    "lecture01.ho2.json.title": "JSON レスポンスの読み方",
    "lecture01.ho2.json.desc": "答えは choices[0].message.content に入っています。usage は使ったトークン数です。",
    "lecture01.ho2.extract.title": "答えの部分だけを取り出す",
    "lecture01.ho2.extract.desc": "JSON 全体ではなく、答えの文だけを表示できます。",
    "lecture01.ho2.optional.title": "発展課題",
    "lecture01.ho2.optional.l1": "temperature や max_tokens を変えて応答を比べる",
    "lecture01.ho2.optional.l2": "Python から同じ API を呼び出す",
    "lecture01.ho2.optional.py": "Python の例：",
    "lecture01.ho2.errors.title": "よくあるエラーと対処",
    "lecture01.ho2.errors.cause": "原因",
    "lecture01.ho2.errors.fix": "対処",
    "lecture01.ho2.errors.e1.cause": "トークンが正しく渡っていない",
    "lecture01.ho2.errors.e1.fix": "echo $AI_ENGINE_TOKEN を確認。Bearer の後の半角スペースを確認。",
    "lecture01.ho2.errors.e2.title": "コマンドが途中で止まる",
    "lecture01.ho2.errors.e2.cause": "引用符が全角になっている",
    "lecture01.ho2.errors.e2.fix": "半角 \" を使う。日本語入力をオフにして貼り付ける。行末の \\ の後に空白を入れない。",
    "lecture01.ho2.errors.e3.title": "つながらない / 応答がない",
    "lecture01.ho2.errors.e3.cause": "ネットワークやプロキシの問題",
    "lecture01.ho2.errors.e3.fix": "Wi-Fi 接続と、学内ネットワークの制限を確認。",
    "lecture01.ho2.check.title": "進捗確認",
    "lecture01.ho2.check.l1": "アカウントトークンを発行して保存できた",
    "lecture01.ho2.check.l2": "環境変数にトークンを設定できた",
    "lecture01.ho2.check.l3": "curl で AI から応答を受け取れた",
    "lecture01.ho2.check.l4": "プロンプトを書き換えて再実行できた",
    "lecture01.ov3.title": "説明③：RAG の仕組み",
    "lecture01.ov3.rag.title": "RAG とは",
    "lecture01.ov3.rag.desc": "RAG（Retrieval-Augmented Generation）は、答える前に登録された資料を検索し、その資料を根拠に答えを生成する AI です。",
    "lecture01.ov3.rag.l1": "登録した資料を根拠に答えられる",
    "lecture01.ov3.rag.l2": "一般の AI が知らない情報にも答えられる",
    "lecture01.ov3.rag.l3": "どの資料を参照したかを確認できる",
    "lecture01.ov3.rag.l4": "登録していない情報は根拠にできない",
    "lecture01.ov3.chunk.title": "チャンクという考え方",
    "lecture01.ov3.chunk.desc": "登録した資料は、決められたトークン長で分割されて保存されます。この分割単位をチャンクと呼びます。",
    "lecture01.ov3.chunk.l1": "検索はチャンク単位で行われる",
    "lecture01.ov3.chunk.l2": "関係の深い部分だけが参照される",
    "lecture01.ov3.chunk.l3": "対応形式：txt / pdf / html / docx / xlsx / md など",
    "lecture01.ov3.billing.title": "登録の前に：課金の注意",
    "lecture01.ov3.billing.desc": "ドキュメントを登録すると、削除するまでチャンク数に応じた課金が毎月発生します。基盤モデル無償プランを利用していても、この課金は発生します。",
    "lecture01.ov3.billing.note": "今回は学習用環境を使うため直接の支払いはありませんが、実際に使うときは「使い終わったら消す」を習慣にしてください。",
    "lecture01.ho3.title": "ハンズオン③：RAG チャットボットを作ろう",
    "lecture01.ho3.goal": "配布された PDF をさくらのAI Engine に登録し、RAG あり／なしで同じ質問を比べます。",
    "lecture01.ho3.req.title": "必ずやること",
    "lecture01.ho3.req.l1": "配布された PDF をダウンロードして登録する",
    "lecture01.ho3.req.l2": "RAG なしで質問して答えを記録する",
    "lecture01.ho3.req.l3": "RAG ありで同じ質問をして答えを記録する",
    "lecture01.ho3.req.l4": "資料に書かれていないことを質問してみる",
    "lecture01.ho3.req.l5": "違いをワークシートに1文で書く",
    "lecture01.ho3.steps.title": "手順",
    "lecture01.ho3.s1.title": "STEP 1：資料をダウンロードして WSL に置く",
    "lecture01.ho3.s1.desc": "以下のリンクから PDF をダウンロードし、WSL の home ディレクトリに 01_AI_RAG フォルダを作成してコピーします。コピーはエクスプローラーのドラッグ＆ドロップで行ってください。",
    "lecture01.ho3.s2.title": "STEP 2：ドキュメントを登録する",
    "lecture01.ho3.s2.desc": "左メニューから「ドキュメント（RAG）」を選び、「ドキュメントを登録」をクリックします。名前・ファイル・埋め込みモデル・チャンクサイズを指定してアップロードし、pending から available になるまで待ちます。",
    "lecture01.ho3.s3.title": "STEP 3：RAG クエリを実行する",
    "lecture01.ho3.s3.desc": "「ドキュメント（RAG）」の「操作」から「クエリ検索」を選び、以下の質問を入力して実行します。",
    "lecture01.ho3.s4.title": "STEP 4：Playground で RAG を使う",
    "lecture01.ho3.s4.desc": "Playground を開き、画面下部の Document ボタンをオンにします。歯車マークで top_k や threshold を設定し、同じ質問を送信します。",
    "lecture01.ho3.s4.meaning": "意味",
    "lecture01.ho3.s4.tags": "そのタグの資料のみ参照",
    "lecture01.ho3.s4.topk": "上位何件のチャンクを取得するか",
    "lecture01.ho3.s4.threshold": "ベクトル距離のしきい値（0〜2）",
    "lecture01.ho3.s5.title": "STEP 5：RAG あり／なしを比較する",
    "lecture01.ho3.s5.desc": "同じ質問を Document ボタン OFF（RAG なし）と ON（RAG あり）の両方で聞き、答えの違いを観察します。資料に書かれていないこと（例：Who will win the next FIFA World Cup?）も聞いてみましょう。",
    "lecture01.ho3.worksheet.title": "ワークシート",
    "lecture01.ho3.worksheet.desc": "以下に答えをコピーしてください。入力は自動で保存されます。",
    "lecture01.ho3.ws.without": "RAG なしの答え",
    "lecture01.ho3.ws.with": "RAG ありの答え",
    "lecture01.ho3.ws.diff": "違いを1文で",
    "lecture01.ho3.optional.title": "発展課題：API で RAG を実行する",
    "lecture01.ho3.optional.desc": "コントロールパネルでやった操作を API からも実行できます。",
    "lecture01.ho3.optional.upload": "① 資料をアップロード",
    "lecture01.ho3.optional.status": "② ステータスを確認",
    "lecture01.ho3.optional.query": "③ RAG クエリを実行",
    "lecture01.ho3.optional.meaning": "意味",
    "lecture01.ho3.optional.model": "ベクトル化・埋め込みに使うモデル",
    "lecture01.ho3.optional.chat_model": "回答を生成する LLM",
    "lecture01.ho3.optional.query_text": "自然言語の質問",
    "lecture01.ho3.optional.topk": "取得する上位チャンク数",
    "lecture01.ho3.optional.threshold": "ベクトル距離のしきい値（0〜2）",
    "lecture01.ho3.optional.distance": "cosine または l2",
    "lecture01.ho3.check.title": "振り返り",
    "lecture01.ho3.check.l1": "RAG なしのとき、AI はどう答えたか",
    "lecture01.ho3.check.l2": "RAG ありのとき、答えはどう変わったか",
    "lecture01.ho3.check.l3": "資料に書かれていないことを聞いたら、どうなったか",
    "lecture01.ho3.check.note": "RAG は「登録した資料の範囲でしか根拠を持てない」。これがこのクラスの最も重要なポイントです。",
    "lecture01.next.title": "OpenWebUI と次のステップ",
    "lecture01.next.openwebui.title": "OpenWebUI のご紹介",
    "lecture01.next.openwebui.desc": "OpenWebUI は、今回コマンドで動かしたのと同じ API ワークフローの上に、すぐに使えるブラウザ画面をかぶせたものです。UI をかぶせることで、誰でも使えるアプリにできます。",
    "lecture01.next.mcp.title": "この先にあるもの：MCP と A2A",
    "lecture01.next.mcp.l1": "MCP：AI と外部ツール・データをつなぐ仕組み",
    "lecture01.next.mcp.l2": "A2A：AI 同士が連携して仕事を進める仕組み",
    "lecture01.next.mcp.l3": "今日は名前だけ覚えておいてください",
    "lecture01.summary.title": "まとめ",
    "lecture01.summary.desc": "このクラスでできるようになったことです。",
    "lecture01.summary.l1": "さくらのAI Engine にログインし、モデルを選べた",
    "lecture01.summary.l2": "アカウントトークンを発行し、curl で AI を動かせた",
    "lecture01.summary.l3": "資料を登録して、RAG チャットボットを作れた",
    "lecture01.summary.l4": "RAG あり／なしの違いを説明できた",
    "nav.home": "ホーム",
    "nav.lecture1": "講義 1",
    "nav.lecture2": "講義 2",
    "nav.lecture3": "講義 3",
    "nav.lecture4": "講義 4",
    "site.title": "SAKURA AI Engine Hands-On Support Site",
    "index.title": "SAKURA AI Engine Hands-On Support Site",
    "index.lead": "さくらのAI Engine 操作実践 中級講座（3〜6コマ目）の補助 Web サイトです。",
    "index.lectures.title": "講義一覧",
    "index.lecture1.status": "利用可能",
    "index.lecture1.title": "Lecture 1：RAG 実践",
    "index.lecture1.desc": "ログイン、curl での API 呼び出し、RAG チャットボットの作成を体験します。",
    "index.lecture2.status": "準備中",
    "index.lecture2.title": "Lecture 2：会議音声の文字起こし・要約",
    "index.lecture2.desc": "会議音声の文字起こしから要約・議事録化までを自動化します。",
    "index.lecture3.status": "準備中",
    "index.lecture3.title": "Lecture 3：画像＋テキストの業務判断支援",
    "index.lecture3.desc": "画像とテキストを組み合わせた入力で、業務判断を支援する AI 出力を設計します。",
    "index.lecture4.status": "準備中",
    "index.lecture4.title": "Lecture 4：Web アプリへの組み込み",
    "index.lecture4.desc": "画像・テキストの AI 呼び出しを Web アプリに組み込み、ブラウザ上で動かします。",
    "common.copy": "コピー",
    "common.open": "開く",
    "common.back_home": "ホームに戻る",
    "lecture01.pageTitle": "さくらのAI Engine 操作実践 ①",
    "index.pageTitle": "SAKURA AI Engine Hands-On Support Site"
  }
};

  function applyLang(lang) {
    if (lang !== 'ja' && lang !== 'th') {
      // English is the default content in HTML; reset if previously translated
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations.en && translations.en[key]) {
          el.innerHTML = translations.en[key];
        } else if (el.dataset.defaultContent) {
          el.innerHTML = el.dataset.defaultContent;
        }
      });
    } else {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (!el.dataset.defaultContent) el.dataset.defaultContent = el.innerHTML;
        const dict = translations[lang] || {};
        if (dict[key]) {
          el.innerHTML = dict[key];
        }
      });
    }
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (!el.dataset.defaultTitle) el.dataset.defaultTitle = el.title;
      if (lang === 'en') {
        el.title = el.dataset.defaultTitle;
      } else {
        const dict = translations[lang] || {};
        if (dict[key]) el.title = dict[key];
      }
    });
    document.documentElement.lang = lang === 'ja' ? 'ja' : (lang === 'th' ? 'th' : 'en');
    localStorage.setItem('site-lang', lang);
    const select = document.getElementById('lang-switcher');
    if (select) select.value = lang;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('site-lang') || 'en';
    applyLang(saved);

    const select = document.getElementById('lang-switcher');
    if (select) {
      select.addEventListener('change', e => applyLang(e.target.value));
    }

    // Copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.parentElement.querySelector('code');
        if (!code) return;
        navigator.clipboard.writeText(code.textContent).then(() => {
          const original = btn.textContent;
          const ok = btn.getAttribute('data-i18n') === 'common.copy' ? 'Copied!' : 'Copied!';
          btn.textContent = ok;
          setTimeout(() => { btn.textContent = original; }, 1200);
        });
      });
    });

    // Worksheet autosave
    document.querySelectorAll('[data-worksheet]').forEach(field => {
      const key = 'ws-' + field.getAttribute('data-worksheet');
      const savedVal = localStorage.getItem(key);
      if (savedVal) field.value = savedVal;
      field.addEventListener('input', () => localStorage.setItem(key, field.value));
    });
  });
})();
