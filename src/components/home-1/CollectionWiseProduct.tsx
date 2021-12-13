import Box from '@component/Box';
import Grid from '@component/grid/Grid';
import useCollectionWiseProduct from '@hook/Home/useCollectionWiseProduct';
import React, { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
// import Carousel from '../carousel/Carousel';
import CategorySectionCreator from '../CategorySectionCreator';
import ProductCard1 from '../product-cards/ProductCard1';

const CollectionWiseProduct: React.FC = () => {
  const [collections, setCollections] = useState([]);

  // const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();

  // useEffect(() => {
  //   if (width < 500) setVisibleSlides(1);
  //   else if (width < 650) setVisibleSlides(2);
  //   else if (width < 950) setVisibleSlides(3);
  //   else setVisibleSlides(4);
  // }, [width]);

  useEffect(() => {
    useCollectionWiseProduct().then((data) => setCollections(data));
  }, []);

  return (
    <Box>
      {collections &&
        collections?.map((collection, idx) => {
          const hasProduct = collection?.products?.length > 0;
          if (hasProduct) {
            return (
              <CategorySectionCreator
                key={collection.name + idx}
                iconName="light"
                title={collection.name}
                seeMoreLink={`/product/collection/${collection.slug}`}
              >
                <Box mt="-1rem" mb="-1rem">
                  <Grid
                    container
                    spacing={width < 1600 ? (width < 600 ? 2 : 5) : 15}
                  >
                    {collection?.products
                      ?.slice(0, 4)
                      .map(({ product, reviewCount, ratingAverage }) => (
                        <Grid
                          key={product.id}
                          item
                          md={width > 1000 ? 3 : 6}
                          xs={6}
                        >
                          <Box py="0.25rem">
                            <ProductCard1
                              id={product?.id}
                              imgUrl={product?.featured}
                              title={product?.productName}
                              rating={ratingAverage}
                              noOfRating={reviewCount}
                              categoryName={product?.populatedCategory?.name}
                              categoryIcon={product?.populatedCategory?.icon}
                              price={250}
                              off={product.discount}
                              key={product.id}
                            />
                          </Box>
                        </Grid>
                      ))}
                  </Grid>
                </Box>
              </CategorySectionCreator>
            );
          } else {
            <span>&nbsp;</span>;
          }
        })}
    </Box>
  );
};

export default CollectionWiseProduct;
