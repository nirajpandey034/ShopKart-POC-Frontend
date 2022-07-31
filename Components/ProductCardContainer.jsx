import React from 'react';
import ProductCard from './ProductCard';
import { Container, Grid } from '@mui/material';

function ProductCardContainer(props) {

  return (
    <Container maxWidth="xl" sx={{ height:'20rem' ,display: 'flex', alignItems: 'center', flexDirection: {xs: 'column', md:'row'}}}>
      <Grid container spacing={2} sx={{justifyContent:'center', margin: '0'}}>
        
        {props.products.data.map((ele) => {
          return (<Grid item><ProductCard data={ele} /></Grid>)
        })}
      </Grid>
    </Container>
  );
}

export default ProductCardContainer;
