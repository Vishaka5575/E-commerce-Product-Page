// script.js

// Product price
const productPrice = 20.00;

// Add to Cart Function
function addToCart() {
  const quantityInput = document.getElementById('quantity');
  const quantity = parseInt(quantityInput.value);
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');

  if (quantity > 0) {
    // Update cart items
    cartItems.innerHTML = `
      <p>Stylish T-Shirt (x${quantity}) - $${(quantity * productPrice).toFixed(2)}</p>
    `;

    // Update total price
    totalPrice.innerHTML = `Total Price: $${(quantity * productPrice).toFixed(2)}`;
  } else {
    alert('Please enter a valid quantity.');
  }
}
