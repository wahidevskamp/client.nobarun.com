import Button from '@component/buttons/Button';
import Card from '@component/Card';
import LazyImage from '@component/LazyImage';
import React, { useState } from 'react';
import Avatar from '../avatar/Avatar';
import Box from '../Box';
import FlexBox from '../FlexBox';
import Grid from '../grid/Grid';
import Icon from '../icon/Icon';
import Rating from '../rating/Rating';
import Typography, { H1, H4, Span } from '../Typography';

export interface ProductIntroProps {
  imgUrl?: string[];
  title: string;
  price: number;
  id?: string | number;
}

const ProductIntro: React.FC<ProductIntroProps> = ({ imgUrl, title }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (ind) => () => {
    setSelectedImage(ind);
  };

  return (
    <Card position="relative">
      <Box
        display="inline-block"
        bg="#EC1C24"
        color="#fff"
        px="10px"
        py="10px"
        pr="25px"
        position="absolute"
        top="50%"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0, 93% 41%, 83% 100%, 0% 100%)',
          transform: 'translateY(-50%)',
        }}
      >
        Ready Stock
      </Box>
      <Box overflow="hidden" px="3em" py="2rem">
        <FlexBox justifyContent="space-between" alignItems="center" mb="2em">
          <Box>
            <H1>Commercial Bone Saw Machine</H1>
            <Typography>Product Code: NI1876</Typography>
            <FlexBox alignItems="center" mt=".4em">
              <H4 mr="1.5em" color="#EC1C24">
                Price: 2,75,000 Taka
              </H4>
              <Rating outof={5} value={3} color="warn" size="medium" />
              <Span ml="1em" color="#0082C9">
                22 Real Customer Reviews
              </Span>
            </FlexBox>
          </Box>
          <Button variant="contained" color="primary">
            বাংলায় পড়ুন
          </Button>
        </FlexBox>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={16}
        >
          <Grid item md={8} xs={12} alignItems="center">
            <FlexBox justifyContent="center" mb="50px">
              <LazyImage
                src={imgUrl[selectedImage]}
                alt={title}
                height="300px"
                width="auto"
                loading="eager"
                objectFit="contain"
              />
            </FlexBox>
          </Grid>

          <Grid item md={3} xs={12} alignItems="center">
            <Grid container justifyContent="center">
              {imgUrl.map((url, ind) => (
                <Grid item xs={6}>
                  <Box
                    size={80}
                    minWidth={80}
                    mb=".5rem"
                    bg="white"
                    borderRadius="10px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                    border="1px solid"
                    key={ind}
                    // ml={ind === 0 && 'auto'}
                    // mr={ind === imgUrl.length - 1 ? 'auto' : '10px'}
                    borderColor={
                      selectedImage === ind ? 'primary.main' : 'gray.400'
                    }
                    onClick={handleImageClick(ind)}
                  >
                    <Avatar src={url} borderRadius="10px" size={40} />
                  </Box>
                </Grid>
              ))}
              {imgUrl.map((url, ind) => (
                <Grid item xs={6}>
                  <Box
                    size={80}
                    minWidth={80}
                    mb=".5rem"
                    bg="white"
                    borderRadius="10px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                    border="1px solid"
                    key={ind}
                    // ml={ind === 0 && 'auto'}
                    // mr={ind === imgUrl.length - 1 ? 'auto' : '10px'}
                    borderColor={
                      selectedImage === ind ? 'primary.main' : 'gray.400'
                    }
                    onClick={handleImageClick(ind)}
                  >
                    <Avatar src={url} borderRadius="10px" size={40} />
                  </Box>
                </Grid>
              ))}
              {imgUrl.map((url, ind) => (
                <Grid item xs={6}>
                  <Box
                    size={80}
                    minWidth={80}
                    mb=".5rem"
                    bg="white"
                    borderRadius="10px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                    border="1px solid"
                    key={ind}
                    // ml={ind === 0 && 'auto'}
                    // mr={ind === imgUrl.length - 1 ? 'auto' : '10px'}
                    borderColor={
                      selectedImage === ind ? 'primary.main' : 'gray.400'
                    }
                    onClick={handleImageClick(ind)}
                  >
                    <Avatar src={url} borderRadius="10px" size={40} />
                  </Box>
                </Grid>
              ))}
              {imgUrl.map((url, ind) => (
                <Grid item xs={6}>
                  <Box
                    size={80}
                    minWidth={80}
                    mb=".5rem"
                    bg="white"
                    borderRadius="10px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                    border="1px solid"
                    key={ind}
                    // ml={ind === 0 && 'auto'}
                    // mr={ind === imgUrl.length - 1 ? 'auto' : '10px'}
                    borderColor={
                      selectedImage === ind ? 'primary.main' : 'gray.400'
                    }
                    onClick={handleImageClick(ind)}
                  >
                    <Avatar src={url} borderRadius="10px" size={40} />
                  </Box>
                </Grid>
              ))}
            </Grid>
            {/* <FlexBox
              overflow="auto"
              flexDirection="column"
              alignItems="flex-start"
            ></FlexBox> */}
          </Grid>
        </Grid>
        <Button
          variant="contained"
          bg="#0082C9"
          //@ts-ignore
          color="#fff"
        >
          <Icon size="1em" mr="1em">
            share-solid
          </Icon>
          Share
        </Button>
      </Box>
    </Card>
  );
};

ProductIntro.defaultProps = {
  imgUrl: [
    '/assets/images/products/headphone.png',
    '/assets/images/products/hiclipart.com (16).png',
    '/assets/images/products/hiclipart.com (18).png',
  ],
  title: 'Mi Note 11 Pro',
  price: 1100,
};

export default ProductIntro;
