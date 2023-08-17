// checkout.js

const cartItemsContainer = document.querySelector('#cartItems');
const totalPrice = document.querySelector('#total');

let storedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];


document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cartProductsParam = urlParams.get('cartproducts');
    
    if (cartProductsParam) {
        // const storedCartProducts = JSON.parse(decodeURIComponent(cartProductsParam));
        const decodedCartProducts = JSON.parse(decodeURIComponent(cartProductsParam));

        // if (storedCartProducts.length > 0) {
            if (decodedCartProducts.length > 0) {
            cartItemsContainer.innerHTML = '<h3>Cart Items</h3>';

            // storedCartProducts.forEach(cartProduct => {
                decodedCartProducts.forEach(cartProduct => {
                const cartProductElement = document.createElement('div');   
                cartProductElement.className = "col"; 
                cartProductElement.innerHTML = `
                <div class="card">
                <img src="${cartProduct.img}" alt="${cartProduct.product} Image" class="card-img-top">
                <div class="card-body"><h4 class="card-title">Product: ${cartProduct.product}</h4>
                <p class="card-text">Price: ${cartProduct.price}</p>
                <p class="card-text">Quantity: ${cartProduct.quantity}</p>
                </div>
                </div>`;
                cartItemsContainer.appendChild(cartProductElement);
            });
        } else {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        }
    } else {
        cartItemsContainer.innerHTML = '<p>No cart items found.</p>';
    }
});


document.addEventListener('DOMContentLoaded', () => {
   
    const urlParams = new URLSearchParams(window.location.search);
    const cartProductsParam = urlParams.get('cartproducts');
    
    if (cartProductsParam) {
        const storedCartProducts = JSON.parse(decodeURIComponent(cartProductsParam));

        if (storedCartProducts.length > 0) {
            cartItemsContainer.innerHTML = '<h3>Cart Items</h3>';

            let totalAmount = 0; // Initialize total amount

            storedCartProducts.forEach(cartProduct => {
                const cartProductElement = document.createElement('div');
                cartProductElement.className = "col";   
                cartProductElement.innerHTML = `<div class="card"><img src="${cartProduct.img}" alt="${cartProduct.product} Image" class="card-img-top">
                <div class="card-body"><h4 class="card-title">Product: ${cartProduct.product}</h4>
                <p class="card-text">Price: ${cartProduct.price}</p>
                <p class="card-text">Quantity: ${cartProduct.quantity}</p>
                </div>
                </div>`;
                cartItemsContainer.appendChild(cartProductElement);

                totalAmount += cartProduct.price * cartProduct.quantity; // Calculate total amount
            });

            // Display total amount
            totalPrice.innerHTML = `<h2>Total Price: ${totalAmount.toFixed(2)}</h2>`;
        } else {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            totalPrice.innerHTML = ''; // Clear total price display
        }
    } else {
        cartItemsContainer.innerHTML = '<p>No cart items found.</p>';
        totalPrice.innerHTML = ''; // Clear total price display
    }
});

// Function to update localStorage with cart items
function updateLocalStorage(cartProducts) {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const product = event.target.getAttribute('data-product');
        const price = parseFloat(event.target.getAttribute('data-price'));
        const quantity = 1; // You can adjust this as needed
        const img = event.target.getAttribute('data-img');

        const cartProduct = { product, price, quantity, img };

        storedCartProducts.push(cartProduct);
        updateLocalStorage(storedCartProducts);

        // Refresh the page to reflect the updated cart
        location.reload();
    }
});


