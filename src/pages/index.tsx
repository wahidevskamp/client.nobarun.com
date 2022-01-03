import Clients from '@component/Home/Clients';
import FeaturedCategories from '@component/Home/FeaturedCategories';
import CollectionWiseProduct from '@component/Home/CollectionWiseProduct';
import Testimonials from '@component/Home/Testimonials';
import Slider from '../components/Home/Slider';
import AppLayout from '../components/layout/AppLayout';
import React from 'react';
import GoToTop from '@component/goToTop/GoToTop';

const IndexPage = () => {
  return (
    <main>
      <GoToTop showBelow={250} />
      <Slider />
      <Clients slides={8} />
      <FeaturedCategories />
      <CollectionWiseProduct />
      <Testimonials />
    </main>
  );
};

IndexPage.layout = AppLayout;

export default IndexPage;
