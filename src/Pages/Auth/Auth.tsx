import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";
import LOGO from "../../logo/png/logo-no-background.png";
const Auth: React.FC<any> = () => {
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#0496FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={LOGO} alt="" height={"500rem"} />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f8f8f8",
        }}
      >
        ,
        <Box
          component={Paper}
          sx={{
            height: "50%",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Auth;
