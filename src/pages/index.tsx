import Clients from '@component/Home/Clients';
import FeaturedCategories from '@component/Home/FeaturedCategories';
import CollectionWiseProduct from '@component/Home/CollectionWiseProduct';
import Testimonials from '@component/Home/Testimonials';
import Slider from '../components/Home/Slider';
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
