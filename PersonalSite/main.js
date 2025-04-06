// Dark Mode Toggle Button functionality
const darkModeToggle = document.getElementById('darkModeToggle');

// Add event listener to toggle dark mode on click
darkModeToggle.addEventListener('click', function() {
    // Toggle the 'dark-theme' class on the body to switch themes
    document.body.classList.toggle('dark-theme');
});

// Scroll-to-top button functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '⬆️ Scroll to Top';
scrollToTopButton.id = 'scrollToTopButton';
scrollToTopButton.classList.add('btn');  // Add a class for styling
document.body.appendChild(scrollToTopButton);  // Add the button to the body

// When clicked, scroll back to the top of the page
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hide the scroll-to-top button when scrolling down past a certain point
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';  // Show button
    } else {
        scrollToTopButton.style.display = 'none';  // Hide button
    }
});
