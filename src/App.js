import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import CaseStudies from "./components/pages/CaseStudies";
import ItSolutions from "./components/pages/ItSolutions";
import OurCompany from "./components/pages/OurCompany";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itsolutions" element={<ItSolutions />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/ourcompany" element={<OurCompany />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
