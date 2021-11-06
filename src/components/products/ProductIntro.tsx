import Button from '@component/buttons/Button';
import Card from '@component/Card';
import Spinner from '@component/Spinner';
import useWindowSize from '@hook/useWindowSize';
import getYoutubeId from 'helpers/getYoutubeId';
import React, { useEffect, useState } from 'react';
import Avatar from '../avatar/Avatar';
import Box from '../Box';
import FlexBox from '../FlexBox';
import Grid from '../grid/Grid';
import Icon from '../icon/Icon';
import Rating from '../rating/Rating';
import Typography, { H1, H4, Span } from '../Typography';

export interface ProductIntroProps {
  data?: any;
  imgUrl?: string[];
  title: string;
  price: number;
  id?: string | number;
}

const ProductIntro: React.FC<ProductIntroProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');
  const [isVideo, setIsVideo] = useState(false);

  const width = useWindowSize();
  useEffect(() => {
    setSelectedImage(data?.images[0]);
    setIsLoading(false);
  }, [data?.images[0]]);

  const handleImageClick = (ind, type) => () => {
    setSelectedImage(ind);
    if (type === 'image') setIsVideo(false);
    if (type === 'video') setIsVideo(true);
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
          zIndex: 1000,
        }}
      >
        {data?.stockStatus}
      </Box>
      <Box overflow="hidden" px="3em" py="2rem">
        <FlexBox
          justifyContent="space-between"
          flexDirection={width > 1140 ? 'row' : 'column'}
          alignItems={width > 1140 ? 'center' : 'flex-start'}
          mb="2em"
        >
          <Box>
            <H1 fontSize={width > 660 ? '30px' : '24px'}>
              {data?.productName}
            </H1>
            <Typography>Product Code: {data?.productCode}</Typography>
            <FlexBox
              flexDirection={width > 660 ? 'row' : 'column'}
              alignItems={width > 660 ? 'center' : 'flex-start'}
              mt=".4em"
              flexWrap="nowrap"
            >
              <H4 mr={data?.price ? '1.5em' : '0'} color="#E94560">
                {data?.price && `Price: ${data?.price} Taka`}
              </H4>
              <Rating
                outof={5}
                value={data?.rating}
                color="warn"
                size="medium"
              />
              <Span ml={width > 660 ? '1em' : '0em'} color="#0082C9">
                {data?.review} Real Customer Reviews
              </Span>
            </FlexBox>
          </Box>
          <Button
            variant="contained"
            color="primary"
            mt={width > 140 ? '1em' : '0em'}
          >
            বাংলায় পড়ুন
          </Button>
        </FlexBox>
        <FlexBox>
          <FlexBox justifyContent="center" mb="50px">
            {isLoading ? (
              <Spinner />
            ) : isVideo ? (
              <iframe
                width="500"
                height="500"
                src={`https://www.youtube.com/embed/${getYoutubeId(
                  selectedImage,
                )}`}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={selectedImage}
                alt={data?.productName}
                loading="eager"
                className="product__hero-image"
                // objectFit="contain"
              />
            )}
          </FlexBox>
          <Box className="product__hero-slider">
            <Grid container>
              {data ? (
                data?.images.map((url, ind) => (
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
                      ml="10px"
                      borderColor={
                        selectedImage === ind ? 'primary.main' : 'gray.400'
                      }
                      onClick={handleImageClick(url, 'image')}
                    >
                      <Avatar src={url} borderRadius="10px" size={40} />
                    </Box>
                  </Grid>
                ))
              ) : (
                <Grid item xs={6}>
                  &nbsp;
                </Grid>
              )}
              {data ? (
                data?.videos.map((url, ind) => (
                  <Grid item xs={6}>
                    <Box
                      key={ind}
                      ml="10px"
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
                      borderColor={
                        selectedImage === ind ? 'primary.main' : 'gray.400'
                      }
                      onClick={handleImageClick(url, 'video')}
                    >
                      <Avatar src={url} borderRadius="10px" size={40} />
                    </Box>
                  </Grid>
                ))
              ) : (
                <Grid item xs={6}>
                  &nbsp;
                </Grid>
              )}
            </Grid>
          </Box>
        </FlexBox>
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
