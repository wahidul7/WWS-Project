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
              &nbsp; info@worldwirelesssolutions.com
            </h4>
            <h4>
              <FaPhone />
              &nbsp;+1 (416) 654-2124
            </h4>
          </div>

          <div className="footer-link-items">
            <h2>Useful Links</h2>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms and Conditions</Link>
            <Link to="/">Disclaimer</Link>
            <Link to="/">Accessibility Statement</Link>
            <Link to="/">FAQ</Link>
          </div>

          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">
              <FaInstagram /> Instagram
            </Link>
            <Link to="/">
              <FaFacebookF /> Facebook
            </Link>
            <Link to="/">
              <FaYoutube /> YouTube
            </Link>
            <Link to="/">
              <FaTwitter /> Twitter
            </Link>
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
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="YouTube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
