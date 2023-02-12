import Footer from "../../components/footer";
import Hero from "../../components/hero";
import SubHero from "../../components/sub-hero";
import CouesesIntro from "../../components/courses-Intro";
import ServicesInto from "../../components/services-into";
import NewsInto from "../../components/news-into";
import ConcatUsInto from "../../components/concat-us-into";

const HomePage = () => {
  return (
    <div className="font-body">
      <Hero />
      <SubHero />
      <CouesesIntro />
      <ServicesInto />
      <NewsInto />
      <ConcatUsInto />
      <Footer />
    </div>
  );
};

export default HomePage;
