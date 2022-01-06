import Image from '@component/Image';
import Link from 'next/link';
import React from 'react';
import { CSSProperties } from 'styled-components';
import Box from '../Box';
import { CardProps } from '../Card';
import FlexBox from '../FlexBox';
import Rating from '../rating/Rating';
import { H3, H6, SemiSpan } from '../Typography';
import { StyledProductCard1 } from './CardStyle';

export interface ProductCard1Props extends CardProps {
  className?: string;
  style?: CSSProperties;
  imgUrl?: string;
  title?: string;
  price?: number;
  off?: number;
  rating?: number;
  noOfRating?: number;
  id?: string | number;
  categoryName?: string;
  categoryIcon?: string;
}

const ProductCard1: React.FC<ProductCard1Props> = ({
  id,
  imgUrl,
  title,
  price,
  off,
  rating,
  noOfRating,
  ...props
}) => {
  return (
    <StyledProductCard1 {...props}>
      <div className="image-holder">
        <Link href={`/${id}`}>
          <a>
            <img src={imgUrl} alt={title} />
          </a>
        </Link>
      </div>
      <div className="details">
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr="0.5rem">
            <Link href={`/${id}`}>
              <a>
                <FlexBox alignItems="center">
                  <Image
                    src={props.categoryIcon}
                    height="30px"
                    width="30px"
                    mr=".3rem"
                    display="block"
                  />
                  <SemiSpan
                    className="title"
                    color="text.hint"
                    title={props.categoryName}
                  >
                    {props.categoryName}
                  </SemiSpan>
                </FlexBox>
              </a>
            </Link>
            <Link href={`/${id}`}>
              <a>
                <H3
                  className="title"
                  textAlign="left"
                  fontWeight="600"
                  color="text.secondary"
                  mt="10px"
                  mb="5px"
                  title={title}
                >
                  {title}
                </H3>
              </a>
            </Link>
            <FlexBox alignItems="center">
              <Rating value={rating || 0} outof={5} color="warn" readonly />
              <H6 ml=".5rem" color="#ddd">
                ({noOfRating || 0})
              </H6>
            </FlexBox>
          </Box>
        </FlexBox>
      </div>
      {/* <AddQuery id={id as string} isOpen={open} setIsOpen={setOpen} /> */}
    </StyledProductCard1>
  );
};

ProductCard1.defaultProps = {
  id: '324321',
  title: 'KSUS ROG Strix G15',
  imgUrl: '/assets/images//macbook.png',
  off: 50,
  price: 450,
  rating: 0,
};

export default ProductCard1;
