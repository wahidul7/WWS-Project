import React from "react";
import "../../App.css";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import AboutWWS from "../AboutWWS";
import WhyChooseUs from "../WhyChooseUs";
import AchievementsCard from "../AchievementsCard";
import StrategicAlliances from "../StrategicAlliances";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutWWS />
      <WhyChooseUs />
      <AchievementsCard />
      <StrategicAlliances />
      <Footer />
    </>
  );
}

export default Home;
