document.addEventListener("DOMContentLoaded", function () {
  const tocContainer = document.querySelector("#ui-toc-affix .toc");
  if (!tocContainer) return;

  const headings = document.querySelectorAll(".post-content h1, .post-content h2, .post-content h3");
  if (!headings.length) return;

  const ul = document.createElement("ul");
  ul.classList.add("nav");

  headings.forEach((h, i) => {
    if (!h.id) {
      const rawText = h.textContent.trim();
      let slug = rawText.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9\-_]/g, "");
      if (/^[0-9]/.test(slug)) {
        slug = "sec-" + slug;
      }
      h.id = slug || `heading-${i}`;
    }

    const li = document.createElement("li");
    
    // h1, h2, h3に応じたクラスをliに付加（例: toc-h2）
    const tagName = h.tagName.toLowerCase(); // 例: 'h2'
    li.classList.add(`toc-${tagName}`);

    li.innerHTML = `<a href="#${h.id}" title="${h.textContent}">${h.textContent}</a>`;
    ul.appendChild(li);
  });

  tocContainer.appendChild(ul);

  // スムーズスクロール
  document.querySelectorAll('#ui-toc-affix a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(`[id="${this.getAttribute("href").slice(1)}"]`);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 40,
          behavior: "smooth"
        });
      }
    });
  });
});

