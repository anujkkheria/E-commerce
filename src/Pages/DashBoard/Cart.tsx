import React,{useContext} from 'react'
import { Container,Box,Table,TableBody,TableCell,TableHead,TableRow,CardMedia} from '@mui/material'
import { cartContext } from '../../Context/Cart'

const Cart = () => {
  const {state} = useContext(cartContext)
  console.log(state)
  return (
    <Container sx={{mt:2}}>
            <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>sno</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>cost</TableCell>
                  </TableRow>
                </TableHead>
                    <TableBody>
                    {state.cartItems.map((item,index)=>{return<TableRow key={index}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell sx={{width:100,height:100}}><img src={item.Image} /></TableCell>
                        <TableCell>dummy1</TableCell>
                        <TableCell>{item.price}</TableCell>
                        </TableRow>})}
                        <TableRow>
                        <TableCell colSpan={3}></TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>{state.cartTotal}</TableCell>
                        </TableRow>
                    </TableBody>
            </Table>
    </Container>
  )
}

export default Cart