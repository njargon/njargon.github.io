document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".post-content, .post"); // 本文のクラス
    if (!container) return;
  
    const pattern = /!\[\[(.+?\.(png|jpg|jpeg|gif))\]\]/gi;
  
    container.innerHTML = container.innerHTML.replace(pattern, function (match, filename) {
      return `<img src="/assets/images/${filename}" alt="${filename}" class="obsidian-img">`;
    });
  });
  