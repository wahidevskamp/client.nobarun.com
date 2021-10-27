import React from 'react';
import ProductCard12 from '@component/product-cards/ProductCard12';

const SpecialFeatures = () => {
  const children = `<ol><li>Stainless steel body<br></li><li>Different Size Blade Available</li><li>All Parts Available</li><li>1 year Standard Service Warranty</li><li>Verities machine withe</li></ol>`;
  return (
    <ProductCard12 title="Product Special Features">
      <div
        className="product__features"
        dangerouslySetInnerHTML={{ __html: children }}
      ></div>
    </ProductCard12>
  );
};

export default SpecialFeatures;
