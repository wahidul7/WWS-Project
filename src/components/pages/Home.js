import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import AboutWWS from "../AboutWWS";
import AchievementsCard from "../AchievementsCard";
import OurProcess from "../OurProcess";
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
