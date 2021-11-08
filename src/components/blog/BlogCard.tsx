import React from 'react';
import Box from '@component/Box';
import Card from '@component/Card';
import Divider from '@component/Divider';
import FlexBox from '@component/FlexBox';
import Button from '@component/buttons/Button';
import { H1, Paragraph } from '@component/Typography';

const BlogCard = () => {
  return (
    <Card px="20px" py="10px">
      <Box width="100%" textAlign="center" margin="0 auto">
        <img src="/assets/images/blog-demo.png" style={{ height: '15rem' }} />
      </Box>
      <H1 fontSize="32px">
        সুপারশপ গন্ডোলা র‍্যাক সম্পর্কে জরুরি কিছু প্রশ্ন এবং উত্তর জেনে নিন
      </H1>
      <Paragraph fontSize="14px">
        উন্নত দেশগুলোর পাশাপাশি বাংলাদেশেও এখন প্রচুর পরিমান সুপারশপ তৈরি হচ্ছে
        এবং উন্নত পদ্ধতিতে বাজার করার সুব্যবস্থা তৈরি হচ্ছে শহর থেকে শুরু করে
        গ্রামেও। সুপারশপের অন্যতম গুরুত্বপূর্ণ একটি ইপোইপমেন্ট হচ্ছে গন্ডোলা বা
        র‍্যাক। র‍্যাক অনেক গুরুত্বপূর্ণ বিষয় কারণ এই র‍্যাকগুলো সুপারশপে
        মিনিমাম ২০ থেকে ৩০ বছর ব্যবহার করা হয়। চলুন জেনে নেওয়া যাক সুপারশপ
        গন্ডোলা র‍্যাকের
      </Paragraph>
      <Divider />
      <FlexBox py="15px" justifyContent="space-between" alignItems="center">
        <Paragraph>Category: কমার্শিয়াল কিচেন ইকুইপমেন্ট</Paragraph>
        <Button variant="contained" color="primary">
          Read More
        </Button>
      </FlexBox>
    </Card>
  );
};

export default BlogCard;
