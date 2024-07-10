// admin.js
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let productName = document.getElementById('productName').value;
    let productPrice = document.getElementById('productPrice').value;
    let productImage = document.getElementById('productImage').files[0];
    let productCategory = document.getElementById('productCategory').value;

    let reader = new FileReader();
    reader.onloadend = function() {
        let product = {
            name: productName,
            price: parseFloat(productPrice),
            image: reader.result
        };
        let products = JSON.parse(localStorage.getItem(productCategory)) || [];
        products.push(product);
        localStorage.setItem(productCategory, JSON.stringify(products));
        displayProducts(productCategory);
    };
    reader.readAsDataURL(productImage);
});

function displayProducts(category) {
    let productList = document.getElementById('productList');
    productList.innerHTML = '';
    let products = JSON.parse(localStorage.getItem(category)) || [];
    products.forEach((product, index) => {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="removeProduct('${category}', ${index})">Remove</button>
        `;
        productList.appendChild(productDiv);
    });
}

function removeProduct(category, index) {
    let products = JSON.parse(localStorage.getItem(category)) || [];
    products.splice(index, 1);
    localStorage.setItem(category, JSON.stringify(products));
    displayProducts(category);
}