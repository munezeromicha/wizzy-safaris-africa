import React from "react";
import ServiceGrid from "./ServiceGrid";
import AboutUsSection from "./AboutUsSection";
import CountryList from "./CountryList";
import TourList from "./TourList";
import WhyChooseUs from "./WhyChooseUs";
import HeroBanner from "./HeroBanner";
import TravelNewsSection from "./TravelNewsSection";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const HomeComponent: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-playwrite">
      <Header />
      <ServiceGrid />
      <AboutUsSection />
      <CountryList />
      <TourList />
      <WhyChooseUs />
      <HeroBanner />
      <TravelNewsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default HomeComponent;
