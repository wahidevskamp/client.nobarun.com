import { gql } from 'graphql-request';
import Client from '../../config/GraphQLRequest';

const GET_ALL_CATEGORY = gql`
  query GetCategoryTree {
    getCategories
  }
`;

const useAllProductCategories = async () => {
  const data = await Client.request(GET_ALL_CATEGORY);

  const categories = JSON.parse(data?.getCategories).map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
    image: category.image,
    slug: category.slug,
    children: category.children,
    isPublished: category.isPublished,
  }));

  return categories;
};

export default useAllProductCategories;
