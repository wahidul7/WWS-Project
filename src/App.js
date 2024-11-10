import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import CaseStudies from "./components/pages/CaseStudies";
import ItSolutions from "./components/pages/ItSolutions";
import OurCompany from "./components/pages/OurCompany";
import Contact from "./components/pages/Contact";
import { NewsandBlog } from "./components/pages/NewsandBlog";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import Disclaimer from "./components/pages/Disclaimer";
import AccessibilityStatement from "./components/pages/AccessibilityStatement";
import FAQ from "./components/pages/FAQ";

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
          <Route path="/privacy-lock" element={<PrivacyPolicy />} />
          <Route path="/terms-and-condition" element={<TermsAndConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route
            path="/accessibility-statement"
            element={<AccessibilityStatement />}
          />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
