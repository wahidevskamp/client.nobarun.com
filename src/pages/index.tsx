<<<<<<< HEAD
import Categories from '@component/home-1/Categories';
import SpecialCollections from '@component/home-1/SpecialCollections';
import Testimonials from '@component/home-1/Testimonials';
import Features from '../components/home-1/Features';
import Slider from '../components/home-1/Slider';
import AppLayout from '../components/layout/AppLayout';
=======
import Section13 from "@component/home-1/Section13";
import Section10 from "../components/home-1/Section10";
import Section11 from "../components/home-1/Section11";
import Section12 from "../components/home-1/Section12";
import Section2 from "../components/home-1/Section2";
import Section3 from "../components/home-1/Section3";
import Section4 from "../components/home-1/Section4";
import Section5 from "../components/home-1/Section5";
import Section6 from "../components/home-1/Section6";
import Section7 from "../components/home-1/Section7";
import Section8 from "../components/home-1/Section8";
import Section9 from "../components/home-1/Section9";
import Slider from "../components/home-1/Slider";
import AppLayout from "../components/layout/AppLayout";
>>>>>>> 46ceae59b435c13f042d7fd6a47e863492570adb

const IndexPage = () => {
  return (
    <main>
      <Slider />
<<<<<<< HEAD
      <Categories />
      <SpecialCollections />
      <Testimonials />
      <Features />
=======
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section13 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
>>>>>>> 46ceae59b435c13f042d7fd6a47e863492570adb
    </main>
  );
};

IndexPage.layout = AppLayout;

export default IndexPage;
