import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import Icon from '../icon/Icon';
import StyledMobileNavigationBar from './MobileNavigationBar.style';

const MobileNavigationBar: React.FC = () => {
  const width = useWindowSize();

  return (
    width <= 1025 && (
      <StyledMobileNavigationBar>
        <button className="whatsapp">
          <Icon size="23px" className="icon">
            whatsapp
          </Icon>
          Whatsapp Chat
        </button>
        <button className="call">
          <Icon size="23px" className="icon">
            call-small
          </Icon>
          Phone Call
        </button>
        <button className="quote">
          <Icon size="23px" className="icon">
            quote
          </Icon>
          Get a Quote
        </button>
      </StyledMobileNavigationBar>
    )
  );
};

export default MobileNavigationBar;
