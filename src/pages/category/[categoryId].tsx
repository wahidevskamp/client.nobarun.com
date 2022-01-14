import Box from '@component/Box';
import IconButton from '@component/buttons/IconButton';
import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import Grid from '@component/grid/Grid';
import Hidden from '@component/hidden/Hidden';
import Icon from '@component/icon/Icon';
import OtherLayout from '@component/layout/OtherLayout';
import CategoryFilterCard from '@component/products/CategoryFilterCard';
import ProductCard1List from '@component/products/ProductCardList';
import Sidenav from '@component/sidenav/Sidenav';
import { H5, Paragraph } from '@component/Typography';
import useProductsByCategory from '@hook/Product/useProductsByCategory';
import useProductCount from '@hook/useNoOfProduct';
import useWindowSize from '@hook/useWindowSize';
import { GetServerSideProps } from 'next';
import React, { useState } from 'react';

const CategoryPage = ({
  slug,
  categoryName,
  stockStatus,
  products,
  categories,
}) => {
  const [filters, setFilters] = useState([]);
  const width = useWindowSize();
  const isTablet = width < 1025;
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
                <IconButton size="small">
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
          <CategoryFilterCard
            slug={slug}
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

CategoryPage.layout = OtherLayout;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const categoryId = context.params.categoryId;
  try {
    const data = await useProductsByCategory(categoryId);
    const count = await useProductCount();
    if (data)
      return {
        props: {
          slug: categoryId,
          categoryName: data?.categoryName,
          products: data?.products,
          categories: data?.categories,
          stockStatus: data?.stockStatus,
          count,
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

export default CategoryPage;
