import React from 'react';
import ProductCard12 from '@component/product-cards/ProductCard12';

const Specifications = () => {
  const children = `<table><tbody><tr><td><div>Alfreds Futterkiste</div></td><td><div>Maria Anders</div></td></tr><tr><td><div>Centro comercial Moctezuma</div></td><td><div>Francisco</div></td></tr><tr><td><div>Ernst Handel</div></td><td><div>Roland Mendel</div></td></tr><tr><td><div>Island Trading</div></td><td><div>Helen Bennett</div></td></tr><tr><td><div>Laughing Bacchus </div></td><td><div>Yoshi Tannamuri</div></td></tr><tr><td><div>Magazzini Alimentari Riuniti</div></td><td><div>Giovanni Rovelli</div></td></tr></tbody></table>
  `;
  return (
    <ProductCard12 title="Product Specification">
      <div
        className="product__specification"
        dangerouslySetInnerHTML={{ __html: children }}
      ></div>
    </ProductCard12>
  );
};

export default Specifications;
