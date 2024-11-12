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
import Page1 from "./components/pages/ItSolutionPages/page1";
import Page2 from "./components/pages/ItSolutionPages/Page2";
import Page3 from "./components/pages/ItSolutionPages/Page3";
import Page4 from "./components/pages/ItSolutionPages/Page4";
import Page5 from "./components/pages/ItSolutionPages/Page5";
import Page6 from "./components/pages/ItSolutionPages/Page6";
import Page7 from "./components/pages/ItSolutionPages/Page7";
import Page8 from "./components/pages/ItSolutionPages/Page8";
import Page9 from "./components/pages/ItSolutionPages/Page9";
import Page10 from "./components/pages/ItSolutionPages/Page10";
import Page11 from "./components/pages/ItSolutionPages/Page11";
import Page12 from "./components/pages/ItSolutionPages/Page12";
import Page13 from "./components/pages/ItSolutionPages/Page13";

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
          <Route path="/cloudconsulting" element={<Page1 />} />
          <Route path="/antivirus&cybersecurity" element={<Page2 />} />
          <Route path="/datarecovery&migration" element={<Page3 />} />
          <Route path="/communicationsystem" element={<Page4 />} />
          <Route path="/ithardwaresolutions" element={<Page5 />} />
          <Route path="/virtualcioctoservices" element={<Page6 />} />
          <Route path="/ipmobile&virtualtelephone" element={<Page7 />} />
          <Route path="/paymentaccounting&websolutions" element={<Page8 />} />
          <Route path="/networkassessment" element={<Page9 />} />
          <Route path="/softwaredevelopmentsolutions" element={<Page10 />} />
          <Route path="/itfinancing" element={<Page11 />} />
          <Route path="/projectmanagementservices" element={<Page12 />} />
          <Route path="/trainingservices" element={<Page13 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
