import React from 'react';
import ProductCard12 from '@component/product-cards/ProductCard12';
import Grid from '@component/grid/Grid';
import Image from '@component/Image';
import HoverBox from '@component/HoverBox';

const CustomerMedia = () => {
  return (
    <ProductCard12 title="Customer Submitted  Photos & Videos">
      <Grid container spacing={4}>
        {[1, 2, 2, 3, 3, 3, 3, 3, 3, 6, 7, 74, 6, 435, 345, 445, 345].map(
          (image, index) => (
            <Grid item xs={3} key={image + Math.random() + index}>
              <HoverBox>
                <Image
                  src="https://nobarun.s3.us-east-2.amazonaws.com/1584049.jpg"
                  height="70px"
                />
              </HoverBox>
            </Grid>
          ),
        )}
      </Grid>
    </ProductCard12>
  );
};

export default CustomerMedia;
