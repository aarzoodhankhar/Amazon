// Sticky Navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Cart Management
let cartCount = 0;
const cartItems = new Set();

function toggleCartItem(itemId) {
    if (cartItems.has(itemId)) {
        cartItems.delete(itemId); // Remove item from cart
        cartCount--;
    } else {
        cartItems.add(itemId); // Add item to cart
        cartCount++;
    }
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cartCount;
}

// Adding event listeners to each item
document.querySelectorAll('.item').forEach((item, index) => {
    const itemId = `item-${index}`; // Create a unique ID for each item
    item.addEventListener('click', () => toggleCartItem(itemId));
});

// Smooth Scroll to Top
document.querySelector('.foot-panel1').addEventListener('click', function () {
    console.log('Back to Top clicked'); // Debugging log
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Search Suggestion Functionality
const searchInput = document.getElementById('search-input');
const suggestionBox = document.getElementById('suggestion-box');

// Sample suggestions
const suggestions = [
    "Laptops",
    "Mobile Phones",
    "Headphones",
    "Gaming Accessories",
    "Smart Watches",
    "Home Appliances",
    "Kitchen Gadgets",
    "Books",
];

// Listen for input changes in the search bar
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestionBox.innerHTML = ''; // Clear previous suggestions

    if (query) {
        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query));
        filteredSuggestions.forEach(suggestion => {
            const suggestionElement = document.createElement('div');
            suggestionElement.textContent = suggestion;
            suggestionElement.classList.add('suggestion-item');

            // Add click event to fill input
            suggestionElement.addEventListener('click', () => {
                searchInput.value = suggestion;
                suggestionBox.innerHTML = ''; // Clear suggestions after selection
            });
            suggestionBox.appendChild(suggestionElement);
        });
    }
});

// Hide suggestions when input loses focus
searchInput.addEventListener('blur', () => {
    setTimeout(() => {
        suggestionBox.innerHTML = '';
    }, 200); // Add a slight delay to allow click selection
});
