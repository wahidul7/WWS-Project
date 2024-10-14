import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import CaseStudies from "./components/pages/CaseStudies";
import ItSolutions from "./components/pages/ItSolutions";
import OurCompany from "./components/pages/OurCompany";
import Contact from "./components/pages/Contact";
import { NewsandBlog } from "./components/pages/NewsandBlog";

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
          <Route path="/newsandblog" element={<NewsandBlog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
