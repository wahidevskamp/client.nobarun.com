import React, { Fragment } from 'react';
import getDay from 'date-fns/getDay';

import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import Icon from '@component/icon/Icon';
import Image from '@component/Image';
import Typography, { H5 } from '@component/Typography';
import ProductCard from '@component/product-cards/ProductCard12';

const Contacts = () => {
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
          <H5 ml="1rem">Mr. Mithun</H5>
        </FlexBox>
        <FlexBox alignItems="center" mb=".8rem">
          <div className="product__contact-icon">
            <Icon size="1.5rem">call 1</Icon>
          </div>
          <Typography ml="1rem">01611 99 86 26</Typography>
        </FlexBox>
        <FlexBox alignItems="center" mb=".8rem">
          <div className="product__contact-icon">
            <Icon size="1.5rem">sms 1</Icon>
          </div>
          <Typography ml="1rem">nobarunbd@gmail.com</Typography>
        </FlexBox>
        <FlexBox alignItems="center" mb=".8rem">
          <div className="product__contact-icon">
            <Icon size="1.8rem">location 1</Icon>
          </div>
          <Typography ml="1.2rem">
            House:199(1st floor), Road: 01, New DOHS Mohakhali, Dhaka-1206,
            Bangladesh.
          </Typography>
        </FlexBox>
      </Card>
      <ProductCard
        title={day === 1 ? 'Today Closed' : 'Today Open 09:00 am - 07:00 pm'}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9532234081103!2d90.396399215529!3d23.78467998457248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7404bd1656f%3A0x7ebd233d85ca7af8!2sNobarun%20International!5e0!3m2!1sen!2sbd!4v1635306527182!5m2!1sen!2sbd"
          style={{ width: '100%', height: '22rem', border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </ProductCard>
    </Fragment>
  );
};

export default Contacts;
