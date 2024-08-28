async function fetchProducts() {
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
    let categoryList = document.querySelector('.logo-lists');
    let cartBadge = document.querySelector('.cartBadge');
    const PRODUCTS_PER_LOAD = 20;  // Load 20 products at a time
    let allCategories = [];

    // Fetch the products data
    const products = await fetchProducts();

    // Function to handle category filter changes
    function categoryFilter() {
        let selectedCategories = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
            .map(e => e.value);
        display(selectedCategories);
    }

    // Function to display products based on selected categories
    async function display(selectedCategories = []) {
        productDiv.innerHTML = '';
        let filteredProducts = products.filter(product => selectedCategories.length === 0 || selectedCategories.includes(product.company));

        productDiv.className = 'row';

        filteredProducts.slice(0, PRODUCTS_PER_LOAD).forEach(product => {
            if (!allCategories.includes(product.company)) {
                let div = document.createElement('div');
                div.className = 'logodiv';
                div.style.cursor = 'pointer';
                div.innerHTML = `
                    <img src="${product.companyL}" class="images" alt="${product.company}">
                    <label>
                        <input class="checkbox" type="checkbox" value="${product.company}">${product.company}
                    </label>
                `;
                categoryList.appendChild(div);
                div.querySelector('.checkbox').addEventListener('click', debounce(categoryFilter, 300));
                allCategories.push(product.company);
            }

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
            button.addEventListener('click', function() {
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
        popup.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="popup-img">
            <div>
                <p>${product.name}</p>
                <p>₹${product.price}</p>
            </div>
        `;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add('show');
        }, 10);

        setTimeout(() => {
            popup.classList.remove('show');
            setTimeout(() => popup.remove(), 300);
        }, 3000);
    }

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Initial display of products and update cart badge on page load
    display();
    updateCartBadge();
});

document.addEventListener('DOMContentLoaded', () => {
  
    let preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none'; 
    }
});
