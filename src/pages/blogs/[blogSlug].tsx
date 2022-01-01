import React, { Fragment } from 'react';
import Grid from '@component/grid/Grid';
import NavbarLayout from '@component/layout/NavbarLayout';
import Box from '@component/Box';
import { H1, H3 } from '@component/Typography';
import BlogFilterCard from '@component/products/BlogFilterCard';
import useBlogCategoriesTree from '@hook/Blogs/useAllBlogCategory';
import useBlogBySlug from '@hook/Blogs/useBlogBySlug';
import { GetServerSideProps } from 'next';

const BlogDetails = ({ blog, categories }) => {
  return (
    <Fragment>
      {/* <ProductHead product={product} /> */}
      <div className="hero">
        <h2 className="hero__title">Our Blog</h2>
      </div>
      <Grid container spacing={10}>
        <Grid item md={8} sm={12} xs={12} className="blog">
          <H1 className="blog__title">{blog?.blogTitle}</H1>
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
        <Grid item md={4} sm={12} xs={12}>
          <BlogFilterCard
            slug={blog?.populatedCategory?.name}
            categories={categories}
            setSelectedCategory={''}
            showTags
            tags={blog.tags}
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
    const categories = await useBlogCategoriesTree();
    return {
      props: {
        blog: { ...data },
        categories,
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
