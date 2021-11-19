import { gql } from 'graphql-request';
import getYoutubeId from 'helpers/getYoutubeId';
import Client from '../../config/GraphQLRequest';

const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: String!) {
    getPopulatedProductBySlug(slug: $id) {
      productData {
        product {
          productName
          productCode
          price
          featured
          images
          videos
          banglaVersionLink
          stockStatus {
            title
          }
          keyPoints {
            title
            content
            images
          }
          features
          specification
          questions {
            title
            question
          }
          tags
          contactPerson {
            companyLogo
            name
            whatsAppNumber
            email
            address
            maps
          }
          seoTitle: SeoTitle
          description: title
          keywords
          relatedClients {
            title: clientName
            imgUrl: logo
          }
        }
        reviewCount
        ratingAverage
      }
      populatedRelatedProducts {
        name: productName
        image: featured
        slug
      }
      populatedReviews {
        id
        title
        name
        rating
        createdAt
        reviewText
        reviewMedia {
          images
          videos
        }
      }
    }
  }
`;

const useProductById = async (pid) => {
  const data = await Client.request(GET_PRODUCT_BY_ID, { id: pid });
  const productById = data.getPopulatedProductBySlug.productData;
  const product = {
    intro: {
      productName: productById.product.productName,
      price: productById.product.price,
      review: productById.reviewCount,
      rating: productById.ratingAverage,
      productCode: productById.product.productCode,
      stockStatus: productById.product.stockStatus?.title,
      featuredImage: productById.product.featured,
      images: productById.product.images,
      banglaVersionLink: productById.product.banglaVersionLink,
      videos: productById.product.videos.map((video) => {
        const id = getYoutubeId(video);
        return `https://img.youtube.com/vi/${id}/sddefault.jpg`;
      }),
    },
    seo: {
      title: productById.product.seoTitle,
      description: productById.product.description,
      keywords: productById.product.keywords,
    },
    clients: productById.product.relatedClients,
    keyPoints: productById.product.keyPoints,
    features: productById.product.features,
    specifications: productById.product.specification,
    questions: productById.product.questions,
    tags: productById.product.tags,
    reviews: data.getPopulatedProductBySlug.populatedReviews,
    relatedProducts: data.getPopulatedProductBySlug.populatedRelatedProducts,
    contact: productById.product.contactPerson,
  };
  return product;
};

export default useProductById;
