import React, { Fragment } from 'react';
import getDay from 'date-fns/getDay';

import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import Icon from '@component/icon/Icon';
import Image from '@component/Image';
import Typography, { H5 } from '@component/Typography';
import ProductCard from '@component/product-cards/ProductCard12';

const Contacts = ({ contact }) => {
  const day = getDay(new Date());
  return (
    <Fragment>
      <Card px="1rem" py="1rem" mb="2rem">
        <div className="product__contact-logo">
          <Image src="/assets/images/logo.png" alt="logo" maxHeight="60px" />
        </div>
        <FlexBox alignItems="center" mb=".8rem">
          <div className="product__contact-icon">
            <Icon size="1.5rem">profile</Icon>
          </div>
          <H5 ml="1rem">{contact?.name}</H5>
        </FlexBox>
        <FlexBox alignItems="center" mb=".8rem">
          <div className="product__contact-icon">
            <Icon size="1.5rem">call 1</Icon>
          </div>
          <Typography ml="1rem">{contact?.whatsAppNumber}</Typography>
        </FlexBox>
        <FlexBox alignItems="center" mb=".8rem">
          <div className="product__contact-icon">
            <Icon size="1.5rem">sms 1</Icon>
          </div>
          <Typography ml="1rem">{contact?.email}</Typography>
        </FlexBox>
        <FlexBox alignItems="center" mb=".8rem">
          <div className="product__contact-icon">
            <Icon size="1.8rem">location 1</Icon>
          </div>
          <Typography ml="1.2rem">{contact?.address}</Typography>
        </FlexBox>
      </Card>
      <ProductCard
        title={day === 1 ? 'Today Closed' : 'Today Open 09:00 am - 07:00 pm'}
      >
        <iframe
          src={contact?.maps}
          style={{ width: '100%', height: '22rem', border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </ProductCard>
    </Fragment>
  );
};

export default Contacts;
