import React, { useState } from 'react'
import { Box, TextField, Typography, Button, Container } from '@mui/material'
const SignUp = () => {
  const [SignupInfo, setSignupInfo] = useState({
    Name: '',
    email: '',
    password: '',
    Cpassword: '',
  })
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSignupInfo({ ...SignupInfo, [event.target.name]: event.target.value })
    console.log(SignupInfo)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
        height: '100%',
        backgroundColor: '#3f55ff',
      }}
    >
      <Container sx={{ backgroundColor: '#fff', height: '50%' }}>
        <Typography>Signup</Typography>
        <TextField
          label={'Name'}
          name='Name'
          sx={{ height: '5%' }}
          value={SignupInfo.Name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label={'Email'}
          name='email'
          sx={{ height: '5%' }}
          value={SignupInfo.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label={'Password'}
          sx={{ height: '5%' }}
          name='password'
          value={SignupInfo.password}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label={'Confirm Password'}
          name='Cpassword'
          value={SignupInfo.Cpassword}
          onChange={handleChange}
          fullWidth
        />
        <Button variant='contained' sx={{ m: 1 }}>
          Submit
        </Button>
      </Container>
    </Box>
  )
}

export default SignUp
