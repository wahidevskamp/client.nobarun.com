import Box from '@component/Box';
import Button from '@component/buttons/Button';
import Card from '@component/Card';
import Divider from '@component/Divider';
import FlexBox from '@component/FlexBox';
import { H2, Paragraph } from '@component/Typography';
import Link from 'next/link';
import React from 'react';

interface BlogCardProps {
  postTitle: string;
  slug: string;
  category: string;
  description: string;
  image: string;
}
const BlogCard = (props: BlogCardProps) => {
  const { postTitle, slug, description, category, image } = props;
  return (
    <Link href={`/blogs/${encodeURI(slug)}`}>
      <a>
        <Card px="20px" py="10px" className="blog__card">
          <Box width="100%" textAlign="center" margin="1rem auto 1.5rem">
            <img src={image} style={{ height: '28.5rem', width: '33.5rem' }} />
          </Box>
          <H2 fontSize="32px" mb="1rem">
            {postTitle}
          </H2>
          <Paragraph fontSize="14px" mb="1rem">
            {description}
          </Paragraph>
          <Divider />
          <FlexBox py="15px" justifyContent="space-between" alignItems="center">
            <Paragraph>Category: {category}</Paragraph>
            <Button variant="contained" color="primary">
              Read More
            </Button>
          </FlexBox>
        </Card>
      </a>
    </Link>
  );
};

export default BlogCard;
