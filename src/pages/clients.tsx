import React from 'react';
import NavbarLayout from '@component/layout/NavbarLayout';
import Box from '@component/Box';
import { H1, Paragraph } from '@component/Typography';

const ClientsPage = () => {
  return (
    <Box py="4rem">
      <Box textAlign="center">
        <H1>Our Valuable Clients</H1>
        <Paragraph>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </Paragraph>
      </Box>
    </Box>
  );
};

ClientsPage.layout = NavbarLayout;

export default ClientsPage;
