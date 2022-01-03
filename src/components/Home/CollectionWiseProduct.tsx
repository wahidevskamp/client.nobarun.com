import Box from '@component/Box';
import Carousel from '@component/carousel/Carousel';
import useCollectionWiseProduct from '@hook/Home/useCollectionWiseProduct';
import React, { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import CategorySectionCreator from '../CategorySectionCreator';
import ProductCard1 from '../product-cards/ProductCard1';

const CollectionWiseProduct: React.FC = () => {
  const [collections, setCollections] = useState([]);

  let slice: number;
  const width = useWindowSize();
  if (width > 1200) {
    slice = 4;
  } else if (width < 1200 && width > 800) {
    slice = 3;
  } else if (width < 800) {
    slice = 2;
  }

  useEffect(() => {
    useCollectionWiseProduct().then((data) => setCollections(data));
  }, []);

  return (
    <Box mb="8rem">
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
                <Box>
                  <Carousel
                    totalSlides={collection?.products?.length}
                    visibleSlides={slice}
                    interval={2000}
                    autoPlay={collection?.products?.length > slice}
                    infinite={collection?.products?.length > slice}
                    arrowButtonClass="collection-arrow"
                    leftButtonClass="collection-arrow--left"
                    rightButtonClass="collection-arrow--right"
                    showArrowOnHover={slice === 2}
                  >
                    {collection?.products.map(
                      ({ product, reviewCount, ratingAverage }) => (
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
                      ),
                    )}
                  </Carousel>
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
