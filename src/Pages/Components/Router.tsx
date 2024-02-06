import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "../../App";
import Login from "../Auth/Login";
import Auth from "../Auth/Auth";
import SignUp from "../Auth/SignUp";
import DashBoard from "../DashBoard/DashBoard";
import Cart from "../DashBoard/Cart";
import Products from "../DashBoard/Products";
import Category from "./Category";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/app",
      element: <App />,
    },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "Signup",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "Dashboard",
      element: <DashBoard />,
      children: [
        {
          path: "home",
          element: <Category />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/",
      element: <Navigate to="/auth/login" />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
