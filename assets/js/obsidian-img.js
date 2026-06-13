document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".post-content, .post");
    if (!container) return;
  
    // Obsidian形式の画像記法を検出する
    // 例: ![[sample.jpg]]
    // 例: ![[sample.jpg::説明文]]
    const pattern = /!\[\[(.+?\.(png|jpg|jpeg|gif|webp))(?:::(.+?))?\]\]/gi;
  
    container.innerHTML = container.innerHTML.replace(pattern, function (match, filename, ext, caption) {
      // filename がすでにパスを含んでいる場合はそのまま使う
      let src = filename.startsWith('/') || filename.startsWith('assets/')
        ? `/${filename.replace(/^\/+/, "")}`
        : `/assets/images/${filename}`;
  
      // 説明文がある場合は figure + figcaption として出力する
      if (caption) {
        return `
          <figure class="obsidian-figure">
            <img src="${src}" alt="${caption}" class="obsidian-img">
            <figcaption>${caption}</figcaption>
          </figure>
        `;
      }
  
      // 説明文がない場合は従来どおり画像だけ出力する
      return `<img src="${src}" alt="${filename}" class="obsidian-img">`;
    });
  });