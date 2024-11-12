import React from "react";
import "../../App.css";
import ClientFeedback from "../ClientFeedback";
import OurTeams from "../OurTeams";

export default function OurCompany() {
  return (
    <>
      <h1 className="ourcompany">Our Company</h1>
      <OurTeams />
      <ClientFeedback />
    </>
  );
}
