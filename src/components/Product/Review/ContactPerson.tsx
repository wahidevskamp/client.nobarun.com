import Box from '@component/Box';
import Button from '@component/buttons/Button';
import FlexBox from '@component/FlexBox';
import Icon from '@component/icon/Icon';
import Typography, { H5, Paragraph } from '@component/Typography';
import Image from '@component/Image';
import React from 'react';

const ContactPerson = ({ contact, setIsOpen }) => {
  return (
    <Box px="1rem" py="1rem" mb="2rem">
      {contact?.companyLogo && (
        <div className="product__contact-logo">
          <Image src={contact?.companyLogo} alt="logo" maxHeight="60px" />
        </div>
      )}
      {contact?.name && (
        <FlexBox alignItems="center" mb=".8rem">
          <div className="product__contact-icon">
            <Icon size="2.4rem">profile</Icon>
          </div>
          <H5 ml="1rem" fontSize="22px">
            {contact?.name}
          </H5>
        </FlexBox>
      )}
      {contact?.whatsAppNumber && (
        <a
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=${contact?.whatsAppNumber}&text=Hello!%20Can%20you%20please%20tell%20me%20more%20about%20your%20services?`}
        >
          <FlexBox alignItems="center" mb=".8rem">
            <div className="product__contact-icon">
              <Icon size="2.4rem">call 1</Icon>
            </div>
            <Typography ml="1rem" fontSize="22px">
              {contact?.whatsAppNumber}
            </Typography>
            <Image
              src="/whatsapp.png"
              alt="Whatsapp"
              className="product__contact-icon--whatsapp"
            />
          </FlexBox>
        </a>
      )}
      {contact?.email && (
        <FlexBox alignItems="center" mb=".8rem">
          <div className="product__contact-icon">
            <Icon size="2.4rem">sms 1</Icon>
          </div>
          <Typography ml="1rem" fontSize="22px">
            {contact?.email}
          </Typography>
        </FlexBox>
      )}
      {contact?.address && (
        <FlexBox alignItems="center" mb=".8rem">
          <div className="product__contact-icon product__contact-icon-location">
            <Icon size="2.4rem">location 1</Icon>
          </div>
          <Paragraph
            ml="1.2rem"
            fontSize="22px"
            style={{ overflowWrap: 'anywhere' }}
          >
            {contact?.address}
          </Paragraph>
        </FlexBox>
      )}
      <Button
        variant="contained"
        color="primary"
        className="product_quote-btn"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Icon mr="1.5rem" size="1.8rem">
          plus-circles
        </Icon>
        Get a Quote
      </Button>
    </Box>
  );
};

export default ContactPerson;
