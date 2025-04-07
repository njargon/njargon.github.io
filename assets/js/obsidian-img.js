document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".post-content, .post");
    if (!container) return;
  
    const pattern = /!\[\[(.+?\.(png|jpg|jpeg|gif))\]\]/gi;
  
    container.innerHTML = container.innerHTML.replace(pattern, function (match, filename) {
      let src = filename.startsWith('/') ? filename : `/assets/images/${filename}`;
      return `<img src="${src}" alt="${filename}" class="obsidian-img">`;
    });
  });
  