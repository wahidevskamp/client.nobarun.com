import React, { Fragment, useState } from 'react';
import getDay from 'date-fns/getDay';

import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import Icon from '@component/icon/Icon';
import Image from '@component/Image';
import Typography, { H5, Paragraph } from '@component/Typography';
import ProductCard from '@component/product-cards/ProductCard12';
import Button from '@component/buttons/Button';
import AddQuery from '@component/Shared/AddQuery';

const Contacts = ({ id, contact, setIsOpen }) => {
  const day = getDay(new Date());
  return (
    <Fragment>
      <Card px="1rem" py="1rem" mb="2rem">
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
      </Card>
      {contact?.maps && (
        <ProductCard
          title={day === 1 ? 'Today Closed' : 'Today Open 09:00 am - 07:00 pm'}
        >
          <iframe
            src={contact?.maps}
            style={{ width: '100%', height: '46.7rem', border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </ProductCard>
      )}
    </Fragment>
  );
};

export default Contacts;
