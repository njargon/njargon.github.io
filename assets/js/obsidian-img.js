document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".post-content, .post");
    if (!container) return;
  
    const pattern = /!\[\[(.+?\.(png|jpg|jpeg|gif|webp))\]\]/gi;
  
    container.innerHTML = container.innerHTML.replace(pattern, function (match, filename) {
      // filename がすでにパスを含んでいる場合はそのまま使う
      let src = filename.startsWith('/') || filename.startsWith('assets/') ? `/${filename}` : `/assets/images/${filename}`;
      return `<img src="${src}" alt="${filename}" class="obsidian-img">`;
    });
  });
  
  