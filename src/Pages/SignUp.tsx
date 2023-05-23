import React from 'react'
import {Box,TextField,Typography,Button} from '@mui/material'
const SignUp = () => {
  return (
    <Box sx={{display:"flex",flexDirection:"column", gap:2}}>
        <Typography>Signup</Typography>
        <TextField label={"Name"} fullWidth/>
        <TextField label={"Email"} fullWidth/>
        <TextField label={"Password"} fullWidth/>
        <TextField label={"Confirm Password"} fullWidth/>
        <Button variant='contained' sx={{m:1}}>Submit</Button>
    </Box>
  )
}

export default SignUp