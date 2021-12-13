import React, { useState } from 'react';
import NavbarLayout from '@component/layout/NavbarLayout';
import Box from '@component/Box';
import Grid from '@component/grid/Grid';
import CustomerMedia from '@component/Product/CustomerMedia';
import { GetServerSideProps } from 'next';
import RelatedReview from '@component/Product/RelatedReview';
import AddReview from '@component/Product/AddReview';
import StarReview from '@component/Product/Review/StarReview';
import useReviewsBySlug from '@hook/Product/useReviewsBySlug';
import useWindowSize from '@hook/useWindowSize';
import FeaturedImage from '@component/Product/Review/FeaturedImage';
import ContactPerson from '@component/Product/Review/ContactPerson';
import ReviewSummary from '@component/Product/Review/ReviewSummary';
import StarRating from '@component/Product/Review/StarRating';
import AddQuery from '@component/Shared/AddQuery';

const ReviewsPage = (props) => {
  const { productTitle, featuredImage, contact, reviews, productCode, slug } =
    props;
  const width = useWindowSize();
  const [isOpen, setIsOpen] = useState(true);
  const isLaptop = width < 1400 && width > 900;
  const isTablet = width < 900;
  console.log(isTablet);
  return (
    <>
      <AddQuery id={'pid as string'} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box my="5rem">
        <Box bg="#fff" mb="3rem">
          <Grid
            container
            alignItems={isLaptop ? 'normal' : 'center'}
            spacing={10}
          >
            {isLaptop ? (
              <Grid item xs={isLaptop ? 6 : 4}>
                <ReviewSummary {...props} isLaptop={isLaptop} />
              </Grid>
            ) : (
              <></>
            )}
            <Grid item xs={isLaptop ? 6 : isTablet ? 12 : 4}>
              <FeaturedImage
                isTablet={isTablet}
                productTitle={productTitle}
                featuredImage={featuredImage}
              />
            </Grid>
            {!isLaptop || isTablet ? (
              <Grid item xs={isLaptop ? 6 : isTablet ? 12 : 4}>
                <StarReview {...props} isTablet={isTablet} />
              </Grid>
            ) : (
              <></>
            )}
            {isLaptop ? (
              <Grid item xs={isLaptop ? 6 : 4}>
                <StarRating {...props} isLaptop={isLaptop} />
              </Grid>
            ) : (
              <></>
            )}
            <Grid item xs={isLaptop ? 6 : isTablet ? 12 : 4}>
              <ContactPerson contact={contact} setIsOpen={setIsOpen} />
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={isTablet ? 0 : 10}>
          <Grid item xs={isTablet ? 12 : 8}>
            <RelatedReview reviews={reviews} slug={slug} />
            {isTablet && <CustomerMedia reviews={reviews} />}
            <AddReview productCode={productCode} />
          </Grid>
          {!isTablet ? (
            <Grid item xs={4}>
              <CustomerMedia reviews={reviews} />
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </Box>
    </>
  );
};

ReviewsPage.layout = NavbarLayout;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const slug = context.params.productId;
  try {
    //! We have to debug furthermore
    const data = await useReviewsBySlug(slug);
    // console.log(data.reviews);
    // sessionStorage.setItem('reviews', data.reviews);
    return {
      props: {
        ...data,
        slug,
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

export default ReviewsPage;
