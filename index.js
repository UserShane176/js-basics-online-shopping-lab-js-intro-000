var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor((Math.random() * 100)) })
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
                        }
  else {
         var viewItems = []

         for (let i = 0; i < item.length; i++)
         if (i = 0){
         viewItems.push(`${cart[itemName]} at $${cart['itemPrice']}`)
                  }
         else{
         viewItems.push(`and ${cart['itemName']} at $${cart['itemPrice']}`)
             }
       }
    return `In your cart, you have ${viewItems.join(', ')}.`
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
