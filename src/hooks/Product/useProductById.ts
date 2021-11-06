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

    console.log(productById);
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
        videos: productById.product.videos.map((video) => {
          const id = getYoutubeId(video);
          return `https://img.youtube.com/vi/${id}/sddefault.jpg`;
        }),
      },
      keyPoints: productById.product.keyPoints,
      features: productById.product.features,
      specifications: productById.product.specification,
      questions: productById.product.questions,
      tags: productById.product.tags,
      reviews: data.getPopulatedProductById.populatedReviews,
      relatedProducts: data.getPopulatedProductById.populatedRelatedProducts,
      contact: productById.product.contactPerson,

      // mainContent: {
      //   isPublished: productById.isPublished,
      //   productName: productById.productName,
      //   price: productById.price,
      //   originalPrice: productById.originalPrice,
      //   discount: productById.discount,
      //   productCode: productById.productCode,
      //   category: productById.category,
      //   collectionName: productById.collectionName,
      //   stockStatus: productById.stockStatus,
      //   contactPerson: productById.contactPerson,
      //   SeoTitle: productById.SeoTitle,
      //   title: productById.title,
      //   slug: productById.slug,
      //   url: productById.url,
      //   siteMap: productById.siteMap,
      // },
      // main: {
      //   featured: productById.featured,
      //   images: productById.images,
      //   videos: productById.videos,
      // },
      // keyPoints: productById.keyPoints,
      // tags: productById.tags,
      // questions: productById.questions,
      // specification: productById.specification,
      // keywords: productById.keywords,
      // features: productById.features,
      // relatedProducts: productById.relatedProducts,
      // createdAt: productById.createdAt,
    };
    return product;
  } else {
    return {};
  }
};

export default useProductById;
