import React, { useEffect, useState } from 'react';
import Box from '@component/Box';
import NavbarLayout from '@component/layout/NavbarLayout';
// import useWindowSize from '@hook/useWindowSize';
import Grid from '@component/grid/Grid';
import BlogCard from '@component/blog/BlogCard';
import BlogFilterCard from '@component/products/BlogFilterCard';
import useAllBlogs from '@hook/Blogs/useAllBlogs';
import useBlogCategoriesTree from '@hook/Blogs/useAllBlogCategory';
import { H1, Paragraph } from '@component/Typography';
import { useRouter } from 'next/router';

const BlogsList = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    if (router.query?.category) {
      setSelectedCategory(router.query?.category as string);
    }
  }, [router]);

  useEffect(() => {
    useAllBlogs().then((blogs) => setBlogs(blogs));
    useBlogCategoriesTree().then((categories) => setCategories(categories));
  }, []);

  console.log(categories);
  return (
    <Box p="20px" mb="70px">
      <Box textAlign="center" mt="2rem" mb="8rem">
        <H1 fontSize="5rem" fontWeight="bold">
          Our Blog
        </H1>
        <Paragraph fontWeight="bold" fontSize="2rem" maxWidth="60rem" mx="auto">
          Welcome to our journal. Here you can find the latest company news and
          Products articles, etc.
        </Paragraph>
      </Box>
      <Grid container spacing={15}>
        <Grid item xs={8}>
          <Box>
            {blogs.length > 0 && (
              <Grid container spacing={10}>
                {blogs
                  .filter((blog) => {
                    return selectedCategory === ''
                      ? blog
                      : blog.category === selectedCategory;
                  })
                  .map((blog) => (
                    <Grid item xs={6}>
                      <BlogCard {...blog} />
                    </Grid>
                  ))}
              </Grid>
            )}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <BlogFilterCard
            slug={selectedCategory}
            categories={categories}
            setSelectedCategory={setSelectedCategory}
            showTags
          />
        </Grid>
      </Grid>
    </Box>
  );
};

BlogsList.layout = NavbarLayout;

export default BlogsList;
