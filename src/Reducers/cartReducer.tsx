import {  CartReducer } from "../Types/Cart"
// import {updateCartTotal} from "../utils/cartUtils"
const cartReducer:CartReducer = (state,action) => {

  switch(action.type){
    case "addToCart":{
      console.log(1)
     state.cartItems=[...state.cartItems,action.payload]
     state.cartSize=state.cartItems.reduce((acc,item)=>acc + item.qty,0)
    state.cartTotal=state.cartItems.reduce((acc,item)=>acc + item.price*item.qty,0)
    localStorage.setItem("cart",JSON.stringify(state))
    return state
    
    }
    case "removeFromCart":{
      const updatedItems = state.cartItems.filter((item)=>{item._id!==item})
      return{
        ...state,
        cartItems:[...updatedItems],
        cartSize:state.cartItems.reduce((acc,item)=> acc + item.qty,0),
        cartTotal:state.cartItems.reduce((acc,item) => {acc + item.price * item.qty},1)
      }
    }
  }
}

export default cartReducer