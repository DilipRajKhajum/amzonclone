// Enhanced Product Data with more realistic information
const products = [
    {
        id: 1,
        name: "Sony WH-1000XM4 Wireless Noise Canceling Headphones",
        price: 279.99,
        originalPrice: 349.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        category: "electronics",
        rating: 4.6,
        reviews: 12450,
        description: "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo. Up to 30-hour battery life with quick charging (10 min charge for 5 hours of playback). Touch controls with Speak-to-Chat technology. Superior call quality with precise voice pickup.",
        badges: ["Best Seller", "Prime"],
        inStock: true,
        primeEligible: true,
        freeShipping: true
    },
    {
        id: 2,
        name: "Apple Watch Series 7 (GPS, 45mm) - Blue Aluminum Case",
        price: 399.00,
        originalPrice: 429.00,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        category: "electronics",
        rating: 4.7,
        reviews: 8920,
        description: "Always-On Retina display with crack-resistant front crystal. GPS, compass, always-on altimeter. Water resistant to 50m. Digital Crown with haptic feedback. 50% faster charging than Series 6. Blood oxygen monitoring. ECG monitoring. Irregular heart rhythm notifications.",
        badges: ["Prime"],
        inStock: true,
        primeEligible: true,
        freeShipping: true
    },
    {
        id: 3,
        name: "Nike Men's Dri-FIT Training T-Shirt",
        price: 24.99,
        originalPrice: 34.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        category: "clothing",
        rating: 4.4,
        reviews: 2156,
        description: "Sweat-wicking technology helps you stay dry and comfortable. Lightweight, breathable fabric. Standard fit for a relaxed, easy feel. Made with at least 75% recycled polyester fibers. Machine washable.",
        badges: ["Prime"],
        inStock: true,
        primeEligible: true,
        freeShipping: true
    },
    {
        id: 4,
        name: "The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness",
        price: 15.99,
        originalPrice: 19.99,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
        category: "books",
        rating: 4.8,
        reviews: 15678,
        description: "Morgan Housel shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life's most important topics. Perfect for anyone looking to understand the psychology behind financial decisions.",
        badges: ["Best Seller"],
        inStock: true,
        primeEligible: true,
        freeShipping: true
    },
    {
        id: 5,
        name: "Echo Dot (4th Gen) | Smart speaker with Alexa | Charcoal",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        category: "electronics",
        rating: 4.5,
        reviews: 45678,
        description: "Meet the Echo Dot - Our most popular smart speaker with Alexa. The sleek, compact design delivers crisp vocals and balanced bass for full sound. Voice control your entertainment. Call almost anyone hands-free. Instantly drop in on other rooms or announce to the whole house that dinner's ready.",
        badges: ["Best Seller", "Prime"],
        inStock: true,
        primeEligible: true,
        freeShipping: true
    },
    {
        id: 6,
        name: "Cuisinart TOA-60 Convection Toaster Oven Airfryer",
        price: 149.99,
        originalPrice: 199.99,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
        category: "home",
        rating: 4.3,
        reviews: 3421,
        description: "Versatile 8-in-1 countertop appliance. 1800-watt convection toaster oven with air fryer. 0.6 cubic feet capacity. 60-minute timer with auto-shutoff. Non-stick interior for easy cleaning. Includes baking pan and air fry basket.",
        badges: ["Prime"],
        inStock: true,
        primeEligible: true,
        freeShipping: true
    },
    {
        id: 7,
        name: "Levi's Men's 511 Slim Fit Jeans",
        price: 69.50,
        originalPrice: 89.50,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
        category: "clothing",
        rating: 4.2,
        reviews: 5678,
        description: "Classic 5-pocket styling with a modern slim fit through the hip and thigh. Straight leg opening. Made with premium denim that gets softer with every wash. Available in multiple washes and sizes.",
        badges: ["Prime"],
        inStock: true,
        primeEligible: true,
        freeShipping: true
    },
    {
        id: 8,
        name: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        price: 23.99,
        originalPrice: 29.99,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop",
        category: "books",
        rating: 4.9,
        reviews: 23456,
        description: "No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
        badges: ["Best Seller", "Prime"],
        inStock: true,
        primeEligible: true,
        freeShipping: true
    }
];

// Search suggestions
const searchSuggestions = [
    "wireless headphones",
    "smart watch",
    "laptop",
    "phone",
    "tablet",
    "camera",
    "gaming",
    "fitness tracker",
    "bluetooth speaker",
    "wireless earbuds",
    "smart home",
    "kitchen appliances",
    "books",
    "clothing",
    "shoes",
    "jewelry",
    "home decor",
    "garden tools",
    "pet supplies",
    "baby products"
];

