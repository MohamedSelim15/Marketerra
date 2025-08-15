import HeroSection from "../Home Components/HeroSection";
import AboutUs from "../Home Components/AboutUs";
import SlideSection from "../Home Components/SlideSection";
import Service from "../Home Components/Services";
import SlideSection2 from "../Home Components/SlideSection2";
import Reviews from "../Home Components/Reviews";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <SlideSection />
      <Service />
      <SlideSection2 />
      <Reviews />
    </div>
  );
};

export default Home;
