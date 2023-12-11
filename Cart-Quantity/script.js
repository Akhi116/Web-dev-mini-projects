let quantity = 0;
function updateCartQuantity(number) {
  if (quantity + number > 10) {
    alert('The cart is full');
    return;
  }

  else if (quantity + number < 0) {
    alert('Not enough items in the cart');
    return;
  }

  else {
    quantity += number;
    cartQuantity();
  }
}

function cartQuantity(){
  document.querySelector('.js-cart')
    .innerHTML = `Cart quantity: ${quantity}`
}