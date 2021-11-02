import Button from '@component/buttons/Button';
import Image from '@component/Image';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { CSSProperties } from 'styled-components';
import Box from '../Box';
import Card, { CardProps } from '../Card';
import { Chip } from '../Chip';
import FlexBox from '../FlexBox';
import Icon from '../icon/Icon';
import Modal from '../modal/Modal';
import ProductIntro from '../products/ProductIntro';
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
  // className?: string;
  // style?: CSSProperties;
  // imgUrl: string;
  // title: string;
  // price: number;
  // off: number;
  // rating?: number;
  // subcategories?: Array<{
  //   title: string;
  //   url: string;
  // }>;
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
  console.log(props);
  const [open, setOpen] = useState(false);
  const toggleDialog = useCallback(() => {
    setOpen((open) => !open);
  }, []);

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
          <Icon
            color="secondary"
            variant="small"
            mb="0.5rem"
            onClick={toggleDialog}
          >
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
            {/* <FlexBox alignItems="center" mt="10px">
              <SemiSpan pr="0.5rem" fontWeight="600" color="primary.main">
                ${(price - (price * off) / 100).toFixed(2)}
              </SemiSpan>
              {!!off && (
                <SemiSpan color="text.muted" fontWeight="600">
                  <del>{price?.toFixed(2)}</del>
                </SemiSpan>
              )}
            </FlexBox> */}
          </Box>

          {/* <FlexBox
            flexDirection="column-reverse"
            alignItems="center"
            justifyContent={!!cartItem?.qty ? 'space-between' : 'flex-start'}
            width="30px"
          > */}
          {/* <div className="add-cart"> */}
          {/* <Button
              variant="outlined"
              color="primary"
              padding="3px"
              size="none"
              borderColor="primary.light"
              onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}
            >
              <Icon variant="small">plus</Icon>
            </Button>

            {!!cartItem?.qty && (
              <Fragment>
                <SemiSpan color="text.primary" fontWeight="600">
                  {cartItem?.qty}
                </SemiSpan>
                <Button
                  variant="outlined"
                  color="primary"
                  padding="3px"
                  size="none"
                  borderColor="primary.light"
                  onClick={handleCartAmountChange(cartItem?.qty - 1)}
                >
                  <Icon variant="small">minus</Icon>
                </Button>
              </Fragment>
            )}
          </FlexBox>*/}
        </FlexBox>
      </div>

      <Modal open={open} onClose={toggleDialog}>
        <Card p="1rem" position="relative">
          <ProductIntro imgUrl={[imgUrl]} title={title} price={price} id={id} />
          <Box
            position="absolute"
            top="0.75rem"
            right="0.75rem"
            cursor="pointer"
          >
            <Icon
              className="close"
              color="primary"
              variant="small"
              onClick={toggleDialog}
            >
              close
            </Icon>
          </Box>
        </Card>
      </Modal>
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
