import React from "react";
import Footer from "../Footer";
import "../../App.css";
import ClientFeedback from "../ClientFeedback";

export default function OurCompany() {
  return (
    <>
      <h1 className="ourcompany">Our Company</h1>
      <h1>Client Feedback</h1>
      <h3>Our Clients Reviews</h3>
      <h3> Trusted globally by companies of all sizes</h3>
      <ClientFeedback />
      <Footer />
    </>
  );
}