// Cart State
let cart = [];
let currentProduct = null;
let searchHistory = [];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const recommendationsGrid = document.getElementById('recommendations-grid');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartIcon = document.getElementById('cart-icon');
const closeCart = document.getElementById('close-cart');
const productModal = document.getElementById('product-modal');
const closeModal = document.getElementById('close-modal');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const categoryCards = document.querySelectorAll('.category-card');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    displayRecommendations();
    setupEventListeners();
    updateCartDisplay();
    setupSearchSuggestions();
    startHeroSlider();
});

// Setup Event Listeners
function setupEventListeners() {
    // Cart functionality
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    
    // Modal functionality
    closeModal.addEventListener('click', closeProductModal);
    productModal.addEventListener('click', function(e) {
        if (e.target === productModal) {
            closeProductModal();
        }
    });
    
    // Search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // Category filtering
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterByCategory(category);
            updateBreadcrumb(category);
        });
    });

    // Buy Now button
    document.querySelector('.buy-now-btn').addEventListener('click', function() {
        if (currentProduct) {
            addToCart(currentProduct.id, parseInt(document.getElementById('quantity').value));
            closeProductModal();
            showNotification('Proceeding to checkout...');
            setTimeout(() => {
                showNotification('Checkout simulation complete!');
            }, 2000);
        }
    });

    // Checkout button
    document.querySelector('.checkout-btn').addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Your cart is empty!');
            return;
        }
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        showNotification(`Processing order for $${total.toFixed(2)}...`);
        
        setTimeout(() => {
            showNotification('Order placed successfully! Thank you for your purchase.');
            cart = [];
            updateCartDisplay();
            toggleCart();
        }, 3000);
    });
}

// Setup Search Suggestions
function setupSearchSuggestions() {
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        if (query.length > 2) {
            const suggestions = searchSuggestions.filter(suggestion => 
                suggestion.toLowerCase().includes(query)
            );
            showSearchSuggestions(suggestions);
        } else {
            hideSearchSuggestions();
        }
    });
}

// Show Search Suggestions
function showSearchSuggestions(suggestions) {
    let suggestionsBox = document.getElementById('search-suggestions');
    if (!suggestionsBox) {
        suggestionsBox = document.createElement('div');
        suggestionsBox.id = 'search-suggestions';
        suggestionsBox.className = 'search-suggestions';
        searchInput.parentNode.appendChild(suggestionsBox);
    }
    
    suggestionsBox.innerHTML = suggestions.map(suggestion => 
        `<div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>`
    ).join('');
    
    suggestionsBox.style.display = 'block';
}

// Hide Search Suggestions
function hideSearchSuggestions() {
    const suggestionsBox = document.getElementById('search-suggestions');
    if (suggestionsBox) {
        suggestionsBox.style.display = 'none';
    }
}

// Select Suggestion
function selectSuggestion(suggestion) {
    searchInput.value = suggestion;
    hideSearchSuggestions();
    handleSearch();
}

