// =========================================================
// グローバルスコープで初期化防止フラグ
// =========================================================
if (!window.__DIALOGUE_INITIALIZED__) {
  window.__DIALOGUE_INITIALIZED__ = true; // ← 一度だけ実行するロック

  document.addEventListener("DOMContentLoaded", () => {
    const textBox = document.getElementById("dialogue-text");
    const choicesDiv = document.getElementById("choices");
    const sprite = document.getElementById("character-sprite");

    // =========================================================
    // デフォルト会話セットの選択（1セット固定）
    // =========================================================
    const defaultKeys = Object.keys(DialogueData.default_topics);
    let currentSet;
    let isDefault = true; // ← 現在の会話がデフォルトかどうかを判定
    let lineIndex = 0;
    let typingInProgress = false; // ← 二重出力防止

    function initDefaultSet() {
      const saved = sessionStorage.getItem("defaultSetKey");
      if (saved && DialogueData.default_topics[saved]) {
        return DialogueData.default_topics[saved];
      } else {
        const randKey = defaultKeys[Math.floor(Math.random() * defaultKeys.length)];
        sessionStorage.setItem("defaultSetKey", randKey);
        return DialogueData.default_topics[randKey];
      }
    }

    currentSet = initDefaultSet();

    // =========================================================
    // 会話トピックをランダムに3つ選出
    // =========================================================
    const allTopics = Object.keys(DialogueData.topics);
    let selectedTopics = [];

    function selectThreeTopics() {
      if (sessionStorage.getItem("selectedTopics")) {
        selectedTopics = JSON.parse(sessionStorage.getItem("selectedTopics"));
      } else {
        selectedTopics = allTopics.sort(() => 0.5 - Math.random()).slice(0, 3);
        sessionStorage.setItem("selectedTopics", JSON.stringify(selectedTopics));
      }
    }
    selectThreeTopics();

    // =========================================================
    // タイプライター風出力（重複防止付き）
    // =========================================================
    function typeWriter(text, callback, speed = 35) {
      if (typingInProgress) return; // ← 進行中なら無視
      typingInProgress = true;

      textBox.textContent = "";
      let i = 0;

      function typing() {
        if (i < text.length) {
          textBox.textContent += text.charAt(i);
          i++;
          setTimeout(typing, speed);
        } else {
          typingInProgress = false; // ← 終了後に解除
          if (callback) callback();
        }
      }

      typing();
    }

    // =========================================================
    // メッセージを順に表示
    // =========================================================
    function showNextLine() {
      typingInProgress = false; // 念のためリセット

      if (lineIndex < currentSet.length) {
        const line = currentSet[lineIndex];
        lineIndex++;
        typeWriter(line, () => {
          if (isDefault) {
            addDefaultChoices(); // ← デフォルトは常に「相槌」維持
          } else {
            if (lineIndex < currentSet.length) {
              addTopicChoices();
            } else {
              addStopButton();
            }
          }
        });
      } else if (isDefault) {
        // デフォルト会話はループ
        lineIndex = 0;
        showNextLine();
      }
    }

    // =========================================================
    // デフォルト状態のボタン
    // =========================================================
    function addDefaultChoices() {
      const replyBtn = document.createElement("button");
      replyBtn.textContent = "相槌を打つ";
      replyBtn.classList.add("choice");
      replyBtn.onclick = () => {
        if (typingInProgress) return; // ← タイピング中は無効
        if (lineIndex >= currentSet.length) lineIndex = 0; // ループ
        showNextLine();
      };

      const talkBtn = document.createElement("button");
      talkBtn.textContent = "会話をする";
      talkBtn.classList.add("choice");
      talkBtn.onclick = () => startTalk();

      choicesDiv.innerHTML = "";
      choicesDiv.appendChild(replyBtn);
      choicesDiv.appendChild(talkBtn);
    }

    // =========================================================
    // 話題内のボタン
    // =========================================================
    function addTopicChoices() {
      const replyBtn = document.createElement("button");
      replyBtn.textContent = "相槌を打つ";
      replyBtn.classList.add("choice");
      replyBtn.onclick = () => {
        if (typingInProgress) return;
        showNextLine();
      };

      const stopBtn = document.createElement("button");
      stopBtn.textContent = "会話を止める";
      stopBtn.classList.add("choice");
      stopBtn.onclick = stopTalk;

      choicesDiv.innerHTML = "";
      choicesDiv.appendChild(replyBtn);
      choicesDiv.appendChild(stopBtn);
    }

    // =========================================================
    // 会話を止めるボタンのみ
    // =========================================================
    function addStopButton() {
      const stopBtn = document.createElement("button");
      stopBtn.textContent = "会話を止める";
      stopBtn.classList.add("choice");
      stopBtn.onclick = stopTalk;

      choicesDiv.innerHTML = "";
      choicesDiv.appendChild(stopBtn);
    }

    // =========================================================
    // 会話モード
    // =========================================================
    function startTalk() {
      if (typingInProgress) return;

      isDefault = false;
      sprite.style.backgroundImage = "url('/assets/images/character-operator.png')";
      sprite.style.opacity = "1";
      sprite.style.transform = "translateY(-10px)";

      typeWriter("何かご用ですか？", () => {
        choicesDiv.innerHTML = "";

        selectedTopics.forEach((key, idx) => {
          const btn = document.createElement("button");
          btn.textContent = `話題${idx + 1}について聞く`;
          btn.classList.add("choice");
          btn.onclick = () => startTopic(key);
          choicesDiv.appendChild(btn);
        });

        const stopBtn = document.createElement("button");
        stopBtn.textContent = "会話を止める";
        stopBtn.classList.add("choice");
        stopBtn.onclick = stopTalk;
        choicesDiv.appendChild(stopBtn);
      });
    }

    function stopTalk() {
      sprite.style.opacity = "0";
      sprite.style.transform = "translateY(0)";
      isDefault = true;
      currentSet = initDefaultSet();
      lineIndex = 0;
      showNextLine();
    }

    function startTopic(key) {
      if (typingInProgress) return;

      isDefault = false;
      currentSet = DialogueData.topics[key];
      lineIndex = 0;
      showNextLine();
    }

    // =========================================================
    // 初期表示（※ここが複数回走るのを防いでいる）
    // =========================================================
    showNextLine();
  });
}








