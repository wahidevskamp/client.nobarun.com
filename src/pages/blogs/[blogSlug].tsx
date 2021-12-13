import React, { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import Grid from '@component/grid/Grid';
import NavbarLayout from '@component/layout/NavbarLayout';
import Box from '@component/Box';
import ProductHead from '@component/Product/ProductHead';
import { gql } from 'graphql-request';
import { H1, H2, H3, Paragraph } from '@component/Typography';
import BlogFilterCard from '@component/products/BlogFilterCard';
import useBlogCategoriesTree from '@hook/Blogs/useAllBlogCategory';
import useBlogBySlug from '@hook/Blogs/useBlogBySlug';
import { GetServerSideProps } from 'next';

const BlogDetails = ({ blog, categories }) => {
  return (
    <Fragment>
      {/* <ProductHead product={product} /> */}
      <Box textAlign="center" mt="2rem" mb="8rem">
        <H2 fontSize="5rem" fontWeight="bold">
          Our Blog
        </H2>
        <Paragraph fontWeight="bold" fontSize="2rem" maxWidth="60rem" mx="auto">
          Welcome to our journal. Here you can find the latest company news and
          Products articles, etc.
        </Paragraph>
      </Box>
      <Grid container spacing={10}>
        <Grid item md={8}>
          <H1 fontSize="6rem" mb="2rem">
            {blog?.blogTitle}
          </H1>
          <img
            src={blog?.featured}
            alt={blog?.SeoTitle}
            className="blog__hero"
          />
          {blog?.sections?.map((section) => (
            <Box key={section.id} className="blog__section">
              <H3>{section.title}</H3>
              <div
                dangerouslySetInnerHTML={{
                  __html: section.content,
                }}
              />
            </Box>
          ))}
        </Grid>
        <Grid item md={4}>
          <BlogFilterCard
            slug={''}
            categories={categories}
            setSelectedCategory={''}
            showTags={false}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

BlogDetails.layout = NavbarLayout;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const blogSlug = context.params.blogSlug;
  try {
    const data = await useBlogBySlug(blogSlug);
    // const categories = useBlogCategoriesTree();
    return {
      props: {
        blog: { ...data },
        // categories,
      },
    };
  } catch (err) {
    return {
      props: {
        product: err,
        isError: true,
      },
    };
  }
};

export default BlogDetails;
