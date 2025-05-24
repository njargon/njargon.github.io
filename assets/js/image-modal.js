document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".post-content img");
  images.forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      const modal = document.createElement("div");
      modal.className = "image-modal";
      modal.innerHTML = `
        <div class="image-modal-backdrop"></div>
        <img src="${img.src}" alt="${img.alt}" class="image-modal-content">
      `;
      document.body.appendChild(modal);

      modal.addEventListener("click", () => {
        modal.remove();
      });
    });
  });
});
