import Box from '@component/Box';
import Grid from '@component/grid/Grid';
import OtherLayout from '@component/layout/OtherLayout';
import AddQuery from '@component/Product/AddQuery';
import AddReview from '@component/Product/AddReview';
import CustomerMedia from '@component/Product/CustomerMedia';
import RelatedReview from '@component/Product/RelatedReview';
import ContactPerson from '@component/Product/Review/ContactPerson';
import FeaturedImage from '@component/Product/Review/FeaturedImage';
import ReviewSummary from '@component/Product/Review/ReviewSummary';
import StarRating from '@component/Product/Review/StarRating';
import StarReview from '@component/Product/Review/StarReview';
import useAllProductCategories from '@hook/Home/useAllProductCategories';
import useReviewsBySlug from '@hook/Product/useReviewsBySlug';
import useProductCount from '@hook/useNoOfProduct';
import useWindowSize from '@hook/useWindowSize';
import { GetServerSideProps } from 'next';
import React, { useState } from 'react';

const ReviewsPage = (props) => {
  const { productTitle, featuredImage, contact, reviews, productCode, slug } =
    props;
  const width = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const isLaptop = width < 1400 && width > 900;
  const isTablet = width < 900;
  return (
    <>
      <AddQuery
        id={'pid as string'}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        productName={productTitle}
        productCode={productCode}
        contact={contact}
      />
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
              <ContactPerson
                slug={slug}
                productName={productTitle}
                productCode={productCode}
                contact={contact}
                setIsOpen={setIsOpen}
              />
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={isTablet ? 0 : 10}>
          <Grid item xs={isTablet ? 12 : 8}>
            <RelatedReview
              title="Load All Reviews"
              reviews={reviews}
              slug={slug}
            />
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

ReviewsPage.layout = OtherLayout;

const getHallmarkImage = (imageObj: any) => {
  const imagePath = imageObj.slice(0, 16);
  const imageName = imagePath.replace('media/', '');
  const src = `${process.env.NEXT_PUBLIC_IMAGE_URL}media/hallmark-${imageName}.png`;
  return src;
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const slug = context.params.productId;
  try {
    //! We have to debug furthermore
    const data = await useReviewsBySlug(slug);
    const categories = await useAllProductCategories();
    const count = await useProductCount();

    return {
      props: {
        ...data,
        featuredImage: getHallmarkImage(data.featuredImage),
        slug,
        categories,
        count,
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
