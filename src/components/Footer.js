import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <img
              src="/WWS/logoWWS.png"
              className="footer-img"
              alt="World Wireless Solutions Logo"
            />
          </div>
          <div className="footer-link-items">
            <h4>Trusted globally by companies of all sizes.</h4> &nbsp;
            <h4>
              <FaMapMarkerAlt />
              &nbsp; 20 Bay Street, 11th Floor, Toronto, Ontario, M5J 2N8
            </h4>
            <h4>
              <FaEnvelope />
              &nbsp; info@worldwireless solutions.com
            </h4>
            <h4>
              <FaPhone />
              &nbsp;+1 (416) 654-2124
            </h4>
          </div>

          <div className="footer-link-items">
            <h2>Useful Links</h2>
            <Link to="/privacy-lock" onClick={scrollToTop}>
              Privacy Policy
            </Link>
            <Link to="/terms-and-condition" onClick={scrollToTop}>
              Terms and Conditions
            </Link>
            <Link to="/disclaimer" onClick={scrollToTop}>
              Disclaimer
            </Link>
            <Link to="/accessibility-statement" onClick={scrollToTop}>
              Accessibility Statement
            </Link>
            <Link to="/faq" onClick={scrollToTop}>
              FAQ
            </Link>
          </div>

          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a
              className="social-icon-link"
              href="https://www.facebook.com/WWSCorp"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <FaFacebookF /> Facebook
            </a>
            <a
              className="social-icon-link"
              href="https://www.instagram.com/wwscorp/"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              className="social-icon-link"
              href="https://x.com/WWSCorp"
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <FaTwitter /> Twitter
            </a>
            <a
              className="social-icon-link"
              href="https://www.linkedin.com/company/wwscorp/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <h4>
        Our tech team is committed to providing high-quality personalized IT
        consulting services to meet our client’s requirements.
      </h4>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">World Wireless Solutions Inc</small>
          <small className="website-rights">
            Copyright © 2023. All rights reserved.
          </small>
          <small className="website-rights">
            Developed By: <strong>INNOVATE5-NCT</strong>
          </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
