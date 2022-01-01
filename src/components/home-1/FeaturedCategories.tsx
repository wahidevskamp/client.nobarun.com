import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import HoverBox from '@component/HoverBox';
import { H4 } from '@component/Typography';
import useFeaturedCategories from '@hook/Home/useFeaturedCategories';
import useWindowSize from '@hook/useWindowSize';
import Link from 'next/link';
import React from 'react';
import Box from '../Box';
import CategorySectionHeader from '../CategorySectionHeader';
import Container from '../Container';
import Grid from '../grid/Grid';

const Categories: React.FC = () => {
  const width = useWindowSize();
  const [categories, setCategories] = React.useState<any[]>([]);
  React.useEffect(() => {
    useFeaturedCategories().then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <Box mt="5rem" mb="5rem">
      <Container style={width < 600 ? { margin: '0rem' } : {}}>
        <Box>
          <CategorySectionHeader iconName="Group" title="Featured Categories" />
          <Card p="1rem" mt="4rem" bg="transparent" boxShadow="none">
            <Grid container spacing={4}>
              {categories.map((item) => (
                <Grid
                  item
                  xl={3}
                  lg={3}
                  md={4}
                  sm={6}
                  xs={6}
                  // xs={12}
                  key={item.title}
                  className="featuredCategories"
                >
                  <Link href={item.productUrl}>
                    <a>
                      <FlexBox
                        alignItems="center"
                        flexDirection="column"
                        justifyContent="center"
                      >
                        <HoverBox
                          borderRadius={5}
                          mb="0.5rem"
                          className="featuredCategories__image"
                        >
                          <img src={item.imgUrl} />
                        </HoverBox>
                        <H4
                          fontSize="18px"
                          fontWeight="600"
                          className="featuredCategories__title"
                        >
                          {item.title}
                        </H4>
                      </FlexBox>
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

export default Categories;
