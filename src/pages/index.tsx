import Categories from '@component/home-1/Categories';
import SpecialCollections from '@component/home-1/SpecialCollections';
import Testimonials from '@component/home-1/Testimonials';
import Features from '../components/home-1/Features';
import Slider from '../components/home-1/Slider';
import AppLayout from '../components/layout/AppLayout';

const IndexPage = () => {
  return (
    <main>
      <Slider />
      <Categories />
      <SpecialCollections />
      <Testimonials />
      <Features />
    </main>
  );
};

IndexPage.layout = AppLayout;

export default IndexPage;
