// Toggle the visibility of the dropdown when clicking on "About"
const aboutLink = document.getElementById('about-link');
const dropdownContent = document.getElementById('dropdown-content');

aboutLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    dropdownContent.classList.toggle('show'); // Toggle the visibility of the dropdown
});

// Optional: Close the dropdown if clicking outside of the dropdown
document.addEventListener('click', (e) => {
    if (!aboutLink.contains(e.target) && !dropdownContent.contains(e.target)) {
        dropdownContent.classList.remove('show');
    }
});