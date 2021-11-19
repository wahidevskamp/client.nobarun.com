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
import AddQuery from '@component/Shared/AddQuery';
import MobileNavigationBar from '@component/mobile-navigation/MobileNavigationBar';
import GoToTop from '@component/goToTop/GoToTop';

const ProductDetails = ({ product, reviews, isError }) => {
  const router = useRouter();
  const pid = router.query.id;
  // const [product, setProduct] = useState<any>();
  const [active, setActive] = useState(false);
  const [section, setSection] = useState('#details');

  const width = useWindowSize();
  const isTabPhone = width < 900;

  const state = {
    title: 'Mi Note 11 Pro',
    price: 1135,
  };

  // console.log(product);
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
  const [isOpen, setIsOpen] = useState(false);
  console.log(reviews);
  useEffect(() => {
    const handleStickyBar = () => {
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
        <meta
          property="og:description"
          content="MyFavNews is the best source for your favorite news."
        />
        <meta
          property="og:image"
          content="https://nobarun.s3.us-east-2.amazonaws.com/6524728.jpg"
        />
      </Head>
      <AddQuery id={pid as string} isOpen={isOpen} setIsOpen={setIsOpen} />
      <GoToTop showBelow={250} />
      <MobileNavigationBar
        phone={product?.contact?.whatsAppNumber}
        setIsOpen={setIsOpen}
      />
      <Box
        className={`product__sticky ${active ? 'product__sticky--active' : ''}`}
      >
        <Container>
          <FlexBox alignItems="center" justifyContent="space-between">
            <FlexBox width="50%">
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
                onClick={(e) => setSection('#details')}
                className={`product__sticky-btn ${
                  section === '#details' ? 'product__sticky-btn--active' : ''
                }`}
              >
                Details
              </a>
              <a
                href="#keypoints"
                onClick={(e) => setSection('#keypoints')}
                className={`product__sticky-btn ${
                  section === '#keypoints' ? 'product__sticky-btn--active' : ''
                }`}
              >
                Key Points of Product
              </a>
              <a
                href="#questions"
                onClick={(e) => setSection('#questions')}
                className={`product__sticky-btn ${
                  section === '#questions' ? 'product__sticky-btn--active' : ''
                }`}
              >
                Question & Answers
              </a>
              <a
                href="#reviews"
                onClick={(e) => setSection('#reviews')}
                className={`product__sticky-btn ${
                  section === '#reviews' ? 'product__sticky-btn--active' : ''
                }`}
              >
                Reviews
              </a>
              <a
                className="product__sticky-btn"
                style={{
                  background: '#ec1c24',
                  color: '#fff',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(true);
                }}
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
            <RelatedClients
              clients={product?.clients}
              slides={6}
              isProductDetails
            />
            {isTabPhone && product?.contact && (
              <>
                <Contacts
                  id={pid}
                  contact={product?.contact}
                  setIsOpen={setIsOpen}
                />
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
            <Contacts
              id={pid}
              contact={product?.contact}
              setIsOpen={setIsOpen}
            />
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
              <Review
                reviews={reviews.length > 0 ? reviews : product?.reviews}
              />
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
  // try {
  const data = await useProductById(pid);
  // console.log(data.reviews);
  return {
    props: {
      product: data,
      reviews: [...data.reviews],
      isError: false,
    },
  };
  // }
  //  catch (err) {
  //   return {
  //     props: {
  //       product: err,
  //       isError: true,
  //     },
  //   };
  // }
};

export default ProductDetails;
