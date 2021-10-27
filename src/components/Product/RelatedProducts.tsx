import React from 'react';
import ProductCard12 from '@component/product-cards/ProductCard12';
import Grid from '@component/grid/Grid';
import Typography from '@component/Typography';
import Image from '@component/Image';

const RelatedProducts = () => {
  return (
    <ProductCard12 title="Related Products">
      <ul>
        <li className="mb-10">
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={6}
          >
            <Grid item xs={3}>
              <Image
                src="https://nobarun.s3.us-east-2.amazonaws.com/1584049.jpg"
                height="70px"
              />
            </Grid>
            <Grid item xs={9}>
              <Typography>
                Buy Flat Pan Type Fried Ice Cream Roll Maker Machine in
                Bangladesh
              </Typography>
            </Grid>
          </Grid>
        </li>
        <li className="mb-10">
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={6}
          >
            <Grid item xs={3}>
              <Image
                src="https://nobarun.s3.us-east-2.amazonaws.com/1584049.jpg"
                height="70px"
              />
            </Grid>
            <Grid item xs={9}>
              <Typography>
                Buy Flat Pan Type Fried Ice Cream Roll Maker Machine in
                Bangladesh
              </Typography>
            </Grid>
          </Grid>
        </li>
        <li className="mb-10">
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={6}
          >
            <Grid item xs={3}>
              <Image
                src="https://nobarun.s3.us-east-2.amazonaws.com/1584049.jpg"
                height="70px"
              />
            </Grid>
            <Grid item xs={9}>
              <Typography>
                Buy Flat Pan Type Fried Ice Cream Roll Maker Machine in
                Bangladesh
              </Typography>
            </Grid>
          </Grid>
        </li>
        <li className="mb-10">
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={6}
          >
            <Grid item xs={3}>
              <Image
                src="https://nobarun.s3.us-east-2.amazonaws.com/1584049.jpg"
                height="70px"
              />
            </Grid>
            <Grid item xs={9}>
              <Typography>
                Buy Flat Pan Type Fried Ice Cream Roll Maker Machine in
                Bangladesh
              </Typography>
            </Grid>
          </Grid>
        </li>
      </ul>
    </ProductCard12>
  );
};

export default RelatedProducts;
