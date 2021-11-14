import React from 'react';
// import Button from '../buttons/Button';
// import Typography from '../Typography';
import { StyledCarouselCard1 } from './CarouselCardStyle';

export interface CarouselCard1Props {
  link: string;
}

const CarouselCard1: React.FC<CarouselCard1Props> = ({ link }) => {
  return (
    <StyledCarouselCard1>
      <div className="image-holder">
        <img src={link} alt="Hero Image of Nobarun" />
      </div>
    </StyledCarouselCard1>
  );
};

export default CarouselCard1;
