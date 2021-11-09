import Button from '@component/buttons/Button';
import Card from '@component/Card';
import { Span } from '@component/Typography';
import { debounce } from 'lodash';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import Box from '../Box';
import Icon from '../icon/Icon';
import MenuItem from '../MenuItem';
import TextField from '../text-field/TextField';
import StyledSearchBox from './SearchBoxStyle';

export interface SearchBoxProps {
  isFixed: boolean;
}

const SearchBox: React.FC<SearchBoxProps> = ({ isFixed }) => {
  // const [category, setCategory] = useState('All Categories');
  const [resultList, setResultList] = useState([]);
  // console.log(category);
  // const handleCategoryChange = (cat) => () => {
  //   setCategory(cat);
  // };

  const search = debounce((e) => {
    const value = e.target?.value;

    if (!value) setResultList([]);
    else setResultList(dummySearchResult);
  }, 200);

  const hanldeSearch = useCallback((event) => {
    event.persist();
    search(event);
  }, []);

  const handleDocumentClick = () => {
    setResultList([]);
  };

  useEffect(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <Box
      position="relative"
      flex="1 1 0"
      maxWidth={isFixed ? '600px' : '670px'}
      mx="auto"
    >
      <StyledSearchBox>
        <Icon className="search-icon" size="18px">
          search
        </Icon>
        <TextField
          className="search-field"
          placeholder="Search and hit enter..."
          fullwidth
          onChange={hanldeSearch}
        />
        <Button variant="contained" className="search-btn">
          Search
        </Button>
        {/* <Menu
          className="category-dropdown"
          direction="right"
          handler={
            <FlexBox className="dropdown-handler" alignItems="center">
              <span>{category}</span>
              <Icon variant="small">chevron-down</Icon>
            </FlexBox>
          }
        >
          {categories.map((item) => (
            <MenuItem key={item} onClick={handleCategoryChange(item)}>
              {item}
            </MenuItem>
          ))}
        </Menu> */}
        {/* <Box className="menu-button" ml="14px" cursor="pointer">
          <Icon color="primary">menu</Icon>
        </Box> */}
      </StyledSearchBox>

      {!!resultList.length && (
        <Card
          position="absolute"
          top="100%"
          py="0.5rem"
          width="100%"
          boxShadow="large"
          zIndex={99}
        >
          {resultList.map((item) => (
            <Link href={`/product/search/${item}`} key={item}>
              <MenuItem key={item}>
                <Span fontSize="14px">{item}</Span>
              </MenuItem>
            </Link>
          ))}
        </Card>
      )}
    </Box>
  );
};

const dummySearchResult = [
  'Macbook Air 13',
  'Ksus K555LA',
  'Acer Aspire X453',
  'iPad Mini 3',
];

export default SearchBox;
