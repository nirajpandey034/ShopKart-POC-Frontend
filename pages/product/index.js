import React from 'react';
import ProductCardContainer from '../../Components/ProductCardContainer';

export async function getStaticProps() {
  let headers = {
    Authorization: process.env.NEXT_PUBLIC_API_TOKEN,
  };

  let res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI}/api/products?populate=*`,
    {
      method: 'GET',
      headers: headers,
    }
  );
  let products = await res.json();
  return {
    props: {
      products: products,
    },
  };
}
function product(props) {
  return <ProductCardContainer products={props.products} />;
}

export default product;
