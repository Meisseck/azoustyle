
// Function to add a product to the cart
function addToCart(productName, productPrice) {
    // Get the existing cart from localStorage or create a new one
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    cart.push({ name: productName, price: productPrice });

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Notify the user
    alert(productName + ' has been added to your cart.');
}

// Function to display the cart contents on the cart.html page
function displayCart() {
    // Get the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Get the cart container element
    let cartContainer = document.getElementById('cart-container');

    // Clear the cart container
    cartContainer.innerHTML = '';

    // Display each product in the cart
    cart.forEach((product, index) => {
        let productElement = document.createElement('div');
        productElement.className = 'cart-item';
        productElement.innerHTML = `
            <p>${product.name} - ${product.price} FCFA</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(productElement);
    });

    // Display the total price
    let totalPrice = cart.reduce((total, product) => total + product.price, 0);
    let totalPriceElement = document.createElement('div');
    totalPriceElement.className = 'cart-total';
    totalPriceElement.innerHTML = `<p>Total: ${totalPrice} FCFA</p>`;
    cartContainer.appendChild(totalPriceElement);
}

// Function to remove a product from the cart
function removeFromCart(index) {
    // Get the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove the product at the specified index
    cart.splice(index, 1);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Refresh the cart display
    displayCart();
}

// Call displayCart when the cart.html page is loaded
if (window.location.pathname.endsWith('cart.html')) {
    window.onload = displayCart;
}
