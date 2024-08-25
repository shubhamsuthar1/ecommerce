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