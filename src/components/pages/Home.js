import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import AboutWWS from "../AboutWWS";
import AchievementsCard from "../AchievementsCard";
import OurProcess from "../OurProcess";
import ClientFeedback from "../ClientFeedback";
import StrategicAlliances from "../StrategicAlliances";
import WhyChooseUs from "../WhyChooseUs";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutWWS />
      <WhyChooseUs />
      <AchievementsCard />
      <ClientFeedback />
      <OurProcess />
      <StrategicAlliances />
    </>
  );
}

export default Home;
