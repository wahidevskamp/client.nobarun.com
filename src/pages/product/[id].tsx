import React, { useState, useEffect, Fragment } from 'react';
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
import Features from '@component/Product/Features';
import Review from '@component/Product/Review';
import AddReview from '@component/Product/AddReview';
import Questions from '@component/Product/Questions';
import useWindowSize from '@hook/useWindowSize';
import useProductById from '@hook/Product/useProductById';
import { useRouter } from 'next/router';
import FlexBox from '@component/FlexBox';
import Box from '@component/Box';
import Rating from '@component/rating/Rating';
import Typography, { H1, Span } from '@component/Typography';
import RelatedClients from '@component/products/RelatedClients';

const ProductDetails = () => {
  const router = useRouter();
  const pid = router.query.id;
  const [product, setProduct] = useState<any>();
  const [active, setActive] = useState(false);

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
      //         title: product?.intro?.intro?.productName,
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

  useEffect(() => {
    const handleStickyBar = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener('scroll', handleStickyBar);
  }, []);

  return (
    <Fragment>
      <Box
        className={`product__sticky ${active ? 'product__sticky--active' : ''}`}
      >
        <FlexBox
          alignItems="center"
          justifyContent="space-between"
          maxWidth="1600px"
          mx="auto"
        >
          <FlexBox>
            <img
              src={product?.intro?.images[0]}
              className="product__sticky-image"
            />
            <Box>
              <H1 fontSize="18px">{product?.intro?.productName}</H1>
              <Typography>
                Product Code: {product?.intro?.productCode}
              </Typography>
              <FlexBox
                flexDirection={width > 660 ? 'row' : 'column'}
                alignItems={width > 660 ? 'center' : 'flex-start'}
                flexWrap="nowrap"
              >
                <Rating
                  outof={5}
                  value={product?.intro?.rating}
                  color="warn"
                  size="medium"
                />
                <a href="#reviews">
                  <Span ml={width > 660 ? '1em' : '0em'} color="#0082C9">
                    {product?.intro?.review} Real Customer Reviews
                  </Span>
                </a>
              </FlexBox>
            </Box>
          </FlexBox>
          <Box>
            <button className="product__sticky-btn">Details</button>
            <button className="product__sticky-btn">
              Key Points of Product
            </button>
            <button className="product__sticky-btn">Question & Answers</button>
            <button className="product__sticky-btn">Reviews</button>
            <button className="product__sticky-btn">Get a Quote</button>
          </Box>
        </FlexBox>
      </Box>
      <Grid container spacing={6}>
        <Grid item lg={width > 1240 ? 9 : 8} xs={12}>
          <ProductIntro data={product?.intro} {...state} />
          <RelatedClients slides={6} isProductDetails />
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
          {product?.features && (
            <SpecialFeatures features={product?.features} />
          )}
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
    </Fragment>
  );
};

ProductDetails.layout = NavbarLayout;

export default ProductDetails;
