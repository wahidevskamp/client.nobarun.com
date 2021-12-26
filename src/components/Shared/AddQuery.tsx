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
import React, { useMemo, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

interface AddQueryProps {
  isOpen: boolean;
  setIsOpen: any;
  id: string;
}
const defaultValues = {};
const AddQuery = (props: AddQueryProps) => {
  const { isOpen, setIsOpen, id } = props;
  const methods: any = useForm({
    defaultValues: useMemo(() => defaultValues, []),
  });

  const [state, setState] = useState({
    fullName: '',
    mobileNo: '',
    email: '',
    company: '',
    address: '',
    attachment: '',
    message: '',
  });
  const onCloseHandler = () => {
    setIsOpen(false);
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const onSubmit = () => {
    console.log(state);
  };

  return (
    <Modal open={isOpen} onClose={onCloseHandler}>
      <Card className="query" position="relative">
        <Box maxWidth="809px">
          <Box textAlign="center" className="query__header">
            <H1>Product Enquiry</H1>
            <SemiSpan>We will contact you within short time</SemiSpan>
          </Box>
          <IconButton
            style={{ position: 'absolute', right: '15px', top: '15px' }}
            onClick={onCloseHandler}
          >
            <Icon>close</Icon>
          </IconButton>
          <div>
            <div className="query__hero-wrapper">
              <img src="/Review.png" className="query__hero" />
            </div>
            <Box className="query__form">
              <FormProvider {...methods}>
                <Grid container spacing={5}>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      fullwidth
                      name="fullName"
                      label="Your Full Name"
                      value={state.fullName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      fullwidth
                      name="mobileNo"
                      label="Your Mobile No"
                      value={state.mobileNo}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      fullwidth
                      name="email"
                      label="Your Email Address"
                      value={state.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      fullwidth
                      name="company"
                      label="Company Name"
                      value={state.company}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      fullwidth
                      name="address"
                      label="Full Address"
                      value={state.address}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      fullwidth
                      name="attachment"
                      label="Attachment"
                      type="file"
                      value={state.address}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <TextArea
                      name="message"
                      label="Write your Details Message"
                      labelColor="warn"
                      rows={8}
                      className="query__textarea"
                      value={state.message}
                      onChange={handleChange}
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
                      onClick={onSubmit}
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </FormProvider>
            </Box>
          </div>
        </Box>
      </Card>
    </Modal>
  );
};

export default AddQuery;
