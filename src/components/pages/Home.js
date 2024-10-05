import React from "react";
import "../../App.css";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import AboutWWS from "../AboutWWS";
import AchievementsCard from "../AchievementsCard";
import StrategicAlliances from "../StrategicAlliances";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutWWS />
      <AchievementsCard />
      <StrategicAlliances />
      <Footer />
    </>
  );
}

export default Home;
