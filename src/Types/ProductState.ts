
export interface ProductState{
    isLoading:boolean,
    error:string,
    products:any[]
}
export type ProductAction={
    type:"SetLoading"}|{type:"Set_Products",payload:any[]}|{type:"Error",payload:string}
export interface ProductReducer{
    (state:ProductState,action:ProductAction):ProductState
}