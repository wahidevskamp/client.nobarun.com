import Box from '@component/Box';
import IconButton from '@component/buttons/IconButton';
import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import Icon from '@component/icon/Icon';
import Modal from '@component/modal/Modal';
import { H3 } from '@component/Typography';
import React, { useState } from 'react';

interface AlertProps {
  modalOpen: boolean;
  onClose: any;
  message: string;
}
const Alert = (props: AlertProps) => {
  const { modalOpen, onClose, message } = props;

  return (
    <Modal open={modalOpen} onClose={onClose}>
      <Card
        px="4rem"
        py="4rem"
        position="relative"
        textAlign="center"
        maxWidth="40rem"
        // margin="auto"
        className="product__intro-video-modal"
      >
        <IconButton className="product__review_image-close" onClick={onClose}>
          <Icon>close</Icon>
        </IconButton>
        <FlexBox justifyContent="center">
          <Icon size="15rem" color="#46ae2e">
            Group 10498
          </Icon>
        </FlexBox>
        <H3>{message}</H3>
      </Card>
    </Modal>
  );
};

export default Alert;
