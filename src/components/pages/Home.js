import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import AboutWWS from "../AboutWWS";
import WhyChooseUs from "../WhyChooseUs";
import AchievementsCard from "../AchievementsCard";
import StrategicAlliances from "../StrategicAlliances";
import OurProcess from "../OurProcess";
import Navbar from "../Navbar";
import ClientFeedback from "../ClientFeedback";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutWWS />
      <AchievementsCard />
      <ClientFeedback />
      <OurProcess />
    </>
  );
}

export default Home;
