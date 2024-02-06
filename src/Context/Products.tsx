import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/productReducer";
import { ProductReducer, ProductState } from "../Types/ProductState";
const initialProducts: ProductState = {
  isLoading: true,
  error: "",
  products: [],
};

const productContext = createContext(initialProducts);

const ProductProvider: React.FC<{ children: any }> = (props) => {
  const { children } = props;

  const [state, dispatch] = useReducer<ProductReducer>(
    reducer,
    initialProducts
  );
  console.log(process.env);
  const getProducts = async () => {
    try {
      fetch(`${process.env.React_App_Base_Url}/v1/products`)
        .then((response) => response.json())
        .then((result) => {
          dispatch({ type: "Set_Products", payload: result });
        });
    } catch (error) {
      dispatch({ type: "Error", payload: String(error) });
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <productContext.Provider value={state as ProductState}>
      {children}
    </productContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(productContext);
};

export { productContext, ProductProvider, useProductContext };
