import Box from '@component/Box';
import Image from '@component/Image';
import Sidenav from '@component/sidenav/Sidenav';
// import navbarNavigations from '@data/navbarNavigations';
import useWindowSize from '@hook/useWindowSize';
import Link from 'next/link';
import React from 'react';
// import Categories from '../categories/Categories';
import Container from '../Container';
import FlexBox from '../FlexBox';
import Icon from '../icon/Icon';
import SearchBox from '../search-box/SearchBox';
import StyledHeader from './HeaderStyle';
import Sidemenu from '@component/layout/Sidemenu';

type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ isFixed, className }) => {
  const width = useWindowSize();
  const isTablet = width < 900;

  return (
    <StyledHeader className={className}>
      {isTablet && (
        <Box bg="#fff">
          <FlexBox width="100%" alignItems="center" py="1em" px="1em">
            <FlexBox flex="1 1 0" pt=".5em" px="1em">
              <SearchBox isFixed={isFixed} />
            </FlexBox>

            {isTablet && (
              <Sidenav position="left" handle={<Icon mx="1rem">menu</Icon>}>
                <Sidemenu />
              </Sidenav>
            )}
          </FlexBox>
        </Box>
      )}
      {!isTablet && (
        <Container
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height="100%"
        >
          <FlexBox className="logo" alignItems="center" mr="1rem">
            <Link href="/">
              <a>
                <Image src="/assets/images/logo.png" alt="logo" />
              </a>
            </Link>
          </FlexBox>

          <FlexBox justifyContent="center" flex="1 1 0">
            <SearchBox isFixed={isFixed} />
          </FlexBox>
          {/* {!isTablet && <Whatsapp width={width} />} */}
        </Container>
      )}
    </StyledHeader>
  );
};

export default Header;
