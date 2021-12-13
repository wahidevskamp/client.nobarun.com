import { gql } from 'graphql-request';
import Client from '../../config/GraphQLRequest';

const GET_CATEGORY_WISE_PRODUCT = gql`
  query getProductsByCollection($slug: String!) {
    getProductByCollectionName(slug: $slug) {
      collectionName
      products {
        data {
          id
          productName
          stockStatus
          featured
          slug
          stockStatus
          populatedCategory {
            name
            icon
          }
        }
        reviewCount
        ratingAvg
      }
    }
    getCategories
    getAllTheStockStatus {
      title
      isPublished
    }
  }
`;

const useProductsByCollection = async (slug) => {
  const data = await Client.request(GET_CATEGORY_WISE_PRODUCT, { slug });
  return {
    products: data.getProductByCollectionName,
    stocks: data.getAllTheStockStatus,
    categories: JSON.parse(data?.getCategories),
  };
};

export default useProductsByCollection;
