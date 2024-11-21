import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavLinkClick = () => {
    scrollToTop();
    closeMobileMenu();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={handleNavLinkClick}>
            <img
              src="/WWS/logoWWS.png"
              className="navbar-img"
              alt="World Wireless Solutions Logo"
            />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleNavLinkClick}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/itsolutions"
                className="nav-links"
                onClick={handleNavLinkClick}
              >
                IT SOLUTIONS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/casestudies"
                className="nav-links"
                onClick={handleNavLinkClick}
              >
                CASE STUDIES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ourcompany"
                className="nav-links"
                onClick={handleNavLinkClick}
              >
                OUR COMPANY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/newsandblog"
                className="nav-links"
                onClick={handleNavLinkClick}
              >
                NEWS & BLOG
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={handleNavLinkClick}
              >
                CONTACT
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">CONTACT</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
