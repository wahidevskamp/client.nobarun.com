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
import CollectionProductCard from '@component/Product/Collection/ProductCollectionCard';
import Select from '@component/Select';
import Sidenav from '@component/sidenav/Sidenav';
import { H5, Paragraph } from '@component/Typography';
import useProductsByCategory from '@hook/Product/useProductsByCategory';
import useProductsByCollection from '@hook/Product/useProductsByCollectionName';
import useWindowSize from '@hook/useWindowSize';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import CollectionFilterCard from '@component/Product/Collection/CollectionFilterCard';

const CollectionsPage = ({
  collectionName,
  products,
  stockStatus,
  categories,
}) => {
  const router = useRouter();
  const [view, setView] = useState('grid');
  const [filters, setFilters] = useState([]);
  const [slug, setSlug] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const width = useWindowSize();
  const isTablet = width < 1025;

  const toggleView = useCallback(
    (v) => () => {
      setView(v);
    },
    [],
  );

  console.log(selectedCategory);

  return (
    <Box pt="20px" mb="15rem">
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
          <H5>{collectionName}</H5>
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
              <CollectionFilterCard
                filters={filters}
                setFilters={setFilters}
                slug={selectedCategory}
                categories={categories}
                setSelectedCategory={setSelectedCategory}
                stockStatus={stockStatus}
              />
            </Sidenav>
          )}
        </FlexBox>
      </FlexBox>
      <Grid container spacing={6}>
        <Hidden as={Grid} item lg={3} xs={12} down={1024}>
          {/* <ProductFilterCard /> */}
          <CollectionFilterCard
            filters={filters}
            setFilters={setFilters}
            slug={selectedCategory}
            categories={categories}
            setSelectedCategory={setSelectedCategory}
            stockStatus={stockStatus}
          />
        </Hidden>

        <Grid item lg={9} xs={12}>
          {view === 'grid' ? (
            <CollectionProductCard
              selectedCategory={selectedCategory}
              products={products}
              filters={filters}
            />
          ) : (
            <ProductCard9List />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

CollectionsPage.layout = NavbarLayout;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const slug = context.params.collectionSlug;
  try {
    const data = await useProductsByCollection(slug);
    if (data)
      return {
        props: {
          collectionName: data.products.collectionName,
          products: data.products.products,
          stockStatus: data.stocks,
          categories: data.categories,
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

export default CollectionsPage;
