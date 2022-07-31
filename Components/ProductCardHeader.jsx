import React, {useEffect} from 'react'
import {Box} from '@mui/material';

function ProductCardHeader({img}) {

  useEffect(()=>{
    console.log();
  },[]);
  return (
    <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt={img.data.attributes.name}
        src={`${img.data.attributes.url}`}
      />
  )
}

export default ProductCardHeader