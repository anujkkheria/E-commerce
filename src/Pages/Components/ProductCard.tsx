import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import { cartContext } from "../../Context/Cart";
interface Product {
  name: string;
  price: number;
  index: number;
  _id: string;
  rating: number;
}
const ProductCard: React.FC<Product> = ({
  _id,
  name,
  price,
  index,
  rating,
}) => {
  const { addToCart } = useContext(cartContext);
  const handleCart = () => {
    const Item = {
      _id,
      name,
      price,
      image: `https://picsum.photos/id/${index}/100/100`,
      qty: 1,
    };
    console.log("Success");
    addToCart(Item);
  };
  return (
    <Card
      sx={{ maxHeight: 350, maxWidth: 300, backgroundColor: "#fff", m: 5 }}
      elevation={2}
    >
      <CardMedia
        image={`https://picsum.photos/id/${index}/150/300`}
        sx={{ height: 150, width: 300 }}
        title="Random Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Star sx={{ color: "yellow", mb: 0.5 }} />
            <Typography sx={{ lineHeight: 1 }}>{rating}</Typography>
          </Box>
          <Typography sx={{ fontWeight: "bold" }}>${price}</Typography>
        </Box>
        <Button size="small" variant="contained" onClick={() => handleCart()}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
