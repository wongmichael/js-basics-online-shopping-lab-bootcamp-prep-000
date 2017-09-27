var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({[item]:Math.floor(Math.random()*100)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (!cart.length){
    console.log("Your shopping cart is empty.")
    return
  }
  var str = "In your cart, you have"
  if (cart.length==1) {
    return `${str} ${Object.keys(cart)[0]} at $${Object.values(cart)[0]}.`
  } else if (cart.length==2) {
      return `$(str) ${Object.keys(cart)[0]} at $${Object.values(cart)[0]} and ${Object.keys(cart)[1]} at $${Object.values(cart)[1]}.`
  } else {
      var str2
      for (var i=0;i<cart.length-1;i++){
        str2+=`${Object.keys(cart)[i]} at $${Object.values(cart)[i]},`
      }
      //str2=str2+
      str2=`${str2} and ${Object.keys(cart)[cart.length-1]} at $${Object.values(cart)[cart.length--1]}.`
      return `${str} ${str2}`
  }
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
