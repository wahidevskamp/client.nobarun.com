import Box from '@component/Box';
import FlexBox from '@component/FlexBox';
import AvailableShops from '@component/products/AvailableShops';
import FrequentlyBought from '@component/products/FrequentlyBought';
import ProductDescription from '@component/products/ProductDescription';
import ProductReview from '@component/products/ProductReview';
import RelatedProducts from '@component/products/RelatedProducts';
import { H5 } from '@component/Typography';
import React, { Fragment, useState } from 'react';

const DeadCode = () => {
  const [selectedOption, setSelectedOption] = useState('description');

  const handleOptionClick = (opt) => () => {
    setSelectedOption(opt);
  };

  return (
    <Fragment>
      <FlexBox borderBottom="1px solid" borderColor="gray.400" mb="26px">
        <H5
          className="cursor-pointer"
          mr="25px"
          p="4px 10px"
          color={
            selectedOption === 'description' ? 'primary.main' : 'text.muted'
          }
          borderBottom={selectedOption === 'description' && '2px solid'}
          borderColor="primary.main"
          onClick={handleOptionClick('description')}
        >
          Description
        </H5>
        <H5
          className="cursor-pointer"
          p="4px 10px"
          color={selectedOption === 'review' ? 'primary.main' : 'text.muted'}
          onClick={handleOptionClick('review')}
          borderBottom={selectedOption === 'review' && '2px solid'}
          borderColor="primary.main"
        >
          Review (3)
        </H5>
      </FlexBox>

      <Box mb="50px">
        {selectedOption === 'description' && <ProductDescription />}
        {selectedOption === 'review' && <ProductReview />}
      </Box>

      <FrequentlyBought />

      <AvailableShops />

      <RelatedProducts />
    </Fragment>
  );
};

export default DeadCode;
