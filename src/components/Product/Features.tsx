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
        <Card px="5em" py="3em" mb="2em" key={idx}>
          <Grid
            container
            justifyContent="center"
            // alignItems="center"
            spacing={10}
            flexDirection={idx % 2 !== 0 ? 'row-reverse' : 'row'}
          >
            <Grid item sm={3}>
              <FlexBox justifyContent="center">
                <span className="product__keypoints-image">
                  {feature?.images.length > 0 ? (
                    <Image
                      src={feature?.images[0]}
                      alt="Featured Image"
                      height="300px"
                      borderRadius={8}
                    />
                  ) : (
                    <Image
                      src="/assets/images/features.png"
                      alt="Featured Image"
                      height="300px"
                      borderRadius={8}
                    />
                  )}
                </span>
              </FlexBox>
            </Grid>

            <Grid item sm={9}>
              <H2 mb="15px">{feature.title}</H2>
              <Typography>
                <div
                  className="product__keypoints-content"
                  dangerouslySetInnerHTML={{
                    __html: feature?.content.replace(
                      'font-family:Titillium',
                      '',
                    ),
                  }}
                ></div>
              </Typography>
            </Grid>
          </Grid>
        </Card>
      ))}
    </>
  );
};

export default Features;
