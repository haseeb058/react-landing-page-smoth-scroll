import React from "react";
import ContactUsSection from "./contact-us";
import AboutSection from "./about-section";
import HeroSection from "./hero-section/hero-section";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ContactUsSection />
    </>
  );
}

export default Home;
