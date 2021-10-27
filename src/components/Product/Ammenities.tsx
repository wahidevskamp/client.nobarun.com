import React from 'react';
import FlexBox from '@component/FlexBox';
import Icon from '@component/icon/Icon';
import ProductCard12 from '@component/product-cards/ProductCard12';
import Typography from '@component/Typography';

const Ammenities = () => {
  return (
    <ProductCard12 title="Office Ammenities">
      <ul>
        <li className="mb-10">
          <FlexBox alignItems="center">
            <Icon size="2rem">
              icons8-muslim-muslim-praying-prayer-islam-faith-mindful-64
            </Icon>
            <Typography letterSpacing="1px" ml="1rem">
              Place For Namaz
            </Typography>
          </FlexBox>
        </li>
        <li className="mb-10">
          <FlexBox alignItems="center">
            <Icon size="2rem">icons8-card-payment-48</Icon>
            <Typography letterSpacing="1px" ml="1rem">
              Accepts Card Payment
            </Typography>
          </FlexBox>
        </li>
        <li className="mb-10">
          <FlexBox alignItems="center">
            <Icon size="2rem">icons8-motorcycle-48</Icon>
            <Typography letterSpacing="1px" ml="1rem">
              Bike Parking Facility
            </Typography>
          </FlexBox>
        </li>
        <li className="mb-10">
          <FlexBox alignItems="center">
            <Icon size="2rem">parking 2</Icon>
            <Typography letterSpacing="1px" ml="1rem">
              Car Street Parking
            </Typography>
          </FlexBox>
        </li>
        <li className="mb-10">
          <FlexBox alignItems="center">
            <Icon size="2rem">icons8-elevator-48</Icon>
            <Typography letterSpacing="1px" ml="1rem">
              Lift / Elevetor
            </Typography>
          </FlexBox>
        </li>
        <li className="mb-10">
          <FlexBox alignItems="center">
            <Icon size="2rem">smoking</Icon>
            <Typography letterSpacing="1px" ml="1rem">
              Smoking Zone
            </Typography>
          </FlexBox>
        </li>
        <li className="mb-10">
          <FlexBox alignItems="center">
            <Icon size="2rem">icons8-wi-fi-connected-48</Icon>
            <Typography letterSpacing="1px" ml="1rem">
              Wireless Internet
            </Typography>
          </FlexBox>
        </li>
      </ul>
    </ProductCard12>
  );
};

export default Ammenities;
