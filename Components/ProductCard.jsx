import React, { useEffect } from 'react';
import { Stack } from '@mui/material';
import ProductCardHeader from './ProductCardHeader';
import ProductCardBody from './ProductCardBody';

function ProductCard({ data }) {
  useEffect(() => {
    
  }, []);
  return (
    <Stack direction="column" spacing={1} sx={{border: '2px solid red'}}>
      <ProductCardHeader img={data.attributes.image} />
      <ProductCardBody
        info={{
          basePrice: data.attributes.basePrice,
          promoPrice: data.attributes.promoPrice,
          title: data.attributes.title,
          category: data.attributes.category,
          description: data.attributes.description
        }}
      />
    </Stack>
  );
}

export default ProductCard;
