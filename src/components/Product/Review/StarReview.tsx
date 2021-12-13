import React from 'react';
import { Line } from 'rc-progress';
import Box from '@component/Box';
import FlexBox from '@component/FlexBox';
import { H1, H2, H4, H5, SemiSpan, Span } from '@component/Typography';
import Rating from '@component/rating/Rating';
import ReviewSummary from './ReviewSummary';
import StarRating from './StarRating';

const StarReview = (props) => {
  const {
    productTitle,
    productCode,
    price,
    summary,
    details,
    isLaptop,
    isTablet,
  } = props;
  const className = isLaptop ? 'review_summary' : '';
  return (
    <Box className={className}>
      <ReviewSummary
        productTitle={productTitle}
        productCode={productCode}
        price={price}
        summary={summary}
        isLaptop={false}
        isTablet={isTablet}
      />
      <StarRating details={details} isLaptop={false} />
    </Box>
  );
};

export default StarReview;
