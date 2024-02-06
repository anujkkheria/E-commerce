import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import { CartProvider } from "../../Context/Cart";
const DashBoard: React.FC = () => {
  console.log(process.env);
  return (
    <CartProvider>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Header />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </CartProvider>
  );
};

export default DashBoard;
