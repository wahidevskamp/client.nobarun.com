import React from 'react';
import ProductCard12 from '@component/product-cards/ProductCard12';
import Grid from '@component/grid/Grid';
import Typography, { Span } from '@component/Typography';
import Image from '@component/Image';
import Link from 'next/link';
import Box from '@component/Box';
import FlexBox from '@component/FlexBox';
import Rating from '@component/rating/Rating';

interface RelatedProductProps {
  products: any[];
}

const RelatedProducts: React.FC<RelatedProductProps> = ({ products }) => {
  return (
    <ProductCard12 title="Related Products">
      <ul>
        {products?.map((product, idx) => (
          <li key={product?.image + idx} style={{ marginBottom: '1.5rem' }}>
            <Link href={product?.slug}>
              <a>
                <FlexBox alignItems="center">
                  <Image
                    src={product?.image}
                    height="80"
                    width="80"
                    borderRadius="10px"
                  />
                  <Box ml="20px">
                    <Span fontSize="18px">{product?.name}</Span>
                    <FlexBox alignItems="center">
                      <Rating
                        value={product?.ratingAverage}
                        color="warn"
                        size="small"
                      />
                      <Span fontSize="14px" ml="5px">
                        ({product?.totalReviewCount || 0})
                      </Span>
                    </FlexBox>
                  </Box>
                </FlexBox>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </ProductCard12>
  );
};

export default RelatedProducts;
