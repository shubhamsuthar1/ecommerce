const searchFun = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();

    // Select the container with the ID 'items'
    let productsContainer = document.getElementById('items');
    
    // Select all the product items within the container
    let products = productsContainer.getElementsByClassName('product-item');

    // Loop through all product items and hide those that don't match the search query
    for (let i = 0; i < products.length; i++) {
        let h6 = products[i].getElementsByTagName('h6')[0];

        if (h6) {
            let textvalue = h6.textContent || h6.innerHTML;

            if (textvalue.toUpperCase().indexOf(filter) >= 0) {
                products[i].style.display = "";
            } else {
                products[i].style.display = "none";
            }
        }
    }
};
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
document.addEventListener('DOMContentLoaded', () => {
  
    let preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none'; 
    }
});

//this is for service 
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