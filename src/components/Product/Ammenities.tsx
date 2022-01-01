import React from 'react';
import FlexBox from '@component/FlexBox';
import ProductCard12 from '@component/product-cards/ProductCard12';
import Typography from '@component/Typography';

const Ammenities = ({ contact }) => {
  return (
    <ProductCard12 title="Office Amenities">
      <ul>
        {contact.amenities.map((amenity) => (
          <li className="mb-10">
            <FlexBox alignItems="center">
              <img
                src={amenity.image}
                alt={amenity.title}
                style={{ height: '4rem', width: '4rem' }}
              />
              <Typography letterSpacing="1px" ml="1.5rem" fontSize="22px">
                {amenity.title}
              </Typography>
            </FlexBox>
          </li>
        ))}
      </ul>
    </ProductCard12>
  );
};

export default Ammenities;
