import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ProductProvider } from "./Context/Products";
import Router from "./Pages/Components/Router";
import { CartProvider } from "./Context/Cart";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ProductProvider>
    <CartProvider>
      <Router />
    </CartProvider>
  </ProductProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
