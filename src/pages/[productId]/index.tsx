import Box from '@component/Box';
import GoToTop from '@component/goToTop/GoToTop';
import Grid from '@component/grid/Grid';
import NavbarLayout from '@component/layout/NavbarLayout';
import MobileNavigationBar from '@component/mobile-navigation/MobileNavigationBar';
import AddQuery from '@component/Product/AddQuery';
import AddReview from '@component/Product/AddReview';
import Ammenities from '@component/Product/Ammenities';
import Contacts from '@component/Product/Contacts';
import CustomerMedia from '@component/Product/CustomerMedia';
import DesktopStickyBar from '@component/Product/DesktopStickyBar';
import Features from '@component/Product/Features';
import MobileStickyBar from '@component/Product/MobileStickyBar';
import ProductHead from '@component/Product/ProductHead';
import ProductIntro from '@component/Product/ProductIntro';
import Questions from '@component/Product/Questions';
import RelatedProducts from '@component/Product/RelatedProducts';
import RelatedReview from '@component/Product/RelatedReview';
import SpecialFeatures from '@component/Product/SpecialFeatures';
import Specifications from '@component/Product/Specifications';
import Tags from '@component/Product/Tags';
import RelatedClients from '@component/products/RelatedClients';
import useProductById from '@hook/Product/useProductById';
import useWindowSize from '@hook/useWindowSize';
import Client from 'config/GraphQLRequest';
import { gql } from 'graphql-request';
import setRecentlyViewedProduct from 'helpers/setRecentlyViewedProduct';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';

const INCREASE_VIEW = gql`
  mutation increaseView($slug: String!) {
    increaseViewCountById(slug: $slug)
  }
`;

const ProductDetails = ({ product, reviews }) => {
  const router = useRouter();
  const pid = router.query.productId;
  const [active, setActive] = useState(false);

  const width = useWindowSize();
  const isTabPhone = width < 900;
  const hasReviews = reviews && reviews.length > 0;

  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    Client.request(INCREASE_VIEW, { slug: pid });
    setRecentlyViewedProduct(pid, product);
  }, []);
  return (
    <Fragment>
      <ProductHead product={product} />
      <AddQuery
        id={pid as string}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        productName={product?.intro?.productName}
        productCode={product?.intro?.productCode}
        contact={product?.contact}
      />
      <GoToTop showBelow={250} />
      <MobileNavigationBar
        product={{ ...product, slug: pid }}
        phone={product?.contact?.whatsAppNumber}
        setIsOpen={setIsOpen}
      />
      <DesktopStickyBar
        product={product}
        active={active}
        setIsOpen={setIsOpen}
        reviewLength={reviews.length}
      />
      <MobileStickyBar
        product={product}
        active={active}
        setIsOpen={setIsOpen}
        reviewLength={reviews.length}
      />
      <Grid container>
        <Grid item lg={width > 1600 ? 9 : 8} xs={width > 900 ? 8 : 12}>
          <Box mr={width > 900 ? '1rem' : '0'}>
            <section id="details">
              <ProductIntro data={product?.intro} />
            </section>
            {product?.clients?.length > 0 && (
              <RelatedClients
                clients={product?.clients}
                slides={6}
                isProductDetails
              />
            )}
            {isTabPhone && product?.contact && (
              <>
                <Contacts
                  slug={product.slug}
                  productName={product?.intro?.productName}
                  productCode={product?.intro?.productCode}
                  contact={product?.contact}
                  setIsOpen={setIsOpen}
                />
                <Ammenities contact={product?.contact} />
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
              slug={product?.slug}
              productName={product?.intro?.productName}
              productCode={product?.intro?.productCode}
              contact={product?.contact}
              setIsOpen={setIsOpen}
            />
          )}
          {!isTabPhone && <Ammenities contact={product?.contact} />}
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
              {hasReviews && (
                <RelatedReview
                  title="Read all reviews"
                  slug={pid}
                  reviews={reviews}
                />
              )}
            </section>
            <section id="addQuote">
              <AddReview productCode={product.intro.productCode} />
            </section>
          </Box>
        </Grid>
        <Grid item lg={width > 1600 ? 3 : 4} xs={width > 900 ? 4 : 12}>
          {hasReviews && <CustomerMedia reviews={reviews} />}
        </Grid>
      </Grid>
    </Fragment>
  );
};

ProductDetails.layout = NavbarLayout;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const productId = context.params.productId;
  try {
    //! We have to debug furthermore
    const data = await useProductById(productId);
    return {
      props: {
        product: data,
        reviews: data?.reviews,
        isError: false,
      },
    };
  } catch (err) {
    return {
      props: {
        isError: true,
        err,
      },
    };
  }
};

export default ProductDetails;
