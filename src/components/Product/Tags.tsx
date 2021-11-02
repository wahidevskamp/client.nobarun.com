import React from 'react';
import ProductCard12 from '@component/product-cards/ProductCard12';
import { Chip } from '@component/Chip';
import FlexBox from '@component/FlexBox';

const Tags = ({ chips }) => {
  return (
    <ProductCard12 title="Product Tags">
      <FlexBox flexWrap="wrap" justifyContent="center">
        {chips?.map((chip) => (
          <Chip
            bg="#eee"
            p="5px 10px"
            mr="10px"
            mb="15px"
            boxShadow="0px 1px 3px rgba(3, 0, 71, 0.09)"
          >
            {chip}
          </Chip>
        ))}
      </FlexBox>
    </ProductCard12>
  );
};

export default Tags;
