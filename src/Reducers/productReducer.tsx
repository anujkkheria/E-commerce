import React from "react";
import {ProductReducer } from "../Types/ProductState";
const productReducer:ProductReducer = (state,action) =>{
    switch(action.type){
case "SetLoading":
    return{
        ...state,
        isLoading:true,
    };
    case "Set_Products":
        return{
            ...state,
            products:action.payload,
            isLoading:false,
        }
    case "Error":
        return{
            ...state,
            isLoading:true,
            error:action.payload
        }
    default:{
       return {...state}
    }
    }
}

export default productReducer