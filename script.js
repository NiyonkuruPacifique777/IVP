// script.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayProducts(category) {
    let products = JSON.parse(localStorage.getItem(category)) || [];
    let productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    products.forEach((product, index) => {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${category}', ${index})" class='add' style='background:darkblue;'>
                <img src="cart-icon.png" alt="Add to Cart" style='height:35px; width:35px;'>
            </button>
        `;
        productGrid.appendChild(productDiv);
    });
}

function addToCart(category, index) {
    let products = JSON.parse(localStorage.getItem(category)) || [];
    let product = products[index];
    let cartItem = cart.find(item => item.name === product.name);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(name) {
    let cartItem = cart.find(item => item.name === name);
    if (cartItem) {
        cartItem.quantity--;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(item => item.name !== name);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function confirmPurchase() {
    const totalAmount = calculateTotal();
    if (confirm(`The total amount is $${totalAmount.toFixed(2)}. Do you want to proceed?`)) {
        alert('Purchase done successfully!');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    } else {
        alert('Purchase canceled.');
    }
}

if (document.getElementById('cart')) {
    updateCart();
}

function updateCart() {
    let cartTable = document.getElementById('cart').getElementsByTagName('tbody')[0];
    cartTable.innerHTML = '';

    cart.forEach(item => {
        let row = cartTable.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.textContent = item.name;
        cell2.textContent = item.quantity;
        cell3.textContent = `$${item.price * item.quantity}`;
        cell4.innerHTML = `<button onclick="removeFromCart('${item.name}')">Remove</button>`;
    });

    document.getElementById('total').textContent = `Total: $${calculateTotal().toFixed(2)}`;
}