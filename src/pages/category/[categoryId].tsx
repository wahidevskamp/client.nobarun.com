import Box from '@component/Box';
import IconButton from '@component/buttons/IconButton';
import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import Grid from '@component/grid/Grid';
import Hidden from '@component/hidden/Hidden';
import Icon from '@component/icon/Icon';
import NavbarLayout from '@component/layout/NavbarLayout';
import CategoryFilterCard from '@component/products/CategoryFilterCard';
import ProductCard1List from '@component/products/ProductCard1List';
import ProductCard9List from '@component/products/ProductCard9List';
import Select from '@component/Select';
import Sidenav from '@component/sidenav/Sidenav';
import { H5, Paragraph } from '@component/Typography';
import useProductsByCategory from '@hook/Product/useProductsByCategory';
import useWindowSize from '@hook/useWindowSize';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

const ProductSearchResult = ({
  slug,
  categoryName,
  stockStatus,
  products,
  categories,
}) => {
  const [view, setView] = useState('grid');
  const [filters, setFilters] = useState([]);
  const width = useWindowSize();
  const isTablet = width < 1025;

  const toggleView = useCallback(
    (v) => () => {
      setView(v);
    },
    [],
  );
  return (
    <Box pt="20px" mb="5rem">
      <FlexBox
        p="1.25rem"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        mb="55px"
        elevation={5}
        as={Card}
      >
        <div>
          <H5>{categoryName}</H5>
          <Paragraph color="text.muted">
            {products.length} results found
          </Paragraph>
        </div>
        <FlexBox alignItems="center" flexWrap="wrap">
          {isTablet && (
            <Sidenav
              position="left"
              scroll={true}
              handle={
                <IconButton size="small" onClick={toggleView}>
                  <Icon>options</Icon>
                </IconButton>
              }
            >
              <CategoryFilterCard
                slug={slug}
                // categoryName={categoryName}
                filters={filters}
                setFilters={setFilters}
                categories={categories}
                stockStatus={stockStatus}
              />
            </Sidenav>
          )}
        </FlexBox>
      </FlexBox>

      <Grid container spacing={6}>
        <Hidden as={Grid} item lg={3} md={12} xs={12} down={1024}>
          {/* <ProductFilterCard /> */}
          <CategoryFilterCard
            slug={slug}
            // categoryName={categoryName}
            filters={filters}
            setFilters={setFilters}
            categories={categories}
            stockStatus={stockStatus}
          />
        </Hidden>

        <Grid item lg={9} md={12} xs={12}>
          <ProductCard1List products={products} filters={filters} />
        </Grid>
      </Grid>
    </Box>
  );
};

ProductSearchResult.layout = NavbarLayout;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const categoryId = context.params.categoryId;
  try {
    const data = await useProductsByCategory(categoryId);
    if (data)
      return {
        props: {
          slug: categoryId,
          categoryName: data?.categoryName,
          products: data?.products,
          categories: data?.categories,
          stockStatus: data?.stockStatus,
          isError: false,
        },
      };
    else {
      return {
        props: {
          products: {},
          isError: false,
        },
      };
    }
  } catch (err) {
    return {
      props: {
        product: err,
        isError: true,
      },
    };
  }
};

export default ProductSearchResult;
