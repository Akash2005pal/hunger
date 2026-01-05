const initailState = {
  cart: {},
  user: {}
}
function RootReducer(state = initailState, action) {
  switch (action.type) {
    case "ADD_CART":
      state.cart[action.payload[0]] = action.payload[1]
      console.log("CART:", state.cart)
      return { cart: state.cart, user: state.user }
    case "ADD_USER":
      state.user[action.payload[0]] = action.payload[1]

      return { cart: state.cart, user: state.user }
    case "DELETE_CART":
      delete state.cart[action.payload[0]]
      console.log("CART:", state.cart)
      return { cart: state.cart }
    default:
      return { cart: state.cart }
  }
}

export default RootReducer