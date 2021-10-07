import Box from '@component/Box';
import Icon from '@component/icon/Icon';
import NavLink from '@component/nav-link/NavLink';
import React, { useEffect, useState } from 'react';
import Container from '../Container';
import FlexBox from '../FlexBox';
import { SemiSpan } from '../Typography';
import StyledTopbar from './Topbar.style';

const Topbar: React.FC = () => {
  const [currency, setCurrency] = useState(currencyList[0]);
  const [language, setLanguage] = useState(languageList[0]);

  const handleCurrencyClick = (curr) => () => {
    setCurrency(curr);
  };

  const handleLanguageClick = (lang) => () => {
    setLanguage(lang);
  };

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
          {/* <NavLink className="link" href="/faq">
            Theme FAQ"s
          </NavLink>
          <Menu
            direction="right"
            handler={
              <FlexBox
                className="dropdown-handler"
                alignItems="center"
                height="40px"
                mr="1.25rem"
              >
                <Image src={language.imgUrl} alt={language.title} />
                <Small fontWeight="600">{language.title}</Small>
                <Icon size="1rem">chevron-down</Icon>
              </FlexBox>
            }
          >
            {languageList.map((item) => (
              <MenuItem key={item.title} onClick={handleLanguageClick(item)}>
                <Image
                  src={item.imgUrl}
                  borderRadius="2px"
                  mr="0.5rem"
                  alt={item.title}
                />
                <Small fontWeight="600">{item.title}</Small>
              </MenuItem>
            ))}
          </Menu>
          <Menu
            direction="right"
            handler={
              <FlexBox
                className="dropdown-handler"
                alignItems="center"
                height="40px"
              >
                <Image src={currency.imgUrl} alt={currency.title} />
                <Small fontWeight="600">{currency.title}</Small>
                <Icon size="1rem">chevron-down</Icon>
              </FlexBox>
            }
          >
            {currencyList.map((item) => (
              <MenuItem key={item.title} onClick={handleCurrencyClick(item)}>
                <Image
                  src={item.imgUrl}
                  borderRadius="2px"
                  mr="0.5rem"
                  alt={item.title}
                />
                <Small fontWeight="600">{item.title}</Small>
              </MenuItem>
            ))}
          </Menu> */}
        </FlexBox>
      </Container>
    </StyledTopbar>
  );
};

const languageList = [
  {
    title: 'EN',
    imgUrl: '/assets/images/flags/usa.png',
  },
  {
    title: 'BN',
    imgUrl: '/assets/images/flags/bd.png',
  },
  {
    title: 'HN',
    imgUrl: '/assets/images/flags/in.png',
  },
];

const currencyList = [
  {
    title: 'USD',
    imgUrl: '/assets/images/flags/usa.png',
  },
  {
    title: 'EUR',
    imgUrl: '/assets/images/flags/uk.png',
  },
  {
    title: 'BDT',
    imgUrl: '/assets/images/flags/bd.png',
  },
  {
    title: 'INR',
    imgUrl: '/assets/images/flags/in.png',
  },
];

export default Topbar;
