import React from 'react';
import ProductCard12 from '@component/product-cards/ProductCard12';
import Grid from '@component/grid/Grid';
import Typography from '@component/Typography';
import Image from '@component/Image';

interface RelatedProductProps {
  products: any[];
}

const RelatedProducts: React.FC<RelatedProductProps> = ({ products }) => {
  return (
    <ProductCard12 title="Related Products">
      <ul>
        {products?.map((product, idx) => (
          <li className="mb-10" key={product.image + idx}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              spacing={6}
            >
              <Grid item xs={3}>
                <Image src={product.image} height="70px" />
              </Grid>
              <Grid item xs={9}>
                <Typography>{product.name}</Typography>
              </Grid>
            </Grid>
          </li>
        ))}
      </ul>
    </ProductCard12>
  );
};

export default RelatedProducts;
