import Box from '@component/Box';
import Button from '@component/buttons/Button';
import IconButton from '@component/buttons/IconButton';
import Card from '@component/Card';
import Grid from '@component/grid/Grid';
import Icon from '@component/icon/Icon';
import Modal from '@component/modal/Modal';
import TextField from '@component/text-field/TextField';
import TextArea from '@component/textarea/TextArea';
import { H1, SemiSpan } from '@component/Typography';
import React from 'react';

interface AddQueryProps {
  isOpen: boolean;
  setIsOpen: any;
  id: string;
}
const AddQuery = (props: AddQueryProps) => {
  const { isOpen, setIsOpen, id } = props;
  const onCloseHandler = () => {
    setIsOpen(false);
  };
  return (
    <Modal open={isOpen} onClose={onCloseHandler}>
      <Card className="query" position="relative">
        <Box maxWidth="809px">
          <Box textAlign="center" mb="3em">
            <H1>Product Enquiry</H1>
            <SemiSpan>We will contact you within short time</SemiSpan>
          </Box>
          <IconButton
            style={{ position: 'absolute', right: '15px', top: '15px' }}
            onClick={onCloseHandler}
          >
            <Icon>close</Icon>
          </IconButton>
          <img src="/Review.svg" className="query__hero" />
          <Box className="query__form">
            <Grid container spacing={5}>
              <Grid item md={6} sm={12} xs={12}>
                <TextField fullwidth label="Your Full Name" />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TextField fullwidth label="Your Full Name" />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TextField fullwidth label="Your Email Address" />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TextField fullwidth label="Company Name" />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TextField fullwidth label="Full Address" />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TextField fullwidth label="Attachment" type="file" />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextArea
                  label="Write your Details Message"
                  labelColor="warn"
                  rows={8}
                  className="query__textarea"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  px="4rem"
                  fullwidth
                  style={{
                    backgroundColor: '#EC1C24',
                    color: '#fff',
                    maxWidth: '30rem',
                    margin: 'auto',
                  }}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
    </Modal>
  );
};

export default AddQuery;
