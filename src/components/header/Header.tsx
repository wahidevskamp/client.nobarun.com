import Box from '@component/Box';
import IconButton from '@component/buttons/IconButton';
import Image from '@component/Image';
import { useAppContext } from '@context/app/AppContext';
import Link from 'next/link';
import React, { useState } from 'react';
import Categories from '../categories/Categories';
import Menus from '../categories/Menu';
import Container from '../Container';
import FlexBox from '../FlexBox';
import Icon from '../icon/Icon';
import SearchBox from '../search-box/SearchBox';
import { Span, Tiny } from '../Typography';
import StyledHeader from './HeaderStyle';

type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ isFixed, className }) => {
  const [open, setOpen] = useState(false);
  const toggleSidenav = () => setOpen(!open);
  const { state } = useAppContext();
  const { cartList } = state.cart;

  const cartHandle = (
    <FlexBox ml="20px" alignItems="flex-start">
      <IconButton bg="gray.200" p="12px">
        <Icon size="20px">bag</Icon>
      </IconButton>

      {!!cartList.length && (
        <FlexBox
          borderRadius="300px"
          bg="error.main"
          px="5px"
          py="2px"
          alignItems="center"
          justifyContent="center"
          ml="-1rem"
          mt="-9px"
        >
          <Tiny color="white" fontWeight="600">
            {cartList.length}
          </Tiny>
        </FlexBox>
      )}
    </FlexBox>
  );

  return (
    <StyledHeader className={className}>
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

          {isFixed && (
            <FlexBox className="category-holder">
              <Categories>
                <FlexBox color="text.hint" alignItems="center" ml="1rem">
                  <Icon>categories</Icon>
                  <Icon>arrow-down-filled</Icon>
                </FlexBox>
              </Categories>
              {/* <Menus>
                <FlexBox color="text.hint" alignItems="center" ml="1rem">
                  <Icon>categories</Icon>
                  <Icon>arrow-down-filled</Icon>
                </FlexBox>
              </Menus> */}
            </FlexBox>
          )}
        </FlexBox>

        <FlexBox justifyContent="center" flex="1 1 0">
          <SearchBox />
        </FlexBox>

        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=+8801711998626&text=Hello!%20Can%20you%20please%20tell%20me%20more%20about%20your%20services?"
        >
          <FlexBox
            alignItems="center"
            border="2px solid #188BCC"
            borderRadius="1.2rem"
            // px="1rem"
            // py=".5rem"
          >
            <Box
              backgroundColor="#188BCC"
              px="1rem"
              py=".5rem"
              borderTopLeftRadius="1rem"
              borderBottomLeftRadius="1rem"
              color="#fff"
            >
              <Icon className="close" color="inherit" variant="small">
                whatsapp
              </Icon>
            </Box>
            <Span px="1rem">01711 998626</Span>
          </FlexBox>
        </a>
      </Container>
    </StyledHeader>
  );
};

export default Header;
