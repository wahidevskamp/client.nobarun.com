import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { StyledCarouselCard1 } from './CarouselCardStyle';

export interface CarouselCard1Props {
  link: string;
}

const CarouselCard1: React.FC<CarouselCard1Props> = ({ link }) => {
  return (
    <StyledCarouselCard1>
      <div className="image-holder">
        <LazyLoadImage
          src={link}
          alt="Hero Image of Nobarun"
          effect="blur"
          height="578px"
          width="1290px"
          // width="1600"
        />
      </div>
    </StyledCarouselCard1>
  );
};

export default CarouselCard1;
