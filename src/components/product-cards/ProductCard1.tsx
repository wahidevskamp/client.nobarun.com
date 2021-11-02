import Button from '@component/buttons/Button';
import Image from '@component/Image';
import AddQuery from '@component/Shared/AddQuery';
import Link from 'next/link';
import React, { useState } from 'react';
import { CSSProperties } from 'styled-components';
import Box from '../Box';
import { CardProps } from '../Card';
import { Chip } from '../Chip';
import FlexBox from '../FlexBox';
import Icon from '../icon/Icon';
import Rating from '../rating/Rating';
import { H3, H6, SemiSpan } from '../Typography';
import { StyledProductCard1 } from './ProductCardStyle';

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
  const [open, setOpen] = useState(false);
  return (
    <StyledProductCard1 {...props}>
      <div className="image-holder">
        {!!off && (
          <Chip
            position="absolute"
            bg="primary.main"
            color="primary.text"
            fontSize="10px"
            fontWeight="600"
            p="5px 10px"
            top="10px"
            left="10px"
          >
            {off}% off
          </Chip>
        )}

        <FlexBox className="extra-icons">
          <Icon color="secondary" variant="small" mb="0.5rem">
            eye-alt
          </Icon>
          <Icon className="favorite-icon outlined-icon" variant="small">
            heart
          </Icon>
        </FlexBox>

        <Link href={`/product/${id}`}>
          <a>
            <img src={imgUrl} width="100%" height="auto" alt={title} />
          </a>
        </Link>
      </div>
      <div className="details">
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr="0.5rem">
            <Link href={`/product/${id}`}>
              <a>
                <FlexBox alignItems="center">
                  <Image
                    src={props.categoryIcon}
                    height="30px"
                    width="30px"
                    mr=".3rem"
                    display="block"
                    borderRadius="50%"
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
            <Link href={`/product/${id}`}>
              <a>
                <H3
                  className="title"
                  fontSize="14px"
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
            <Button
              variant="contained"
              color="primary"
              style={{ width: '100%' }}
              mt="15px"
              onClick={() => {
                setOpen(true);
              }}
            >
              <Icon className="favorite-icon" variant="small" mr="1rem">
                plus-circle
              </Icon>
              Get a Quote
            </Button>
            <FlexBox justifyContent="space-around" alignItems="center">
              <Link href={`/product/${id}`}>
                <a>
                  <H3
                    className="title"
                    fontSize="16px"
                    textAlign="left"
                    fontWeight="600"
                    color="text.secondary"
                    mt="10px"
                    mb="5px"
                    title={title}
                  >
                    See Details
                  </H3>
                </a>
              </Link>
              <div
                style={{
                  transform: 'translateY(3px)',
                  height: '1.8rem',
                  width: '2px',
                  backgroundColor: '#eee',
                }}
              />
              <Link href={`/product/${id}`}>
                <a>
                  <H3
                    className="title"
                    fontSize="16px"
                    textAlign="left"
                    fontWeight="600"
                    color="text.secondary"
                    mt="10px"
                    mb="5px"
                    title={title}
                  >
                    Reviews
                  </H3>
                </a>
              </Link>
            </FlexBox>
          </Box>
        </FlexBox>
      </div>
      <AddQuery id={id as string} isOpen={open} setIsOpen={setOpen} />
    </StyledProductCard1>
  );
};

ProductCard1.defaultProps = {
  id: '324321',
  title: 'KSUS ROG Strix G15',
  imgUrl: '/assets/images/products/macbook.png',
  off: 50,
  price: 450,
  rating: 0,
};

export default ProductCard1;
