import { CartReducer } from "../Types/Cart";
// import {updateCartTotal} from "../utils/cartUtils"
const cartReducer: CartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      let updatedItems;
      const check = state.cartItems.some(
        (item) => item._id === action.payload._id
      );
      if (check) {
        updatedItems = state.cartItems.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        updatedItems = [...state.cartItems, action.payload];
      }
      const newState = {
        ...state,
        cartItems: [...updatedItems],
        cartSize: state.cartItems.reduce((acc, item) => acc + item.qty, 0),
        cartTotal: state.cartItems.reduce(
          (acc, item) => acc + item.price * item.qty,
          0
        ),
      };
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }
    case "removeFromCart": {
      let UpdatedItems;
      const idToReduce = action.payload;
      console.log("ITR", idToReduce);
      const check = state.cartItems.some((item) => item._id === action.payload);
      if (check) {
        const item = state.cartItems.find(
          (item) => item._id === action.payload
        );
        console.log(item);
      }
      UpdatedItems = state.cartItems.filter((item) => {
        item._id !== item;
      });
      return {
        ...state,
        cartItems: [...UpdatedItems],
        cartSize: state.cartItems.reduce((acc, item) => acc + item.qty, 0),
        cartTotal: state.cartItems.reduce((acc, item) => {
          acc + item.price * item.qty;
        }, 1),
      };
    }
  }
};

export default cartReducer;
