import { gql } from 'graphql-request';
import Client from '../../config/GraphQLRequest';

const GET_ALL_CATEGORY = gql`
  query GetCategoryTree {
    getCategories
  }
`;

const useFeaturedCategories = async () => {
  const data = await Client.request(GET_ALL_CATEGORY);

  const categories = JSON.parse(data?.getCategories).map((category) => ({
    id: category.id,
    title: category.name,
    imgUrl: category.image,
    productUrl: `/product/category/${category.slug}`,
  }));

  return categories;
};

export default useFeaturedCategories;
