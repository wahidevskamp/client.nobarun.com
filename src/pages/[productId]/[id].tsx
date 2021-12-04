import React, { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
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
import AddReview from '@component/Product/AddReview';
import Questions from '@component/Product/Questions';
import useWindowSize from '@hook/useWindowSize';
import useProductById from '@hook/Product/useProductById';
import Box from '@component/Box';
import RelatedClients from '@component/products/RelatedClients';
import { GetServerSideProps } from 'next';
import AddQuery from '@component/Shared/AddQuery';
import MobileNavigationBar from '@component/mobile-navigation/MobileNavigationBar';
import GoToTop from '@component/goToTop/GoToTop';
import DesktopStickyBar from '@component/Product/DesktopStickyBar';
import ProductHead from '@component/Product/ProductHead';
import MobileStickyBar from '@component/Product/MobileStickyBar';
import RelatedReview from '@component/Product/RelatedReview';

const ProductDetails = ({ product, reviews, isError }) => {
  const router = useRouter();
  const pid = router.query.id;
  const [active, setActive] = useState(false);
  const [newReview, setNewReview] = useState<any[]>([]);

  const width = useWindowSize();
  const isTabPhone = width < 900;

  const state = {
    title: 'Mi Note 11 Pro',
    price: 1135,
  };

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

  return (
    <Fragment>
      <ProductHead product={product} />
      <AddQuery id={pid as string} isOpen={isOpen} setIsOpen={setIsOpen} />
      <GoToTop showBelow={250} />
      <MobileNavigationBar
        phone={product?.contact?.whatsAppNumber}
        setIsOpen={setIsOpen}
      />
      <DesktopStickyBar
        product={product}
        active={active}
        setIsOpen={setIsOpen}
        reviewLength={reviews.length + newReview.length}
      />
      <MobileStickyBar
        product={product}
        active={active}
        setIsOpen={setIsOpen}
        reviewLength={reviews.length + newReview.length}
      />
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
              {((reviews && reviews.length > 0) || newReview.length > 0) && (
                <RelatedReview reviews={reviews} newReview={newReview} />
              )}
            </section>
            <section id="addQuote">
              <AddReview
                productCode={product.intro.productCode}
                newReview={newReview}
                setNewReview={setNewReview}
              />
            </section>
          </Box>
        </Grid>
        <Grid item lg={width > 1600 ? 3 : 4} xs={width > 900 ? 4 : 12}>
          {reviews && reviews.length > 0 && <CustomerMedia reviews={reviews} />}
        </Grid>
      </Grid>
    </Fragment>
  );
};

ProductDetails.layout = NavbarLayout;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const pid = context.params.id;
  try {
    //! We have to debug furthermore
    const data = await useProductById(pid);
    // console.log(data.reviews);
    // sessionStorage.setItem('reviews', data.reviews);
    return {
      props: {
        product: data,
        reviews: data.reviews,
        isError: false,
      },
    };
  } catch (err) {
    return {
      props: {
        product: err,
        isError: true,
      },
    };
  }
};

export default ProductDetails;
