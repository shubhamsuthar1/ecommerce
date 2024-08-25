import '/style.css'

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#items'),
//     smooth: true
// });
// import allproducts from "./api/product.json";
// import { showproducts } from './apifetch';
 
// showproducts(allproducts);

   
// const searchFun = () => {
//     let filter = document.getElementById('myInput').value.toUpperCase();

//     // Select the container with the ID 'items'
//     let productsContainer = document.getElementById('items');
    
//     // Select all the product items within the container
//     let products = productsContainer.getElementsByClassName('product-item');

//     // Loop through all product items and hide those that don't match the search query
//     for (let i = 0; i < products.length; i++) {
//         let h6 = products[i].getElementsByTagName('h6')[0];

//         if (h6) {
//             let textvalue = h6.textContent || h6.innerHTML;

//             if (textvalue.toUpperCase().indexOf(filter) >= 0) {
//                 products[i].style.display = "";
//             } else {
//                 products[i].style.display = "none";
//             }
//         }
//     }
// };




// search bar code end


//nav bar 
// window.addEventListener("scroll",
//     function () {

//         let nav = document.getElementById("menu-bar");

//         if (window.scrollY >= 80) {
//             nav.classList.add('navbar');
//             console.log("hello");
//         } else {
//             nav.classList.remove('navbar');
//         }
//     });



//nav bar end




document.getElementById('homefan').addEventListener('click', function () {
  window.location.href = 'Accessory.html#Fans';
});

document.addEventListener('DOMContentLoaded', function () {
  if (window.location.hash === '#Fans') {
      document.getElementById('Fans').scrollIntoView();
  }
});

document.getElementById('Hair').addEventListener('click', function () {
  window.location.href = 'Accessory.html#AIr-cooler';
});
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.hash === '#AIr-cooler') {
      document.getElementById('AIr-cooler').scrollIntoView();
  }
});


document.getElementById('HApliance').addEventListener('click', function () {
  window.location.href = 'Accessory.html#Home';
});
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.hash === '#Home') {
      document.getElementById('Home').scrollIntoView();
  }
});


document.getElementById('Helectrical').addEventListener('click', function () {
  window.location.href = 'Accessory.html#Electrical-dep';
});
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.hash === '#Electrical-dep') {
      document.getElementById('Electrical-dep').scrollIntoView();
  }
});









(function ($) {
  "use strict";
  
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


  

  //   Vendor carousel
  //    $('.vendor-carousel').owlCarousel({
  //     loop: true,
  //     margin: 29,
  //     nav: false,
  //     autoplay: true,
  //     smartSpeed: 1000,
  //     responsive: {
  //         0:{
  //             items:2
  //         },
  //         576:{
  //             items:3
  //         },
  //         768:{
  //             items:4
  //         },
  //         992:{
  //             items:5
  //         },
  //         1200:{
  //             items:6
  //         }
  //     }
  // });


  // Related carousel
  // $('.related-carousel').owlCarousel({
  //     loop: true,
  //     margin: 29,
  //     nav: false,
  //     autoplay: true,
  //     smartSpeed: 1000,
  //     responsive: {
  //         0:{
  //             items:1
  //         },
  //         576:{
  //             items:2
  //         },
  //         768:{
  //             items:3
  //         },
  //         992:{
  //             items:4
  //         }
  //     }
  // });


  // Product Quantity
  $('.quantity button').on('click', function () {
      var button = $(this);
      var oldValue = button.parent().parent().find('input').val();
      if (button.hasClass('btn-plus')) {
          var newVal = parseFloat(oldValue) + 1;
      } else {
          if (oldValue > 0) {
              var newVal = parseFloat(oldValue) - 1;
          } else {
              newVal = 0;
          }
      }
      button.parent().parent().find('input').val(newVal);
  });
  
  
  
  const searchFun = () => {
      let filter = $('#myInput').val().toUpperCase();
      
      // Select the container with the ID 'items'
      let products = $('#items .product-item');
      
      // Loop through all product items and hide those that don't match the search query
      products.each(function() {
          let h6 = $(this).find('h6').first();
          
          if (h6.length) {
              let textvalue = h6.text();

              if (textvalue.toUpperCase().indexOf(filter) >= 0) {
                  $(this).show();
                } else {
                    $(this).hide();
                }
            }
    });
};

})(jQuery);


//gsap code for animation
// gsap.from("#items", {
//     y: -20,
//     opacity: 0,
//     delay: 1,
//     duration: 0.9,
//     stagger:1
// })

// document.addEventListener('DOMContentLoaded', () => {
  
//     let preloader = document.getElementById('preloader');
//     if (preloader) {
//         preloader.style.display = 'none'; 
//     }
// });
