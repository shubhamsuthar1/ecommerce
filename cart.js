document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('#cart-items');
    const clearCartButton = document.querySelector('#clear-cart');
    const subtotalElement = document.querySelector('#subtotal');
    const shippingElement = document.querySelector('#shipping');
    const totalElement = document.querySelector('#total');

    function renderCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<tr><td colspan="6">Your cart is empty.</td></tr>';
            updateCartTotal();
            return;
        }

        cart.forEach(item => {
            let total = item.price * item.quantity;
            cartItemsContainer.innerHTML += `
                <tr>
                    <td>${item.name} - <small>${item.company}</small></td>
                    <td>₹${item.price}</td>
                    <td class="w-25">
                        <div class="quantity-control">
                            <button class="decrement-btn" data-id="${item.id}">-</button>
                            <input type="number" value="${item.quantity}" min="1" class="quantity-input w-25" data-id="${item.id}" readonly>
                        <button class="increment-btn" data-id="${item.id}">+</button>
                        </div>
                    </td>
                    <td>₹${total}</td>
                    <td>
                        <button class="btn btn-danger remove-item" data-id="${item.id}">╳</button>
                    </td>
                    <td>
                    <a href="checkout.html"><button class="btn btn-primary buy-item text-white" data-id="${item.id}">Buy</button></a>
                    </td>
                </tr>
            `;
        });

        addEventListeners();
        updateCartTotal();
    }

    function updateCartTotal() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        let shipping = 0; // Adjust if you have shipping rules
        let total = subtotal + shipping;

        subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
        shippingElement.textContent = `₹${shipping.toFixed(2)}`;
        totalElement.textContent = `₹${total.toFixed(2)}`;
    }

    function addEventListeners() {
        const incrementButtons = document.querySelectorAll('.increment-btn');
        const decrementButtons = document.querySelectorAll('.decrement-btn');
        const removeButtons = document.querySelectorAll('.remove-item');
        const buyButtons = document.querySelectorAll('.buy-item');

        incrementButtons.forEach(button => {
            button.addEventListener('click', incrementQuantity);
        });

        decrementButtons.forEach(button => {
            button.addEventListener('click', decrementQuantity);
        });

        removeButtons.forEach(button => {
            button.addEventListener('click', removeItem);
        });

        buyButtons.forEach(button => {
            button.addEventListener('click', buyItem);
        });
    }

    function incrementQuantity(event) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let productId = event.target.getAttribute('data-id');

        let product = cart.find(item => item.id === productId);
        if (product) {
            product.quantity += 1;
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
    }

    function decrementQuantity(event) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let productId = event.target.getAttribute('data-id');

        let product = cart.find(item => item.id === productId);
        if (product && product.quantity > 1) {
            product.quantity -= 1;
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
    }

    function removeItem(event) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let productId = event.target.getAttribute('data-id');

        cart = cart.filter(item => item.id !== productId);

        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
    }

    function buyItem(event) {
        let productId = event.target.getAttribute('data-id');
        // alert(`Product with ID ${productId} is ready to be bought!`);
        // Implement the buying logic here.
    }

    clearCartButton.addEventListener('click', () => {
        localStorage.removeItem('cart');
        renderCartItems();
    });

    renderCartItems();
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
