import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { debounce } from 'lodash';
import Button from '@component/buttons/Button';
import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import Image from '@component/Image';
import Rating from '@component/rating/Rating';
import Spinner from '@component/Spinner';
import { H6, Span } from '@component/Typography';
import useProductSearch from '@hook/useProductSearch';
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
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  // console.log(category);
  // const handleCategoryChange = (cat) => () => {
  //   setCategory(cat);
  // };

  const search = debounce(async (e) => {
    const value = e.target?.value;
    if (!value) setResultList([]);
    else {
      setValue(e.target?.value);
      setLoading(true);
      const results = await useProductSearch(value);
      setResultList(results);
      setLoading(false);
    }
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
    <Box position="relative" flex="1 1 0" className="searchbox">
      <StyledSearchBox>
        <Icon className="search-icon" size="18px">
          search
        </Icon>
        <TextField
          className="search-field"
          placeholder={`Find Our All 155 Products`}
          fullwidth
          onChange={hanldeSearch}
        />
        <Button variant="contained" className="search-btn searchbox__btn">
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

      {/* {resultList.length > 0 ? ( */}
      <Card
        position="absolute"
        top="100%"
        py="0.5rem"
        width="100%"
        boxShadow="large"
        zIndex={99}
        maxHeight="22rem"
        overflow="auto"
      >
        {loading ? (
          <FlexBox
            justifyContent="center"
            alignItems="center"
            minHeight="22rem"
          >
            <Spinner />
          </FlexBox>
        ) : resultList.length > 0 ? (
          resultList?.map((item) => (
            <Link href={`/${item.slug}`} key={item}>
              <MenuItem key={item.title}>
                <FlexBox alignItems="center">
                  <Image
                    src={item.featuredImage}
                    height="60"
                    width="60"
                    borderRadius="10px"
                  />
                  <Box ml="20px">
                    <Span fontSize="14px">{item.title}</Span>
                    <FlexBox alignItems="center">
                      <Rating
                        value={item.ratingAvg}
                        color="warn"
                        size="small"
                      />
                      <Span fontSize="14px" ml="5px">
                        ({item.reviewCount})
                      </Span>
                    </FlexBox>
                  </Box>
                </FlexBox>
              </MenuItem>
            </Link>
          ))
        ) : (
          value && (
            <FlexBox
              justifyContent="center"
              alignItems="center"
              minHeight="22rem"
            >
              <H6>Sorry No Product Found</H6>
            </FlexBox>
          )
        )}
      </Card>
      {/* ): } */}
    </Box>
  );
};

const dummySearchResult = [
  'Macbook Air 13',
  'Ksus K555LA',
  'Acer Aspire X453',
  'iPad Mini 3',
  'Macbook Air 13',
  'Ksus K555LA',
  'Acer Aspire X453',
  'iPad Mini 3',
  'Macbook Air 13',
  'Ksus K555LA',
  'Acer Aspire X453',
  'iPad Mini 3',
];

export default SearchBox;
