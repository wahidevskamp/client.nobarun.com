import { gql } from 'graphql-request';
import getYoutubeId from 'helpers/getYoutubeId';
import Client from '../../config/GraphQLRequest';

const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: String!) {
    getPopulatedProductById(productId: $id) {
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
        }
        reviewCount
        ratingAverage
      }
      populatedRelatedProducts {
        name: productName
        image: featured
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
  if (pid) {
    const data = await Client.request(GET_PRODUCT_BY_ID, { id: pid });
    const productById = data.getPopulatedProductById.productData;
    // console.log(
    //   'productById****************************************************************',
    //   productById,
    // );

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
      keyPoints: productById.product.keyPoints,
      features: productById.product.features,
      specifications: productById.product.specification,
      questions: productById.product.questions,
      tags: productById.product.tags,
      reviews: data.getPopulatedProductById.populatedReviews,
      relatedProducts: data.getPopulatedProductById.populatedRelatedProducts,
      contact: productById.product.contactPerson,
    };
    return product;
  } else {
    return {};
  }
};

export default useProductById;
