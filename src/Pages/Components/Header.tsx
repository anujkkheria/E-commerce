import React, { useContext,useEffect } from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'
import {AppBar,Avatar,Typography,Box,Toolbar,IconButton} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material'
import LOGO from "../../logo/png/logo-no-background.png"
import { cartContext } from '../../Context/Cart'
const Header = () => {
  const user = JSON.parse(localStorage.getItem("user")||"")
  console.log(user)
  const {state} = useContext(cartContext)
  useEffect(()=>{console.log(state)},[state])
  return (
<Box sx={{backgroundColor:"#180fff"}}>
  <AppBar sx={{zIndex:1,height:'10%',display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
<Link to={"home"}>
<Box m={1}>
  <img src={LOGO} alt="Logo" className='Logo'/>
</Box>
</Link>
<Toolbar sx={{height:"25px",width:"50px",backgroundColor:"#fff"}}>
</Toolbar>
<Box sx={{display:"flex", m:2, gap:2}}>
  <Box sx={{display:"inline-block"}}>
 <Link to={"cart"}>
 <IconButton>
  <ShoppingCart  sx={{height:30,width:30}}/><sub className='cart-amount'>{state.cartSize}</sub>
  </IconButton> 
 </Link>
  </Box>
  <Box sx={{display:'flex',justifyContent:'center',gap:2,alignContent:'space-between'}}>
  <Typography sx={{lineHeight:2.5}}>{user?user[0].name:"log in"}</Typography>
  <Avatar>A</Avatar>
  </Box>
</Box>
  </AppBar>
</Box>
  )
}

export default Header