import React from "react";
import "../../App.css";
import ItSolutionCards from "../ItSolutionCards";
import OurProcess from "../OurProcess";

export default function ItSolutions() {
  return (
    <>
      <h3 className="itsolutions">Our services</h3>
      <ItSolutionCards />
      <OurProcess />
    </>
  );
}
