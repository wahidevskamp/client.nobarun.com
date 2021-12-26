import Box from '@component/Box';
import productDatabase from '@data/product-database';
import React from 'react';
import FlexBox from '../../FlexBox';
import Grid from '../../grid/Grid';
import Pagination from '../../pagination/Pagination';
import ProductCard1 from '../../product-cards/ProductCard1';
import { SemiSpan } from '../../Typography';

export interface ProductCard1ListProps {
  selectedCategory: string;
  products: any;
  filters: string[];
}

const TagsProductCard: React.FC<ProductCard1ListProps> = ({
  selectedCategory,
  products,
  filters,
}) => {
  console.log(products);
  return (
    <Box>
      <Grid container spacing={6}>
        {products
          ?.filter((product) => {
            return selectedCategory === ''
              ? product
              : product?.category?.name === selectedCategory;
          })
          ?.filter((product) =>
            filters.length > 0
              ? filters.includes(product?.stockStatus)
              : product,
          )
          .map((product, ind) => (
            <Grid item lg={4} sm={6} xs={12} key={ind}>
              <Box py="0.25rem" key={product?.id}>
                <ProductCard1
                  id={product?.slug}
                  imgUrl={product?.featuredImage}
                  title={product?.name}
                  rating={product?.avgReview}
                  noOfRating={product?.noOfRating}
                  categoryName={product?.category?.name}
                  categoryIcon={product?.category?.icon}
                />
              </Box>
            </Grid>
          ))}
      </Grid>
      {products.length > 9 && (
        <FlexBox
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          mt="32px"
        >
          <SemiSpan>Showing 1-9 of {products.length + 1} Products</SemiSpan>
          <Pagination pageCount={10} />
        </FlexBox>
      )}
    </Box>
  );
};

export default TagsProductCard;
