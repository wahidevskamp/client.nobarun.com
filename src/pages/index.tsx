import Clients from '@component/home-1/Clients';
import FeaturedCategories from '@component/home-1/FeaturedCategories';
import CollectionWiseProduct from '@component/home-1/CollectionWiseProduct';
import Testimonials from '@component/home-1/Testimonials';
import Slider from '../components/home-1/Slider';
import AppLayout from '../components/layout/AppLayout';

const IndexPage = () => {
  return (
    <main>
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
