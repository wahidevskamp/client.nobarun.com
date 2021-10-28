import Button from '@component/buttons/Button';
import Card from '@component/Card';
import DropZone from '@component/DropZone';
import FlexBox from '@component/FlexBox';
import Grid from '@component/grid/Grid';
import Icon from '@component/icon/Icon';
import Rating from '@component/rating/Rating';
import TextField from '@component/text-field/TextField';
import TextArea from '@component/textarea/TextArea';
import { H1, SemiSpan, Span } from '@component/Typography';
import React from 'react';

const AddReview = () => {
  return (
    <Card px="3em" py="4em">
      <H1>Submit your review</H1>
      <SemiSpan my="0.8em">
        Your email address will not be published. Required fields are marked
      </SemiSpan>
      <FlexBox alignItems="center" mt="1em" mb="3em">
        <Rating
          outof={5}
          color="warn"
          size="medium"
          readonly={false}
          value={3}
          onChange={() => {}}
        />
        <Span ml="1em"> Review Rating *</Span>
      </FlexBox>
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <TextField label="Your Name" fullwidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Your Company Name" fullwidth />
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <TextField label="Your Email Address" fullwidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Your Location" fullwidth />
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <TextArea
            fullwidth
            label="Write your review* (Minimum 50 Words)"
            style={{ minHeight: '150px' }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <DropZone label="Add images & videos to your review" />
        </Grid>
      </Grid>
      <FlexBox mt="3em" justifyContent="center">
        <Button color="primary" variant="contained" size="large">
          <Icon size="1.5rem" mr="1em">
            send-2 1
          </Icon>
          Submit Review
        </Button>
      </FlexBox>
    </Card>
  );
};

export default AddReview;
