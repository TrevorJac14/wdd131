// Select elements
const menuButton = document.querySelector('.menu');
const nav = document.querySelector('nav');
const gallery = document.querySelector('.gallery');
const viewer = document.querySelector('.viewer');
const viewerImage = viewer.querySelector('img');
const closeButton = viewer.querySelector('.close-viewer');

// Toggle nav menu
menuButton.addEventListener('click', () => {
  nav.classList.toggle('hide');
});

// Open viewer with clicked image
gallery.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    viewerImage.src = e.target.src;
    viewerImage.alt = e.target.alt;
    viewer.classList.remove('hide');
  }
});

// Close viewer
closeButton.addEventListener('click', () => {
  viewer.classList.add('hide');
  viewerImage.src = '';
  viewerImage.alt = '';
});
