// Hamburger menu toggle for mobile
document.getElementById('hamburger-icon').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('active');
});

// For mobile dropdown toggle
const dropdownLink = document.querySelector('.dropdown-link');
const dropdownContent = document.querySelector('.dropdown-content');

// Handle clicking on the "About" link to toggle the dropdown in mobile
dropdownLink.addEventListener('click', function (event) {
    // Prevent the default link behavior (no page reload)
    event.preventDefault();

    // Toggle dropdown content visibility
    dropdownContent.classList.toggle('active');
});

// Optional: Close dropdown if clicking outside of the dropdown menu
document.addEventListener('click', function (e) {
    // Close dropdown if the click happens outside of the "About" link or dropdown
    if (!dropdownLink.contains(e.target) && !dropdownContent.contains(e.target)) {
        dropdownContent.classList.remove('active');
    }
});
