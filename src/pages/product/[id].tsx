import React from 'react';
import Grid from '@component/grid/Grid';
import NavbarLayout from '@component/layout/NavbarLayout';
import Ammenities from '@component/Product/Ammenities';
import Contacts from '@component/Product/Contacts';
import SpecialFeatures from '@component/Product/SpecialFeatures';
import Specifications from '@component/Product/Specifications';
import ProductIntro from '@component/products/ProductIntro';
import RelatedProducts from '@component/Product/RelatedProducts';
import Tags from '@component/Product/Tags';
import CustomerMedia from '@component/Product/CustomerMedia';
import Clients from '@component/home-1/Clients';
import Features from '@component/Product/Features';
import Review from '@component/Product/Review';
import AddReview from '@component/Product/AddReview';
import Questions from '@component/Product/Questions';

const ProductDetails = () => {
  const state = {
    title: 'Mi Note 11 Pro',
    price: 1135,
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={9}>
        <ProductIntro {...state} />
        <Clients slides={6} isProductDetails />
        <Features />
        <Questions />
        <Review />
        <AddReview />
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
