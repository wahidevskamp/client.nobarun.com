import Box from '@component/Box';
import Button from '@component/buttons/Button';
import Card from '@component/Card';
import Grid from '@component/grid/Grid';
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
  console.log(id);
  return (
    <Modal
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Card px="3em" py="3em">
        <Box width="700px" maxWidth="700px">
          <Box textAlign="center" mb="3em">
            <H1>Product Enquiry</H1>
            <SemiSpan>We will contact you within short time</SemiSpan>
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <TextField fullwidth label="Your Full Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullwidth label="Your Full Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullwidth label="Your Email Address" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullwidth label="Company Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullwidth label="Full Address" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullwidth label="Attachment" type="file" />
            </Grid>
            <Grid item xs={12}>
              <TextArea
                label="Write your Details Message"
                labelColor="warn"
                rows={8}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullwidth
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Modal>
  );
};

export default AddQuery;
