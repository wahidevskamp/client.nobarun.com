import Box from '@component/Box';
import Icon from '@component/icon/Icon';
import NavLink from '@component/nav-link/NavLink';
import React, { useEffect } from 'react';
import Container from '../Container';
import FlexBox from '../FlexBox';
import { SemiSpan } from '../Typography';
import StyledTopbar from './Topbar.style';

const Topbar: React.FC = () => {
  useEffect(() => {
    // get language from browser
    // console.log(navigator.language);
  }, []);

  return (
    <StyledTopbar>
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <FlexBox className="topbar-left">
          <div className="logo">
            <img src="/assets/images/logo.png" alt="logo" />
          </div>
          {/* <FlexBox alignItems="center">
            <Icon size="14px">phone-call</Icon>
            <span>+88012 3456 7894</span>
          </FlexBox>
          <FlexBox alignItems="center" ml="20px">
            <Icon size="14px">mail</Icon>
            <span>support@ui-lib.com</span>
          </FlexBox> */}
          <SemiSpan color="#fff" fontSize="12px">
            Due to unwanted cirmutenses our office will be closed on monday
          </SemiSpan>
        </FlexBox>
        <FlexBox className="topbar-right" alignItems="center">
          <a
            target="_blank"
            href="https://www.facebook.com/nobaruninternational"
          >
            <Box
              p=".5rem"
              borderRadius="50%"
              backgroundColor="#4a4d50"
              color="#fff"
              mr=".5rem"
            >
              <Icon size="14px">facebook</Icon>
            </Box>
          </a>
          <a target="_blank" href="https://twitter.com/nobarunbd">
            <Box
              p=".5rem"
              borderRadius="50%"
              backgroundColor="#4a4d50"
              color="#fff"
              mr=".5rem"
            >
              <Icon size="14px">twitter</Icon>
            </Box>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/nobaruninternational"
          >
            <Box
              p=".5rem"
              borderRadius="50%"
              backgroundColor="#4a4d50"
              color="#fff"
              mr=".5rem"
            >
              <Icon size="14px">instagram</Icon>
            </Box>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/nobaruninternational"
          >
            <Box
              p=".5rem"
              borderRadius="50%"
              backgroundColor="#4a4d50"
              color="#fff"
              mr=".5rem"
            >
              <Icon size="14px">youtube</Icon>
            </Box>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/nobaruninternational"
          >
            <Box
              p=".5rem"
              borderRadius="50%"
              backgroundColor="#4a4d50"
              color="#fff"
              mr=".5rem"
            >
              <Icon size="14px">google</Icon>
            </Box>
          </a>
          <NavLink
            className="link"
            href="mailto:nobarunbd@gmail.com"
            ml="2rem"
            mr="-1.5rem"
          >
            <FlexBox alignItems="center">
              <Icon size="14px" mr=".5rem">
                mail
              </Icon>
              nobarunbd@gmail.com
            </FlexBox>
          </NavLink>
        </FlexBox>
      </Container>
    </StyledTopbar>
  );
};

export default Topbar;
