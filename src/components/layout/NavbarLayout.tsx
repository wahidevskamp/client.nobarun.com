import React from 'react';
import Container from '../Container';
import Navbar from '../navbar/Navbar';
import ProductLayout from './ProductLayout';

const NavbarLayout: React.FC = ({ children }) => {
  return (
    <ProductLayout navbar={<Navbar />}>
      <Container my="2rem">{children}</Container>
    </ProductLayout>
  );
};

export default NavbarLayout;
