import React from "react";
import "../../App.css";
import ClientFeedback from "../ClientFeedback";
import OurTeams from "../OurTeams";
import MissionCard from "../MissionCard";

export default function OurCompany() {
  return (
    <>
      <h1 className="ourcompany">Our Company</h1>
      <MissionCard />
      <OurTeams />
      <ClientFeedback />
    </>
  );
}
