import React from 'react';
import ProductCard12 from '@component/product-cards/ProductCard12';

interface FeaturesProps {
  features: string;
}
const SpecialFeatures: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <ProductCard12 title="Product Special Features">
      {
        <div
          className="product__features"
          dangerouslySetInnerHTML={{ __html: features }}
        ></div>
      }
    </ProductCard12>
  );
};

export default SpecialFeatures;
