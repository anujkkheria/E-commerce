import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
const SignUp = () => {
  const [SignupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSignupInfo({ ...SignupInfo, [event.target.name]: event.target.value });
    console.log(SignupInfo);
  };
  const onSubmit = () => {
    fetch(`${process.env.React_App_Base_Url}/v1/SignUp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...SignupInfo }),
    });
    console.log(SignupInfo);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100%",
        p: 1,
      }}
    >
      <Typography>Signup</Typography>
      <TextField
        label={"Name"}
        name="name"
        value={SignupInfo.name}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label={"Email"}
        name="email"
        value={SignupInfo.email}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label={"Password"}
        name="password"
        value={SignupInfo.password}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label={"Confirm Password"}
        name="confirmPassword"
        value={SignupInfo.confirmPassword}
        onChange={handleChange}
        fullWidth
      />
      <Button variant="contained" sx={{ m: 1 }} onClick={onSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default SignUp;
