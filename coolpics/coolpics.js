const menuButton = document.querySelector("#menuButton");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hide");
});
function handleResize() {
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
}
  
window.addEventListener("resize", handleResize);
handleResize();

function viewerTemplate(imagePath, altText) {
    return `
      <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${imagePath}" alt="${altText}">
      </div>
    `;
}
  
function viewHandler(event) {
    const target = event.target;
    if (target.tagName === "IMG") {
      const src = target.src;
      const alt = target.alt;
      const largeImage = src.replace(".jpeg", "-full.jpeg"); // Adjust as needed for your filenames
      const viewerHTML = viewerTemplate(largeImage, alt);
      document.body.insertAdjacentHTML("afterbegin", viewerHTML);
  
      const closeButton = document.querySelector(".close-viewer");
      closeButton.addEventListener("click", closeViewer);
    }
}
  
function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) viewer.remove();
}
  
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);
  