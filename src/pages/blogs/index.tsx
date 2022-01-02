import React, { useEffect, useState } from 'react';
import Box from '@component/Box';
import NavbarLayout from '@component/layout/NavbarLayout';
import Grid from '@component/grid/Grid';
import BlogCard from '@component/blog/BlogCard';
import useAllBlogs from '@hook/Blogs/useAllBlogs';
import { H1 } from '@component/Typography';
import { useRouter } from 'next/router';
import OtherLayout from '@component/layout/OtherLayout';

const BlogsList = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    if (router.query?.category) {
      setSelectedCategory(router.query?.category as string);
    }
  }, [router]);

  useEffect(() => {
    useAllBlogs().then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <Box p="20px" mb="70px">
      <Box textAlign="center" mt="1rem" mb="4.5rem">
        <H1 fontSize="5rem" fontWeight="bold">
          Our Blog
        </H1>
      </Box>
      {blogs.length > 0 && (
        <Grid container spacing={10}>
          {blogs
            .filter((blog) => {
              return selectedCategory === ''
                ? blog
                : blog.category === selectedCategory;
            })
            .map((blog) => (
              <Grid item lg={4} md={6} xs={12}>
                <BlogCard {...blog} />
              </Grid>
            ))}
        </Grid>
      )}
    </Box>
  );
};

BlogsList.layout = OtherLayout;

export default BlogsList;
