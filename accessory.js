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
    // $(document).ready(function () {
    //     function toggleNavbarMethod() {
    //         if ($(window).width() > 992) {
    //             $('.navbar .dropdown').on('mouseover', function () {
    //                 $('.dropdown-toggle', this).trigger('click');
    //             }).on('mouseout', function () {
    //                 $('.dropdown-toggle', this).trigger('click').blur();
    //             });
    //         } else {
    //             $('.navbar .dropdown').off('mouseover').off('mouseout');
    //         }
    //     }
    //     toggleNavbarMethod();
    //     $(window).resize(toggleNavbarMethod);
    // });
    
    
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


document.addEventListener('DOMContentLoaded', () => {
    const scroller = document.querySelector('.scroller');
    const scrollerWrapper = document.querySelector('.scroller-wrapper');

    // Duplicate the content inside the scroller to create the endless loop
    scroller.innerHTML += scroller.innerHTML;

    // Calculate the total width of the scroller content
    const scrollerWidth = scroller.scrollWidth;

    // Set the animation duration based on the content width
    const scrollTime = scrollerWidth / 200; // Adjust speed by changing the divisor (50)
    scroller.style.animationDuration = `${scrollTime}s`;

    // Add event listener to reset the animation when it ends
    scroller.addEventListener('animationiteration', () => {
        scroller.style.animation = 'none';
        scroller.offsetHeight; // Trigger reflow
        scroller.style.animation = `scroll ${scrollTime}s linear infinite`;
    });
});

async function fetchProducts() {
    const images = [
        { src: 'logo/Crompton.webp', alt: 'Crompton', value: 'Crompton' },
        { src: 'logo/Anchor.webp', alt: 'Anchor', value: 'Anchor' },
        { src: 'logo/atomberg.webp', alt: 'Atomberg', value: 'Atomberg' },
        { src: 'logo/Havells.webp', alt: 'Havells', value: 'Havells' },
        { src: 'logo/khaitan.webp', alt: 'Khaitan', value: 'Khaitan' },
        { src: 'logo/Luminous.webp', alt: 'Luminous', value: 'Luminous' },
        { src: 'logo/Relaxo.webp', alt: 'Relaxo', value: 'Relaxo' },
        { src: 'logo/RR kable.webp', alt: 'RR Kable', value: 'RR Kable' },
        { src: 'logo/Bajaj.webp', alt: 'Bajaj', value: 'Bajaj' },
        { src: 'logo/Cinni.webp', alt: 'Cinni', value: 'Cinni' },
        { src: 'logo/orient.webp', alt: 'Orient', value: 'Orient' },
        { src: 'logo/Orpat.webp', alt: 'Orpat', value: 'Orpat' },
        { src: 'logo/Ortem.webp', alt: 'Ortem', value: 'Ortem' },
        { src: 'logo/Polycab.webp', alt: 'Polycab', value: 'Polycab' },
        { src: 'logo/superfan.webp', alt: 'Superfan', value: 'Superfan' },
        { src: 'logo/Surya.webp', alt: 'Surya', value: 'Surya' },
        { src: 'logo/Syska.webp', alt: 'Syska', value: 'Syska' },
        { src: 'logo/Usha.webp', alt: 'Usha', value: 'Usha' },
        { src: 'logo/V-Guard.webp', alt: 'V-Guard', value: 'V-Guard' }
    ];

    const imageContainer = document.querySelector('.scroller');

    images.forEach(image => {
        const col = document.createElement('div');
        col.classList.add('image-container');
        
        col.innerHTML = `
        <img class="custom-img" src="${image.src}" alt="${image.alt}">
        `;
        
        imageContainer.appendChild(col);
    });

}
fetchProducts()


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
