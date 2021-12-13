import React, { useState } from 'react';
import ProductCard12 from '@component/product-cards/ProductCard12';
import { Chip } from '@component/Chip';
import FlexBox from '@component/FlexBox';
import Button from '@component/buttons/Button';
import Link from 'next/link';

const Tags = ({ chips }) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <ProductCard12 title="Product Tags">
      <FlexBox flexWrap="wrap">
        {chips?.slice(0, showAll ? chips.length : 15).map((chip) => (
          <Link href={`/product/tags/${chip}`}>
            <a>
              <Chip
                bg="#eee"
                p="5px 10px"
                mr="10px"
                mb="15px"
                boxShadow="0px 1px 3px rgba(3, 0, 71, 0.09)"
              >
                {chip}
              </Chip>
            </a>
          </Link>
        ))}
      </FlexBox>
      {chips.length > 15 && (
        <Button
          style={{ margin: 'auto' }}
          onClick={() => {
            setShowAll(!showAll);
          }}
        >
          {showAll ? 'Show Less' : 'Load More'}
        </Button>
      )}
    </ProductCard12>
  );
};

export default Tags;
