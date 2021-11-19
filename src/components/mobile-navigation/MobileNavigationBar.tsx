import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import Icon from '../icon/Icon';
import StyledMobileNavigationBar from './MobileNavigationBar.style';

interface MobileNavigationBarProps {
  phone: string;
  setIsOpen: any;
}
const MobileNavigationBar: React.FC<MobileNavigationBarProps> = (props) => {
  const { phone, setIsOpen } = props;
  const width = useWindowSize();

  return (
    width <= 1025 && (
      <StyledMobileNavigationBar>
        <a
          className="whatsapp"
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=${phone}&text=Hello!%20Can%20you%20please%20tell%20me%20more%20about%20your%20services?`}
        >
          <Icon size="23px" className="icon">
            whatsapp
          </Icon>
          Whatsapp Chat
        </a>
        <a href={`callto://${phone}`} className="call">
          <Icon size="23px" className="icon">
            call-small
          </Icon>
          Phone Call
        </a>
        <a
          className="quote"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
        >
          <Icon size="23px" className="icon">
            quote
          </Icon>
          Get a Quote
        </a>
      </StyledMobileNavigationBar>
    )
  );
};

export default MobileNavigationBar;
