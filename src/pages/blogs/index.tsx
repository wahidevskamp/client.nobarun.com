import React from 'react';
import Box from '@component/Box';
import NavbarLayout from '@component/layout/NavbarLayout';
// import useWindowSize from '@hook/useWindowSize';
import Grid from '@component/grid/Grid';
import BlogCard from '@component/blog/BlogCard';
import BlogFilterCard from '@component/products/BlogFilterCard';

const BlogsList = () => {
  // const width = useWindowSize();
  return (
    <Box p="20px" mb="70px">
      <Grid container spacing={15}>
        <Grid item xs={8}>
          <Box>
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <BlogCard />
              </Grid>
              <Grid item xs={6}>
                <BlogCard />
              </Grid>
            </Grid>
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
