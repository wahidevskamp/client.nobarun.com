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
import Router from 'next/router';

export interface SearchBoxProps {
  isFixed: boolean;
}

const SearchBox: React.FC<SearchBoxProps> = ({ isFixed }) => {
  const [resultList, setResultList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [keyword, setKeyword] = useState('');

  const search = debounce(async (e) => {
    const value = e.target?.value;
    console.log(value);
    setValue(e.target?.value);
    if (!value) setResultList([]);
    else {
      setLoading(true);
      const results = await useProductSearch(value);
      setResultList(results);
      setLoading(false);
    }
  }, 200);

  const handleSearch = useCallback((event) => {
    setKeyword(event.target.value);
    event.persist();
    search(event);
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
          value={keyword}
          onChange={handleSearch}
        />
        <Button variant="contained" className="search-btn searchbox__btn">
          Search
        </Button>
      </StyledSearchBox>
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
            <MenuItem
              key={item.title}
              onClick={() => {
                setValue('');
                setKeyword('');
                setResultList([]);
                Router.push(`/${item.slug}`);
              }}
            >
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
                    <Rating value={item.ratingAvg} color="warn" size="small" />
                    <Span fontSize="14px" ml="5px">
                      ({item.reviewCount})
                    </Span>
                  </FlexBox>
                </Box>
              </FlexBox>
            </MenuItem>
          ))
        ) : (
          keyword !== '' && (
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
      {/* )} */}
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
