import React, { useState } from 'react'
import { Button, Box, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [loginOptions, setLoginOptions] = useState({
    email: '',
    password: '',
  })
  const navigate=useNavigate()
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoginOptions({
      ...loginOptions,
      [event.target.name]: event.target.value,
    })
  }
  const onSubmit = () => {
    fetch('http://localhost:3001/v1/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...loginOptions }),
    }).then((response)=>response.json()).then((result)=>{
      console.log(JSON.stringify(result))
      localStorage.setItem("user",JSON.stringify(result.userInfo))
    }).then(()=>navigate("/DashBoard/home"))
  }

  return (
    <Box  
      sx={{
        display: 'flex',
        p: 1,
        gap: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextField
        sx={{  mt: 2 }}
        type='email'
        name={'email'}
        label={'email'}
        value={loginOptions.email}
        onChange={onChange}
        fullWidth
        required
      />
      <TextField
        sx={{ mt: 2 }}
        type='password'
        name={'password'}
        value={loginOptions.password}
        onChange={onChange}
        label={'password'}
        fullWidth
        required
      />
      <Button sx={{ m: 1 }} variant='contained' onClick={onSubmit}>
        Submit
      </Button>
    </Box>
  )
}

export default Login
