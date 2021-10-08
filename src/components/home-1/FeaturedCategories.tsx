import Card from '@component/Card';
import useFeaturedCategories from '@hook/Home/useFeaturedCategories';
import Link from 'next/link';
import React from 'react';
import Box from '../Box';
import CategorySectionHeader from '../CategorySectionHeader';
import Container from '../Container';
import Grid from '../grid/Grid';
import ProductCard5 from '../product-cards/ProductCard5';

const Categories: React.FC = () => {
  const [categories, setCategories] = React.useState<any[]>([]);
  React.useEffect(() => {
    useFeaturedCategories().then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <Box mb="10rem">
      <Container>
        <Box>
          <CategorySectionHeader
            iconName="Group"
            title="Featured Categories"
            seeMoreLink="#"
          />
          <Card p="1rem">
            <Grid container spacing={4}>
              {categories.map((item) => (
                <Grid item sm={3} xs={6} key={item.title}>
                  <Link href={item.productUrl}>
                    <a>
                      <ProductCard5 {...item} />
                    </a>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

const brandList = [
  {
    imgUrl: '/assets/images/products/london-britches.png',
    title: 'London Britches',
    productUrl: '/product/e1',
  },
  {
    imgUrl: '/assets/images/products/jim and jiko.png',
    title: 'Jim & Jago',
    productUrl: '/product/e14',
  },
  {
    imgUrl: '/assets/images/products/jim and jiko.png',
    title: 'Jim & Jago',
    productUrl: '/product/e14',
  },
  {
    imgUrl: '/assets/images/products/jim and jiko.png',
    title: 'Jim & Jago',
    productUrl: '/product/e14',
  },
];

export default Categories;
