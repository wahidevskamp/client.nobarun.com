import { gql } from 'graphql-request';
import Client from '../../config/GraphQLRequest';

const GET_CATEGORY_WISE_PRODUCT = gql`
  query getPopulatedProductByCategorySlug($slug: String!) {
    getCategories
    getAllTheStockStatus {
      title
      isPublished
    }
    getPopulatedProductByCategorySlug(CategorySulg: $slug) {
      productData {
        product {
          id
          slug
          productName
          discount
          featured
          stockStatus {
            title
          }
          populatedCategory {
            name
            icon
          }
        }
        reviewCount
        ratingAverage
      }
    }
  }
`;

const useProductsByCategory = async (slug) => {
  const data = await Client.request(GET_CATEGORY_WISE_PRODUCT, { slug });
  // const products = data.getPopulatedProductByCategorySlug;
  return {
    categories: JSON.parse(data?.getCategories),
    products: data?.getPopulatedProductByCategorySlug,
    stockStatus: data?.getAllTheStockStatus,
  };
};

export default useProductsByCategory;
