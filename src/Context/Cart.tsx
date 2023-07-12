import { createContext,useContext, useReducer} from "react";
import {Cart, CartReducer} from '../Types/Cart' 
import reducer from "../Reducers/cartReducer";

const iniCart:Cart = {
    cartItems:[],
    cartTotal:0,
    cartSize:0
}
const UseCartContext=(iniCart:Cart)=>{
    const [state,dispatch] = useReducer<CartReducer>(reducer,iniCart)
    const addToCart = (product:any):void=>{
        dispatch({type:"addToCart", payload:product})
    }
    const removeFromCart=(id:string)=>{
        dispatch({type:"removeFromCart",payload:id})
    }
        return {state,addToCart,removeFromCart}
    }
type UseCartContextType = ReturnType<typeof UseCartContext>

const contextItems:UseCartContextType={
    state:iniCart,
    addToCart:(product)=>{return{} },
    removeFromCart:(id)=>{ return{}}
}


    

const cartContext = createContext<UseCartContextType>(contextItems)
type ChildrenType = {
    children?: any
}
const CartProvider=({children}:ChildrenType):React.ReactElement=>{
    return<cartContext.Provider value={UseCartContext(iniCart)}>
        {children}
        </cartContext.Provider>
    } 
    
    
    export{cartContext,CartProvider,UseCartContext}