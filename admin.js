
// Function to submit the order and save it in localStorage
function submitOrder() {
    // Get the form data
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let phone = document.getElementById('phone').value;

    // Create an order object
    let order = {
        name: name,
        address: address,
        phone: phone,
        items: JSON.parse(localStorage.getItem('cart')) || []
    };

    // Get the existing orders from localStorage or create a new array
    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Add the new order to the orders array
    orders.push(order);

    // Save the updated orders array to localStorage
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear the cart
    localStorage.removeItem('cart');

    // Notify the user
    alert('Your order has been submitted successfully.');

    // Redirect to the home page
    window.location.href = 'index.html';
}

// Function to display the orders on the admin.html page
function displayOrders() {
    // Get the orders from localStorage
    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Get the orders container element
    let ordersContainer = document.getElementById('orders-container');

    // Clear the orders container
    ordersContainer.innerHTML = '';

    // Display each order in a table
    orders.forEach((order, index) => {
        let orderElement = document.createElement('tr');
        orderElement.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.name}</td>
            <td>${order.address}</td>
            <td>${order.phone}</td>
            <td>${order.items.map(item => item.name).join(', ')}</td>
            <td>${order.items.reduce((total, item) => total + item.price, 0)} FCFA</td>
        `;
        ordersContainer.appendChild(orderElement);
    });
}

// Call displayOrders when the admin.html page is loaded
if (window.location.pathname.endsWith('admin.html')) {
    window.onload = displayOrders;
}
