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

const Contacts = ({ id, contact }) => {
  const day = getDay(new Date());
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <AddQuery id={id} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Card px="1rem" py="1rem" mb="2rem">
        {contact?.companyLogo && (
          <div className="product__contact-logo">
            <Image src={contact?.companyLogo} alt="logo" maxHeight="60px" />
          </div>
        )}
        {contact?.name && (
          <FlexBox alignItems="center" mb=".8rem">
            <div className="product__contact-icon">
              <Icon size="1.5rem">profile</Icon>
            </div>
            <H5 ml="1rem">{contact?.name}</H5>
          </FlexBox>
        )}
        {contact?.whatsAppNumber && (
          <a
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=${contact?.whatsAppNumber}&text=Hello!%20Can%20you%20please%20tell%20me%20more%20about%20your%20services?`}
          >
            <FlexBox alignItems="center" mb=".8rem">
              <div className="product__contact-icon">
                <Icon size="1.5rem">call 1</Icon>
              </div>
              <Typography ml="1rem">{contact?.whatsAppNumber}</Typography>
              <Image
                src="/whatsapp.png"
                alt="Whatsapp"
                height="80%"
                ml="1.5rem"
              />
            </FlexBox>
          </a>
        )}
        {contact?.email && (
          <FlexBox alignItems="center" mb=".8rem">
            <div className="product__contact-icon">
              <Icon size="1.5rem">sms 1</Icon>
            </div>
            <Typography ml="1rem">{contact?.email}</Typography>
          </FlexBox>
        )}
        {contact?.address && (
          <FlexBox alignItems="center" mb=".8rem">
            <div className="product__contact-icon product__contact-icon-location">
              <Icon size="1.8rem">location 1</Icon>
            </div>
            <Paragraph ml="1.2rem" style={{ overflowWrap: 'anywhere' }}>
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
          <Icon mr="0.5rem">plus-circle</Icon>
          Get A Quote
        </Button>
      </Card>
      {contact?.maps && (
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
      )}
    </Fragment>
  );
};

export default Contacts;
