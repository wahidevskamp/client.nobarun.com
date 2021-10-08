import { gql } from 'graphql-request';
import Client from '../../config/GraphQLRequest';

const GET_ALL_CATEGORY = gql`
  query {
    getAllPopulatedCollection {
      products {
        id
        productName
        stockStatus
      }
    }
  }
`;

const useAllProductCategories = async () => {
  const data = await Client.request(GET_ALL_CATEGORY);

  return data;
};

export default useAllProductCategories;
