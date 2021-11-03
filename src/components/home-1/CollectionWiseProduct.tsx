import Box from '@component/Box';
import useCollectionWiseProduct from '@hook/Home/useCollectionWiseProduct';
import React, { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import Carousel from '../carousel/Carousel';
import CategorySectionCreator from '../CategorySectionCreator';
import ProductCard1 from '../product-cards/ProductCard1';

const CollectionWiseProduct: React.FC = () => {
  const [collections, setCollections] = useState([]);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);

  useEffect(() => {
    useCollectionWiseProduct().then((data) => setCollections(data));
  }, []);

  console.log(collections);
  return (
    <Box>
      {collections &&
        collections?.map((collection, idx) => (
          <CategorySectionCreator
            key={collection.name + idx}
            iconName="light"
            title={collection.name}
            seeMoreLink="#"
          >
            <Box mt="-0.25rem" mb="-0.25rem">
              <Carousel
                totalSlides={10}
                visibleSlides={visibleSlides}
                leftButtonStyle={{ top: '225px' }}
                rightButtonStyle={{ top: '225px' }}
              >
                {collection?.products?.map(
                  ({ product, reviewCount, ratingAverage }) => (
                    <Box py="0.25rem" key={product.id}>
                      <ProductCard1
                        id={product.id}
                        imgUrl={product.featured}
                        title={product.productName}
                        rating={ratingAverage}
                        noOfRating={reviewCount}
                        categoryName={product?.populatedCategory?.name}
                        categoryIcon={product?.populatedCategory?.icon}
                        price={250}
                        off={product.discount}
                        key={product.id}
                      />
                    </Box>
                  ),
                )}
              </Carousel>
            </Box>
          </CategorySectionCreator>
        ))}
    </Box>
  );
};

export default CollectionWiseProduct;