// Start Hero Slider
function startHeroSlider() {
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    
    setInterval(() => {
        indicators[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % indicators.length;
        indicators[currentSlide].classList.add('active');
    }, 5000);
}

// Display Products
function displayProducts(productsToShow) {
    productGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Display Recommendations
function displayRecommendations() {
    const recommendations = products.filter(p => p.rating >= 4.5).slice(0, 4);
    
    recommendationsGrid.innerHTML = '';
    recommendations.forEach(product => {
        const productCard = createProductCard(product);
        recommendationsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.badges.includes('Prime') ? '<div class="prime-badge">Prime</div>' : ''}
            ${discount > 0 ? `<div class="discount-badge">-${discount}%</div>` : ''}
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-rating">
                <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                <span class="rating-text">${product.rating}</span>
                <span class="reviews-count">(${product.reviews.toLocaleString()})</span>
            </div>
            <div class="product-price">
                <span class="current-price">$${product.price.toFixed(2)}</span>
                ${product.originalPrice > product.price ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            ${product.primeEligible ? '<div class="prime-info"><i class="fas fa-check"></i> Prime</div>' : ''}
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
    
    // Add click event to open modal
    card.addEventListener('click', function(e) {
        if (!e.target.classList.contains('add-to-cart')) {
            openProductModal(product);
        }
    });
    
    return card;
}

// Open Product Modal
function openProductModal(product) {
    currentProduct = product;
    
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-title').textContent = product.name;
    document.getElementById('modal-product-stars').textContent = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    document.getElementById('modal-product-rating').textContent = `${product.rating} out of 5`;
    document.getElementById('modal-product-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modal-product-original-price').textContent = `$${product.originalPrice.toFixed(2)}`;
    document.getElementById('modal-product-description').textContent = product.description;
    document.getElementById('modal-product-discount').textContent = `-${discount}%`;
    
    // Update badges
    const badgesContainer = document.querySelector('.product-badges');
    badgesContainer.innerHTML = product.badges.map(badge => 
        `<span class="badge ${badge.toLowerCase().replace(' ', '-')}">${badge}</span>`
    ).join('');
    
    // Update availability
    const availabilityElement = document.querySelector('.availability span');
    availabilityElement.textContent = product.inStock ? 'In Stock' : 'Out of Stock';
    availabilityElement.style.color = product.inStock ? '#007600' : '#CC0C39';
    
    productModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Product Modal
function closeProductModal() {
    productModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentProduct = null;
}

// Add to Cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    updateCartDisplay();
    showNotification(`${product.name} added to cart!`);
    
    // Add to search history
    if (!searchHistory.includes(product.name)) {
        searchHistory.unshift(product.name);
        searchHistory = searchHistory.slice(0, 10);
    }
}

// Add to Cart from Modal
document.getElementById('add-to-cart-modal').addEventListener('click', function() {
    if (currentProduct) {
        const quantity = parseInt(document.getElementById('quantity').value);
        addToCart(currentProduct.id, quantity);
        closeProductModal();
    }
});

// Update Cart Display
function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center">Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = createCartItem(item);
            cartItems.appendChild(cartItem);
        });
    }
    
    // Update totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal;
    
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Create Cart Item
function createCartItem(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
            <h4 class="cart-item-title">${item.name}</h4>
            <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `;
    return cartItem;
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

// Remove from Cart
function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    showNotification(`${item.name} removed from cart`);
}

// Toggle Cart Sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
}

// Handle Search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const category = document.querySelector('.search-category').value;
    
    if (!searchTerm) {
        displayProducts(products);
        return;
    }
    
    let filteredProducts = products;
    
    // Filter by search term
    filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    // Filter by category
    if (category && category !== 'All') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === category.toLowerCase()
        );
    }
    
    displayProducts(filteredProducts);
    hideSearchSuggestions();
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p class="text-center">No products found matching your search</p>';
    }
    
    // Add to search history
    if (!searchHistory.includes(searchTerm)) {
        searchHistory.unshift(searchTerm);
        searchHistory = searchHistory.slice(0, 10);
    }
}

// Filter by Category
function filterByCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
    
    // Update active category
    categoryCards.forEach(card => {
        card.style.borderColor = card.dataset.category === category ? '#FF9900' : 'transparent';
    });
}

// Update Breadcrumb
function updateBreadcrumb(category) {
    const breadcrumbCurrent = document.querySelector('.breadcrumb-current');
    const categoryNames = {
        'electronics': 'Electronics',
        'books': 'Books',
        'clothing': 'Fashion',
        'home': 'Home & Garden'
    };
    breadcrumbCurrent.textContent = categoryNames[category] || 'Featured Products';
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #232F3E;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications and search suggestions
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .search-suggestions {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #ddd;
        border-top: none;
        border-radius: 0 0 4px 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        z-index: 1000;
        display: none;
    }
    
    .suggestion-item {
        padding: 10px 15px;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    
    .suggestion-item:hover {
        background: #f8f9fa;
    }
    
    .prime-badge {
        position: absolute;
        top: 10px;
        left: 10px;
        background: #00A8E1;
        color: white;
        padding: 2px 6px;
        border-radius: 3px;
        font-size: 10px;
        font-weight: 600;
    }
    
    .discount-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        background: #CC0C39;
        color: white;
        padding: 2px 6px;
        border-radius: 3px;
        font-size: 10px;
        font-weight: 600;
    }
    
    .reviews-count {
        color: #767676;
        font-size: 12px;
    }
`;
document.head.appendChild(style);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape to close modals
    if (e.key === 'Escape') {
        if (productModal.style.display === 'block') {
            closeProductModal();
        }
        if (cartSidebar.classList.contains('open')) {
            toggleCart();
        }
        hideSearchSuggestions();
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Shop Now button functionality
document.querySelector('.cta-btn').addEventListener('click', function() {
    document.querySelector('.products').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Add loading state for better UX
function showLoading() {
    productGrid.innerHTML = '<div class="loading"></div>';
}

function hideLoading() {
    // Loading will be replaced by products
}

// Simulate loading for search
function handleSearchWithLoading() {
    showLoading();
    setTimeout(() => {
        handleSearch();
    }, 500);
}

// Update search button to use loading
searchBtn.addEventListener('click', handleSearchWithLoading);
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleSearchWithLoading();
    }
}); 
