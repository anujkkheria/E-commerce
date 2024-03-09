import React, { useState } from "react";
import { Button, Box, TextField, Typography } from "@mui/material";
import CheckBox from "../Components/Checkbox";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [loginOptions, setLoginOptions] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoginOptions({
      ...loginOptions,
      [event.target.name]: event.target.value,
    });
  };
  const onCheck = () => {
    setRememberMe((prev) => !prev);
  };
  const onSubmit = () => {
    fetch("http://localhost:3001/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...loginOptions }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(JSON.stringify(result));
        localStorage.setItem("user", JSON.stringify(result.userInfo));
      })
      .then(() => navigate("/DashBoard/home"));
  };

  return (
    <Box
      sx={{
        display: "flex",
        p: 5,
        gap: 2,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>Login</Typography>
      <TextField
        sx={{ mt: 2 }}
        type="email"
        name={"email"}
        label={"email"}
        value={loginOptions.email}
        onChange={onChange}
        fullWidth
        required
      />
      <TextField
        sx={{ mt: 2 }}
        type="password"
        name={"password"}
        value={loginOptions.password}
        onChange={onChange}
        label={"password"}
        fullWidth
        required
      />
      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <CheckBox label={"Remember Me"} value={rememberMe} onChange={onCheck} />
        <Typography component={Link} to={"/Auth/Signup"}>
          Signup
        </Typography>
      </Box>
      <Button sx={{ m: 1 }} variant="contained" onClick={onSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default Login;
