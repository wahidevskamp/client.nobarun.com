import React, { useState, useEffect } from 'react';
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
import useWindowSize from '@hook/useWindowSize';
import useProductById from '@hook/Product/useProductById';
import { useRouter } from 'next/router';

const ProductDetails = () => {
  const router = useRouter();
  const pid = router.query.id;
  const [product, setProduct] = useState<any>({});

  const state = {
    title: 'Mi Note 11 Pro',
    price: 1135,
  };

  const width = useWindowSize();
  useEffect(() => {
    useProductById(pid).then((data) => {
      data && setProduct(data);
    });
  }, [pid]);

  console.log(product);

  return (
    <Grid container spacing={6}>
      <Grid item lg={width > 1240 ? 9 : 8} xs={12}>
        <ProductIntro data={product.intro} {...state} />
        <Clients slides={6} isProductDetails />
        <Features features={product.keyPoints} />
        <Questions questions={product.questions} />
        <Review reviews={product.reviews} />
        <AddReview />
      </Grid>
      <Grid item lg={width > 1240 ? 3 : 4} xs={12}>
        <Contacts contact={product.contact} />
        <Ammenities />
        <SpecialFeatures features={product.features} />
        <Specifications specifications={product.specifications} />
        <RelatedProducts products={product.relatedProducts} />
        <Tags chips={product.tags} />
        <CustomerMedia />
      </Grid>
    </Grid>
  );
};

ProductDetails.layout = NavbarLayout;

export default ProductDetails;
