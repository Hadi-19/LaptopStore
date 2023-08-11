import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import PropertiesByBrandCard from "../components/properties-by-brand-card";
import AreaPropertiesContainer from "../components/area-properties-container";
import RentForm1 from "../components/rent-form1";
import RentPropertiesContainer from "../components/rent-properties-container";
import Contact from "../components/contact";
import FooterSection from "../components/footer-section";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>PC Wares</title>
        <meta name="description" content="Find your dream laptop" />
      </Head>
      <main className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
        <Header hamburger showHamburgerMenuIcon={false} />
        <Hero />
        <PropertiesByBrandCard />
        <AreaPropertiesContainer />
        <RentForm1 />
        <RentPropertiesContainer />
        <Contact />
        <FooterSection
          imageDimensions="/houseline2.svg"
          imageDimensionsText="/social-media-logo5.svg"
          imageDimensionsCode="/social-media-logo6.svg"
          imageDimensionsTextCode="/social-media-logo7.svg"
          imageDimensionsTextCode2="/social-media-logo8.svg"
          imageDimensionsCodeText="/social-media-logo9.svg"
          actionButtonText="Become a Host"
          propOverflow="unset"
        />
      </main>
    </>
  );
};

export default LandingPage;
