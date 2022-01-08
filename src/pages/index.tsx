import GoToTop from '@component/goToTop/GoToTop';
import Clients from '@component/Home/Clients';
import CollectionWiseProduct from '@component/Home/CollectionWiseProduct';
import FeaturedCategories from '@component/Home/FeaturedCategories';
import Testimonials from '@component/Home/Testimonials';
import useAllProductCategories from '@hook/Home/useAllProductCategories';
import useCollectionWiseProduct from '@hook/Home/useCollectionWiseProduct';
import useAllFeaturedClients from '@hook/Home/useFeaturedClients';
import useProductCount from '@hook/useNoOfProduct';
import React from 'react';
import Slider from '../components/Home/Slider';
import AppLayout from '../components/layout/AppLayout';

const IndexPage = ({ clients, categories, collections }) => {
  return (
    <main>
      <GoToTop showBelow={250} />
      <Slider categories={categories} />
      <Clients slides={8} clients={clients} />
      <FeaturedCategories />
      <CollectionWiseProduct collections={collections} />
      <Testimonials />
    </main>
  );
};

IndexPage.layout = AppLayout;

export async function getStaticProps() {
  const categories = await useAllProductCategories();
  const clients = await useAllFeaturedClients();
  const count = await useProductCount();
  const collections = await useCollectionWiseProduct();

  return {
    props: {
      clients,
      categories,
      collections,
      count,
    },
    revalidate: 30,
  };
}

export default IndexPage;
