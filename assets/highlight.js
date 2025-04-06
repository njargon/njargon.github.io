document.addEventListener("DOMContentLoaded", function () {
    const contentBlocks = document.querySelectorAll(".post-content, .page-content");
  
    contentBlocks.forEach(block => {
      block.innerHTML = block.innerHTML.replace(/==(.+?)==/g, '<mark>$1</mark>');
    });
  });
  