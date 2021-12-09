import React, { useEffect, useState } from 'react';
import Button from '@component/buttons/Button';
import Card from '@component/Card';
import Spinner from '@component/Spinner';
import useWindowSize from '@hook/useWindowSize';
import getYoutubeId from 'helpers/getYoutubeId';
import Avatar from '../avatar/Avatar';
import Box from '../Box';
import FlexBox from '../FlexBox';
import Grid from '../grid/Grid';
import Icon from '../icon/Icon';
import Rating from '../rating/Rating';
import Typography, { H1, H4, SemiSpan, Span } from '../Typography';
import Carousel from '@component/carousel/Carousel';

export interface ProductIntroProps {
  data?: any;
  imgUrl?: string[];
  title?: string;
  price?: number;
  id?: string | number;
}

const ProductIntro: React.FC<ProductIntroProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');
  const [isVideo, setIsVideo] = useState(false);

  const width = useWindowSize();
  const isPhone = width < 660;
  const isSmall = (width > 380 && width < 450) || (width > 230 && width < 330);
  useEffect(() => {
    setSelectedImage(data?.featuredImage);
    setIsLoading(false);
  }, [data?.images[0]]);

  const handleImageClick = (ind, type) => () => {
    setSelectedImage(ind);
    if (type === 'image') setIsVideo(false);
    if (type === 'video') setIsVideo(true);
  };

  const images = data ? (
    data?.images.map((url, ind) => (
      <Grid item xs={6} key={url + ind}>
        <Box
          size={isSmall ? 60 : 80}
          minWidth={isSmall ? 60 : 80}
          mb=".5rem"
          bg="white"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          border="1px solid"
          key={ind}
          borderColor={selectedImage === ind ? 'primary.main' : 'gray.400'}
          onClick={handleImageClick(url, 'image')}
        >
          <Avatar src={url} borderRadius="10px" size={isSmall ? 50 : 65} />
        </Box>
      </Grid>
    ))
  ) : (
    <Grid item xs={6}>
      &nbsp;
    </Grid>
  );

  const videos = data ? (
    data?.videos.map((url, ind) => (
      <Grid item xs={6}>
        <Box
          key={ind}
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
          borderColor={selectedImage === ind ? 'primary.main' : 'gray.400'}
          position="relative"
          onClick={handleImageClick(url, 'video')}
        >
          <Icon size="3rem" className="product__intro-video-icon">
            play-solid
          </Icon>
          <Avatar src={url} borderRadius="10px" size={65} />
        </Box>
      </Grid>
    ))
  ) : (
    <Grid item xs={6}>
      &nbsp;
    </Grid>
  );

  const banglaVersionHTML =
    data?.banglaVersionLink !== '' ? (
      <a
        href={data?.banglaVersionLink}
        className="product__hero-btn"
        target="_blank"
      >
        বাংলা ব্লগ পড়ুন
      </a>
    ) : (
      ''
    );
  const documentDownload = data?.document && (
    <Box mt="5px" pr="2rem" textAlign="center">
      <SemiSpan color="#000">Datasheet</SemiSpan>
      <a
        href={data?.document}
        className="product__intro-attachment"
        target="_blank"
      >
        Download
      </a>
    </Box>
  );
  return (
    <Card position="relative">
      <Box className="product__stock-status">{data?.stockStatus}</Box>
      <Box overflow="hidden" px="15px" py="5px">
        <H1 fontSize={width > 660 ? '32px' : '24px'}>{data?.productName}</H1>

        <FlexBox justifyContent="space-between" mb="1.1em">
          <Box width={isPhone ? '100%' : ''}>
            {!isPhone && (
              <Typography fontSize="18px" lineHeight="1" mb="0.7rem">
                Product Code: {data?.productCode}
              </Typography>
            )}
            <FlexBox
              flexDirection={width > 660 ? 'row' : 'column'}
              alignItems={width > 660 ? 'center' : 'flex-start'}
              flexWrap="nowrap"
            >
              {isPhone && (
                <FlexBox
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Box>
                    <Typography fontSize="18px" lineHeight="1">
                      Product Code: {data?.productCode}
                    </Typography>
                    {data?.price ? (
                      <H4
                        mr={data?.price ? '1em' : '0'}
                        color="#EC1C24"
                        fontSize="20px"
                        fontWeight="600"
                      >
                        Price: {data?.price} Taka
                      </H4>
                    ) : (
                      ''
                    )}
                  </Box>
                  {isPhone && banglaVersionHTML}
                </FlexBox>
              )}

              {!isPhone && data?.price ? (
                <H4
                  mr={data?.price ? '1em' : '0'}
                  color="#EC1C24"
                  fontSize="20px"
                  fontWeight="600"
                >
                  Price: {data?.price} Taka
                </H4>
              ) : (
                ''
              )}
              <FlexBox>
                <Rating
                  outof={5}
                  value={data?.rating}
                  color="warn"
                  size="medium"
                />
                <a href="#reviews">
                  <Span
                    ml="1rem"
                    color="#0082C9"
                    fontSize="16px"
                    fontWeight="600"
                  >
                    {data?.review} Real Customer Reviews
                  </Span>
                </a>
              </FlexBox>
            </FlexBox>
          </Box>
          {!isPhone && banglaVersionHTML}
        </FlexBox>
        <FlexBox flexDirection={width > 900 ? 'row' : 'column'}>
          <FlexBox justifyContent="center" className="product__intro-main">
            {isLoading ? (
              <Spinner />
            ) : isVideo ? (
              <iframe
                width="546"
                height="546"
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
          {/* </Grid>
          <Grid item xs={width > 1550 ? 2 : 3}> */}
          <Box className="product__hero-slider">
            {width > 900 ? (
              <Grid container>
                {videos}
                {images}
                <Grid item xs={12}>
                  {documentDownload}
                </Grid>
              </Grid>
            ) : (
              <div style={{ width: '100%' }}>
                <Carousel
                  autoPlay={false}
                  infinite
                  showArrow={false}
                  // showArrowOnHover={true}
                  totalSlides={data?.images?.length + data?.videos?.length}
                  visibleSlides={width < 650 ? 5 : 6}
                >
                  {videos}
                  {images}
                </Carousel>
              </div>
            )}
          </Box>
          {/* </Grid>
        </Grid> */}
        </FlexBox>
        <button className="product__share-btn">
          <Icon size="1.78rem" mr="1rem">
            share-solid
          </Icon>
          <Typography fontSize="20px" fontWeight="400">
            Share
          </Typography>
        </button>
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
