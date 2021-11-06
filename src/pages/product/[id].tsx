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
  const [product, setProduct] = useState<any>();

  const state = {
    title: 'Mi Note 11 Pro',
    price: 1135,
  };

  const width = useWindowSize();
  useEffect(() => {
    useProductById(pid).then((data: any) => {
      console.log(data);
      if (data) {
        setProduct(data);
      }

      // Recently Viewed Data Store in LocalStorage
      // if (Object.keys(data).length > 0) {
      //   let recentlyViewed: any[] = JSON.parse(
      //     localStorage.getItem('recentlyViewed'),
      //   );
      //   if (!recentlyViewed) {
      //     recentlyViewed = [
      //       {
      //         id: pid,
      //         title: data?.intro?.productName,
      //         image: data?.intro?.featuredImage,
      //       },
      //     ];
      //     localStorage.setItem(
      //       'recentlyViewed',
      //       JSON.stringify(recentlyViewed),
      //     );
      //   } else {
      //     const isExist = recentlyViewed.some((product) => product.id === pid);
      //     if (!isExist) {
      //       recentlyViewed.push({
      //         id: pid,
      //         title: data?.intro?.productName,
      //         image: data?.intro?.featuredImage,
      //       });
      //       localStorage.setItem(
      //         'recentlyViewed',
      //         JSON.stringify(recentlyViewed),
      //       );
      //     }
      //   }
      // }
    });
  }, [pid]);

  console.log(product);

  return (
    <Grid container spacing={6}>
      <Grid item lg={width > 1240 ? 9 : 8} xs={12}>
        <ProductIntro data={product?.intro} {...state} />
        <Clients slides={6} isProductDetails />
        {product?.keyPoints &&
        product?.keyPoints.length === 1 &&
        product?.keyPoints[0].title === '' &&
        product?.keyPoints[0].content === '' ? (
          <span>&nbsp;</span>
        ) : (
          <Features features={product?.keyPoints} />
        )}
        {product?.questions &&
        product?.questions.length === 1 &&
        product?.questions[0].title === '' &&
        product?.questions[0].question === '' ? (
          <span>&nbsp;</span>
        ) : (
          <Questions questions={product?.questions} />
        )}
        <Review reviews={product?.reviews} />
        <AddReview />
      </Grid>
      <Grid item lg={width > 1240 ? 3 : 4} xs={12}>
        {product?.contact && <Contacts id={pid} contact={product?.contact} />}
        <Ammenities />
        {product?.features && <SpecialFeatures features={product?.features} />}
        {product?.specifications && (
          <Specifications specifications={product?.specifications} />
        )}
        {product?.relatedProducts && product?.relatedProducts.length > 0 && (
          <RelatedProducts products={product?.relatedProducts} />
        )}
        {product?.tags && product?.tags.length > 0 && (
          <Tags chips={product?.tags} />
        )}
        {product?.reviews && product?.reviews.length > 0 && <CustomerMedia />}
      </Grid>
    </Grid>
  );
};

ProductDetails.layout = NavbarLayout;

export default ProductDetails;
