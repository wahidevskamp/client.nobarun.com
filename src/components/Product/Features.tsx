import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import Grid from '@component/grid/Grid';
import Image from '@component/Image';
import Typography, { H2 } from '@component/Typography';
import React from 'react';

const Features = ({ features }) => {
  console.log(features);
  return (
    <>
      {features?.map((feature, idx) => (
        <Card px="2rem" py="3rem" mb="2rem" key={idx}>
          <FlexBox
            justifyContent="center"
            className={
              idx % 2 !== 0
                ? 'product__keypoints--left'
                : 'product__keypoints--right'
            }
          >
            <span className="product__keypoints-image">
              {feature?.images.length > 0 ? (
                <img src={feature?.images[0]} alt="Featured Image" />
              ) : (
                <img src="/assets/images/features.png" alt="Featured Image" />
              )}
            </span>
          </FlexBox>
          <div>
            <H2 fontSize="32px" mb="15px">
              {feature.title}
            </H2>
            <Typography>
              <div
                className="product__keypoints-content"
                dangerouslySetInnerHTML={{
                  __html: feature?.content.replace('font-family:Titillium', ''),
                }}
              ></div>
            </Typography>
          </div>
        </Card>
      ))}
    </>
  );
};

export default Features;
