document.getElementById('hamburger-icon').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('active');
});

// For mobile dropdown toggle
const dropdownLink = document.querySelector('.dropdown-link');
const dropdownContent = document.querySelector('.dropdown-content'); // Use querySelector to select the correct element

dropdownLink.addEventListener('click', function (event) {
    // Prevent link navigation on click
    event.preventDefault();

    // Toggle dropdown content visibility
    dropdownContent.classList.toggle('active');
});
