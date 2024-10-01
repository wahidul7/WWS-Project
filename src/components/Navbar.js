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

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
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
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/itsolutions"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                IT SOLUTIONS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/casestudies"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CASE STUDIES
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/ourcompany"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                OUR COMPANY
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
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
