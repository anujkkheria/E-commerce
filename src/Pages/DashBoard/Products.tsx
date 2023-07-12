import React from 'react'
import ProductCard from '../Components/ProductCard'
import { useProductContext } from '../../Context/Products'
import { Container } from '@mui/material'
// import products from '../Components/Data/MOCK_DATA.json'
const Products:React.FC = () => {
  const { products } = useProductContext() 
  return (
    <Container sx={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
     {products.map((items,index)=>{ 
      console.log(items,index)
        return <ProductCard key={items._id} _id={items._id} index={index} name={items.product_name} price={items.price} rating={items.Rating}/>}
     )  } 
    </Container>
  )
}

export default Products