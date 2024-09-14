// Sample product data
const products = [
    { id: 1, name: "Diamond Solitaire Ring", price: 2999.99, image: "image.png" },
    { id: 2, name: "Pearl Necklace", price: 799.99, image: "image.png" },
    { id: 3, name: "Sapphire Earrings", price: 1499.99, image: "image.png" },
    { id: 4, name: "Gold Bracelet", price: 999.99, image: "image.png" },
    { id: 5, name: "Emerald Pendant", price: 1299.99, image: "image.png" },
    { id: 6, name: "Ruby Tennis Bracelet", price: 2499.99, image: "image.png" },
];

// Function to render product cards
function renderProducts() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Function to handle adding items to cart
function addToCart(productId) {
    console.log(`Product ${productId} added to cart`);
    // Here you would typically update the cart state and possibly show a notification
    alert(`Product ${productId} added to cart`);
}

// Event listener for add to cart buttons
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = e.target.getAttribute('data-id');
        addToCart(productId);
    }
});

// Render products when the page loads
document.addEventListener('DOMContentLoaded', renderProducts);