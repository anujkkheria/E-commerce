import React from 'react'
import{Box} from '@mui/material'
import { Outlet } from 'react-router-dom' 
import Header from '../Components/Header'
import Cart from './Cart'
const DashBoard = () => {

  return (
   <Box sx={{height:'100vh',width:'100vw',display:'flex',flexDirection:'column',gap:10}}>
    <Header />
    <Box>
     <Outlet />
    </Box>
   </Box>
  )
}

export default DashBoard