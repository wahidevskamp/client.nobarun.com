import React from 'react';
import ProductCard12 from '@component/product-cards/ProductCard12';
import Grid from '@component/grid/Grid';
import Typography from '@component/Typography';
import Image from '@component/Image';
import Link from 'next/link';

interface RelatedProductProps {
  products: any[];
}

const RelatedProducts: React.FC<RelatedProductProps> = ({ products }) => {
  return (
    <ProductCard12 title="Related Products">
      <ul>
        {products?.map((product, idx) => (
          <li key={product.image + idx}>
            <Link href={product.slug}>
              <a>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={6}
                >
                  <Grid item xs={3}>
                    <Image src={product.image} height="80px" width="80px" />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography className="mb-10 product__related-products__list">
                      {product.name}
                    </Typography>
                  </Grid>
                </Grid>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </ProductCard12>
  );
};

export default RelatedProducts;
