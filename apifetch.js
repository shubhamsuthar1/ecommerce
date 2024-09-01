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

    const imageContainer = document.getElementById('imageContainer');

    images.forEach(image => {
        const col = document.createElement('div');
        
        col.innerHTML = `
            <img src="${image.src}" class="img-fluid" alt="${image.alt}" style="width:100px;">
            <label class="d-block text-center mt-2">
                <input type="checkbox" value="${image.value}"> ${image.alt}
            </label>
        `;
        
        imageContainer.appendChild(col);
    });

    try {
        const response = await fetch('./api/product.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        alert('Failed to load products. Please try again later.');
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    let productDiv = document.querySelector('#productDiv');
    let cartBadge = document.querySelector('.cartBadge');
    const PRODUCTS_PER_LOAD = 20;  // Load 20 products at a time
    // let allCategories = [];

    // Fetch the products data
    const products = await fetchProducts();

    // Function to handle category filter changes
    function categoryFilter() {
        let selectedCategories = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
            .map(e => e.value);
        display(selectedCategories);
    }

    // Debounced category filter function
    const debouncedCategoryFilter = debounce(categoryFilter, 300);

    // Function to display products based on selected categories
    function display(selectedCategories = []) {
        productDiv.innerHTML = '';
        let filteredProducts = products.filter(product => selectedCategories.length === 0 || selectedCategories.includes(product.company));

        productDiv.className = 'row';

        filteredProducts.slice(0, PRODUCTS_PER_LOAD).forEach(product => {
            productDiv.innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 pb-2">
            <div class="card product-item mb-3 h-100 Fans" data-id="${product.id}">
                <div class="card-header product-img position-relative overflow-hidden bg-transparent border-0 p-0 p-2">
                    <img class="img-fluid w-100" src="${product.image}" alt="${product.name}">
                </div>
                <div class="card mt-auto border-left border-right text-center p-0 pt-2 pb-0" id="pname">
                    <h6 class="text-truncate mb-2">${product.name}</h6>
                    <div class="d-flex justify-content-center">
                        <h6 class="pricetag">₹${product.price}</h6><h6 class="text-muted ml-2"><del>₹${product.discount * 4}</del></h6>
                    </div>
                </div>
                <div class="d-flex justify-content-between mb-1">
                    <div class="border">
                        <button class="btn btn-primary text-white float-start buy" style="border-radius: 5px;"><i class="fa fa-shopping-cart"></i> Buy</button>
                    </div>
                    <div class="border addcart">
                        <button class="btn btn-primary text-white ml-1 add-to-cart" style="border-radius: 5px;"><i class="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
        
            `;
        });

        let addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                let productCard = this.closest('.product-item');
                let productId = productCard.getAttribute('data-id');
                let product = {
                    id: productId,
                    name: productCard.querySelector('h6').textContent,
                    price: productCard.querySelector('.pricetag').textContent.replace('₹', ''),
                    image: productCard.querySelector('img').src,
                    quantity: 1
                };

                addToCart(product);
            });
        });
    }

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existingProductIndex = cart.findIndex(item => item.id === product.id);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        // Update cart badge
        updateCartBadge();

        // Show cart-side popup
        showCartPopup(product);
    }

    function updateCartBadge() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartBadge.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }

    function showCartPopup(product) {
        let popup = document.createElement('div');
        popup.className = 'cart-popup';
        popup.style.position = 'fixed';  // Ensure the popup stays in place
        popup.style.bottom = '10px';     // Position at the bottom
        popup.style.right = '10px';      // Position at the right
        popup.style.zIndex = '1000';     // Ensure it is above other elements

        popup.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="popup-img" style="width: 50px; height: 50px;">
            <div style="display: inline-block; vertical-align: top; margin-left: 10px;">
                <p style="margin: 0;">${product.name}</p>
                <p style="margin: 0;">₹${product.price}</p>
            </div>
        `;

        document.body.appendChild(popup);

        // Animate popup visibility
        setTimeout(() => {
            popup.classList.add('show');
        }, 10);

        // Remove popup after 3 seconds
        setTimeout(() => {
            popup.classList.remove('show');
            setTimeout(() => popup.remove(), 300);
        }, 500);
    }

    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Initial display of products and update cart badge on page load
    display();
    updateCartBadge();

    // Attach debounced category filter to checkbox events
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        checkbox.addEventListener('change', debouncedCategoryFilter);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});
