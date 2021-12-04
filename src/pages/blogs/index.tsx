import React, { useEffect, useState } from 'react';
import Box from '@component/Box';
import NavbarLayout from '@component/layout/NavbarLayout';
// import useWindowSize from '@hook/useWindowSize';
import Grid from '@component/grid/Grid';
import BlogCard from '@component/blog/BlogCard';
import BlogFilterCard from '@component/products/BlogFilterCard';
import useAllBlogs from '@hook/Blogs/useAllBlogs';

const BlogsList = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  useEffect(() => {
    useAllBlogs().then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <Box p="20px" mb="70px">
      <Grid container spacing={15}>
        <Grid item xs={8}>
          <Box>
            {blogs.length > 0 && (
              <Grid container spacing={10}>
                {blogs.map((blog) => (
                  <Grid item xs={6}>
                    <BlogCard {...blog} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <BlogFilterCard />
        </Grid>
      </Grid>
    </Box>
  );
};

BlogsList.layout = NavbarLayout;

export default BlogsList;
