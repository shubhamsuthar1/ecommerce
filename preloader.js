document.addEventListener('DOMContentLoaded', () => {
  
    let preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none'; 
    }
});



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
document.addEventListener("DOMContentLoaded", function () {
    function toggleNavbarMethod() {
        var dropdowns = document.querySelectorAll('.navbar .dropdown');
        if (window.innerWidth > 992) {
            dropdowns.forEach(function (dropdown) {
                dropdown.addEventListener('mouseover', function () {
                    var dropdownToggle = dropdown.querySelector('.dropdown-toggle');
                    if (dropdownToggle) {
                        dropdownToggle.click();
                    }
                });

                dropdown.addEventListener('mouseout', function () {
                    var dropdownToggle = dropdown.querySelector('.dropdown-toggle');
                    if (dropdownToggle) {
                        dropdownToggle.click();
                        dropdownToggle.blur();
                    }
                });
            });
        } else {
            dropdowns.forEach(function (dropdown) {
                dropdown.replaceWith(dropdown.cloneNode(true));
            });
        }
    }

    toggleNavbarMethod();
    window.addEventListener('resize', toggleNavbarMethod);
});
