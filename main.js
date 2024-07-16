// function store() {
//     let output1 = `<div class="show">
//     <section class="main0">
//                         <div class="main2">
//                             <h5>Fan</h5>
//                             <a><i class="fa fa-angle-right mr-2"></i>Exost Fan</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Selling Fan</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>peadlet Fan</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Wall Fan</a><br>
//                         </div>
//                         <div class="main2">
//                             <h5>Home Appliance</h5>
//                             <a><i class="fa fa-angle-right mr-2"></i>Mixer Grinder</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Refrigerator</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Aata Chakki</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Washing Machine</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Electric Stove</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Coffee Maker</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Blender</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Microwave Oven</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Toaster</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>iron</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Vacum Cleaner</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>R.O Plant</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Geyser</a><br>
//                         </div>
//                         <div class="main2">
//                             <h5 >Air Cooler</h5>
//                             <a><i class="fa fa-angle-right mr-2"></i>Air(Central)</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>AC(Room)</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>peadlet Fan</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Wall Fan</a><br>
//                         </div>
//                         <div class="main2">
//                           <h5>Electrical Department</h5>
//                             <a><i class="fa fa-angle-right mr-2"></i>Wiring</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Panal Light</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Water</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>MCB Switch</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Water Auto Level</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Inverter</a><br>
//                             <a><i class="fa fa-angle-right mr-2"></i>Inverter Battery</a><br>
//                         </div>
//                     </section></div>`;
//     document.getElementById("navbar2").innerHTML=output1;
// }

let searchbox = () => {
    let filter = document.getElementById('input').value.toUpperCase();
    let pt = document.getElementsByTagName("h5");

}










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



function closenav() {
    document.getElementById("navbar2").innerHTML = '';
}

function topclose() {
    let h = window.event.clientY;
    if (h < 100) {
        document.getElementById("navbar2").innerHTML = ''
    }
}





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


    

    // Vendor carousel
    // $('.vendor-carousel').owlCarousel({
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
    
    }) (jQuery);
