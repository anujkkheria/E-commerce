export interface Cart{
    cartItems:any[],
    cartTotal:number,
    cartSize:number
}


export type cartAction={type:"addToCart",payload:any}|{type:"removeFromCart",payload:string}

export interface CartReducer{
    (state:Cart,action:cartAction):Cart
}