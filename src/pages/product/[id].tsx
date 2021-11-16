import React, { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
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
import FlexBox from '@component/FlexBox';
import Box from '@component/Box';
import Rating from '@component/rating/Rating';
import Typography, { H1, Span } from '@component/Typography';
import RelatedClients from '@component/products/RelatedClients';
import Container from '@component/Container';
import { GetServerSideProps } from 'next';

const ProductDetails = ({ product, isError }) => {
  const router = useRouter();
  const pid = router.query.id;
  // const [product, setProduct] = useState<any>();
  const [active, setActive] = useState(false);

  const width = useWindowSize();
  const isTabPhone = width < 900;

  const state = {
    title: 'Mi Note 11 Pro',
    price: 1135,
  };

  console.log(product);
  // useEffect(() => {
  //   useProductById(pid).then((data: any) => {
  //     console.log(data);
  //     if (data) {
  //       setProduct(data);
  //     }

  //     // Recently Viewed Data Store in LocalStorage
  //     // if (Object.keys(data).length > 0) {
  //     //   let recentlyViewed: any[] = JSON.parse(
  //     //     localStorage.getItem('recentlyViewed'),
  //     //   );
  //     //   if (!recentlyViewed) {
  //     //     recentlyViewed = [
  //     //       {
  //     //         id: pid,
  //     //         title: product?.intro?.intro?.productName,
  //     //         image: data?.intro?.featuredImage,
  //     //       },
  //     //     ];
  //     //     localStorage.setItem(
  //     //       'recentlyViewed',
  //     //       JSON.stringify(recentlyViewed),
  //     //     );
  //     //   } else {
  //     //     const isExist = recentlyViewed.some((product) => product.id === pid);
  //     //     if (!isExist) {
  //     //       recentlyViewed.push({
  //     //         id: pid,
  //     //         title: data?.intro?.productName,
  //     //         image: data?.intro?.featuredImage,
  //     //       });
  //     //       localStorage.setItem(
  //     //         'recentlyViewed',
  //     //         JSON.stringify(recentlyViewed),
  //     //       );
  //     //     }
  //     //   }
  //     // }
  //   });
  // }, [pid]);

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
      <Head>
        <title>{product?.seo?.title || 'Nobarun - Product Details'}</title>
        <meta name="description" content={product?.seo?.description} />
        <meta name="keywords" content={product?.seo?.keywords.join(', ')} />
      </Head>
      <Box
        className={`product__sticky ${active ? 'product__sticky--active' : ''}`}
      >
        <Container>
          <FlexBox alignItems="center" justifyContent="space-between">
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
              <a
                href="#details"
                className="product__sticky-btn"
                style={{ background: '#dbeed3', color: '#489e26' }}
              >
                Details
              </a>

              <a href="#keypoints" className="product__sticky-btn">
                Key Points of Product
              </a>
              <a href="#questions" className="product__sticky-btn">
                Question & Answers
              </a>
              <a href="#reviews" className="product__sticky-btn">
                Reviews
              </a>
              <a
                href="#addQuote"
                className="product__sticky-btn"
                style={{ background: '#ec1c24', color: '#fff' }}
              >
                Get a Quote
              </a>
            </Box>
          </FlexBox>
        </Container>
      </Box>
      <Grid container>
        <Grid item lg={width > 1600 ? 9 : 8} xs={width > 900 ? 8 : 12}>
          <Box mr={width > 900 ? '1rem' : '0'}>
            <section id="details">
              <ProductIntro data={product?.intro} {...state} />
            </section>
            <RelatedClients slides={6} isProductDetails />
            {isTabPhone && product?.contact && (
              <>
                <Contacts id={pid} contact={product?.contact} />
                <Ammenities />
              </>
            )}
            {product?.keyPoints &&
            product?.keyPoints.length === 1 &&
            product?.keyPoints[0].title === '' &&
            product?.keyPoints[0].content === '' ? (
              <span>&nbsp;</span>
            ) : (
              <section id="keypoints">
                <Features features={product?.keyPoints} />
              </section>
            )}
          </Box>
        </Grid>
        <Grid item lg={width > 1600 ? 3 : 4} xs={width > 900 ? 4 : 12}>
          {!isTabPhone && product?.contact && (
            <Contacts id={pid} contact={product?.contact} />
          )}
          {!isTabPhone && <Ammenities />}
          {product?.features && (
            <SpecialFeatures features={product?.features} />
          )}
          {product?.specifications && (
            <Specifications specifications={product?.specifications} />
          )}
          {product?.relatedProducts && product?.relatedProducts.length > 0 && (
            <RelatedProducts products={product?.relatedProducts} />
          )}
        </Grid>
        <Grid item lg={width > 1600 ? 9 : 8} xs={width > 900 ? 8 : 12}>
          <Box mr={width > 900 ? '1rem' : '0'}>
            {product?.questions &&
            product?.questions.length === 1 &&
            product?.questions[0].title === '' &&
            product?.questions[0].question === '' ? (
              <span>&nbsp;</span>
            ) : (
              <section id="questions">
                <Questions questions={product?.questions} />
              </section>
            )}
          </Box>
        </Grid>
        <Grid item lg={width > 1600 ? 3 : 4} xs={width > 900 ? 4 : 12}>
          {product?.tags && product?.tags.length > 0 && (
            <Tags chips={product?.tags} />
          )}
        </Grid>
        <Grid item lg={width > 1600 ? 9 : 8} xs={width > 900 ? 8 : 12}>
          <Box mr={width > 900 ? '1rem' : '0'}>
            <section id="reviews">
              <Review reviews={product?.reviews} />
            </section>
            <section id="addQuote">
              <AddReview />
            </section>
          </Box>
        </Grid>
        <Grid item lg={width > 1600 ? 3 : 4} xs={width > 900 ? 4 : 12}>
          {product?.reviews && product?.reviews.length > 0 && (
            <CustomerMedia reviews={product?.reviews} />
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
};

ProductDetails.layout = NavbarLayout;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const pid = context.params.id;
  try {
    const data = await useProductById(pid);
    return {
      props: {
        product: data,
        isError: false,
      },
    };
  } catch (err) {
    return {
      props: {
        product: err,
        isError: false,
      },
    };
  }
};

export default ProductDetails;
