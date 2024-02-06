import React, { useContext } from "react";
import {
  Container,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CardMedia,
} from "@mui/material";
import { cartContext } from "../../Context/Cart";

const Cart = () => {
  const { state } = useContext(cartContext);
  console.log(state);
  return (
    <Container sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ textAlign: "center" }}>sno</TableCell>
            <TableCell colSpan={2} sx={{ textAlign: "center" }}>
              Product
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>
            <TableCell sx={{ textAlign: "center" }}>cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.cartItems.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell sx={{ textAlign: "center" }}>{index + 1}</TableCell>
                <TableCell colSpan={2}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.image}
                      style={{
                        height: "50px",
                        width: "50px",
                        marginRight: "10px",
                      }}
                    />
                    {item.name}
                  </Box>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>{item.qty}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{item.price}</TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <TableCell colSpan={3}></TableCell>
            <TableCell sx={{ textAlign: "center" }}>Total</TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {state.cartTotal}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
};

export default Cart;
