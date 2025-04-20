document.addEventListener("DOMContentLoaded", function () {
    const tocContainer = document.querySelector("#ui-toc-affix .toc");
    if (!tocContainer) return;
  
    const headings = document.querySelectorAll(".post-content h1, .post-content h2, .post-content h3");
    if (!headings.length) return;
  
    const ul = document.createElement("ul");
    ul.classList.add("nav");
  
    headings.forEach(h => {
      if (!h.id) h.id = h.textContent.trim().replace(/\s+/g, "-");
  
      const li = document.createElement("li");
      li.innerHTML = `<a href="#${h.id}" title="${h.textContent}">${h.textContent}</a>`;
      ul.appendChild(li);
    });
  
    tocContainer.appendChild(ul);
  
    // スムーズスクロール
    document.querySelectorAll('#ui-toc-affix a[href^="#"]').forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 40,
            behavior: "smooth"
          });
        }
      });
    });
  });
  