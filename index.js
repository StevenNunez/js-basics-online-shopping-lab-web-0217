var cart;

function setCart(newCart) {
  cart = newCart;
}

const getCart = () => cart
const viewCart = () => {
  if(!cart[0]){
    console.log("Your shopping cart is empty.")
    return
  }

  let itemsSummary = cart.map((item) => {
    let itemName = Object.keys(item)[0]
    let itemPrice = item[itemName]
    return `${itemName} at $${itemPrice}`
  })
  console.log(`In your cart, you have ${itemsSummary.join(", ")}.`)
}

const removeFromCart = (item) => {
  let filteredCart = cart.filter((storedItem) => {
    return !storedItem[item]
  })

  if(filteredCart.length == cart.length) {
    console.log("That item is not in your cart.")
  } else {
    cart = filteredCart
  }
}
const addToCart = (item) => {
  let newItem = {[item]: 1}
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)

  return cart
}
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
