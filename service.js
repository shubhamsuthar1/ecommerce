document.addEventListener('DOMContentLoaded', () => {
  
    let preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none'; 
    }
});
document.addEventListener('DOMContentLoaded', () => {
    let cartBadge = document.querySelector('.cartBadge');

    // Function to update the cart badge
    function updateCartBadge() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartBadge.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }

    // Initial update of cart badge on page load
    updateCartBadge();
});
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.popup-content .close-btn');

    // Function to show popup
    function showPopup(title, details, rating) {
        document.getElementById('service-title').textContent = title;
        document.getElementById('service-details').textContent = details;
        document.getElementById('service-rating').textContent = rating;
        popup.style.display = 'flex'; // Show the popup
    }

    // Function to hide popup
    function hidePopup() {
        popup.style.display = 'none'; // Hide the popup
    }

    // Event listener to close the popup
    closeBtn.addEventListener('click', hidePopup);
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            hidePopup();
        }
    });

    // Add click event to items
    const items = document.querySelectorAll('.product-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            // Example data, replace with actual data
            const title = item.querySelector('h6').textContent;
            const details = "Detailed information about the service.";
            const rating = "4.5/5";
            showPopup(title, details, rating);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const stickyClass = 'sticky';

    // Function to toggle sticky class
    function toggleStickyNavbar() {
        if (window.scrollY > 100) { // Adjust the value as needed
            navbar.classList.add(stickyClass);
        } else {
            navbar.classList.remove(stickyClass);
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', toggleStickyNavbar);
});
