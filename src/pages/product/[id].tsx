import Box from '@component/Box';
import FlexBox from '@component/FlexBox';
import Grid from '@component/grid/Grid';
import NavbarLayout from '@component/layout/NavbarLayout';
import Ammenities from '@component/Product/Ammenities';
import Contacts from '@component/Product/Contacts';
import SpecialFeatures from '@component/Product/SpecialFeatures';
import Specifications from '@component/Product/Specifications';
import AvailableShops from '@component/products/AvailableShops';
import FrequentlyBought from '@component/products/FrequentlyBought';
import ProductDescription from '@component/products/ProductDescription';
import ProductIntro from '@component/products/ProductIntro';
import ProductReview from '@component/products/ProductReview';
import RelatedProducts from '@component/Product/RelatedProducts';
import { H5 } from '@component/Typography';
import React, { useState } from 'react';
import Tags from '@component/Product/Tags';
import CustomerMedia from '@component/Product/CustomerMedia';

const ProductDetails = () => {
  const state = {
    title: 'Mi Note 11 Pro',
    price: 1135,
  };

  const [selectedOption, setSelectedOption] = useState('description');

  const handleOptionClick = (opt) => () => {
    setSelectedOption(opt);
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={9}>
        <ProductIntro {...state} />

        <FlexBox
          borderBottom="1px solid"
          borderColor="gray.400"
          mt="80px"
          mb="26px"
        >
          <H5
            className="cursor-pointer"
            mr="25px"
            p="4px 10px"
            color={
              selectedOption === 'description' ? 'primary.main' : 'text.muted'
            }
            borderBottom={selectedOption === 'description' && '2px solid'}
            borderColor="primary.main"
            onClick={handleOptionClick('description')}
          >
            Description
          </H5>
          <H5
            className="cursor-pointer"
            p="4px 10px"
            color={selectedOption === 'review' ? 'primary.main' : 'text.muted'}
            onClick={handleOptionClick('review')}
            borderBottom={selectedOption === 'review' && '2px solid'}
            borderColor="primary.main"
          >
            Review (3)
          </H5>
        </FlexBox>

        <Box mb="50px">
          {selectedOption === 'description' && <ProductDescription />}
          {selectedOption === 'review' && <ProductReview />}
        </Box>

        <FrequentlyBought />

        <AvailableShops />

        <RelatedProducts />
      </Grid>
      <Grid item xs={3}>
        <Contacts />
        <Ammenities />
        <SpecialFeatures />
        <Specifications />
        <RelatedProducts />
        <Tags />
        <CustomerMedia />
      </Grid>
    </Grid>
  );
};

ProductDetails.layout = NavbarLayout;

export default ProductDetails;
