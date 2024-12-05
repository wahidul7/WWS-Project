import React from "react";
import { Link } from "react-router-dom";
import "./ItSolutionCards.css";

function ItSolutionCards() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="itsolition-main-container">
      <div className="itsolition-heading">
        <h1 className="itsolition-heading__title">
          Establish your Business Presence
        </h1>
        <p className="itsolition-heading__credits">
          WWS is strategically located between the fastest growing consumer
          markets in the world. Our strong determination has forged a bond with
          the global professional community. Our business partners represent the
          highest echelon of commerce and industry. At WWS, our commitment is to
          establish a business presence for each client and an international
          identity which can be recognized through our outstanding business
          services.
        </p>
      </div>
      <div className="itsolition-cards">
        <div className="itsolition-card itsolition-card-1">
          <div className="itsolition-card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="itsolition-card__title">
            Cloud Consulting and Implementation
          </h2>
          <p className="itsolition-card__apply">
            <Link
              to="/cloudconsulting"
              className="itsolition-card__link"
              onClick={scrollToTop}
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </p>
        </div>
        <div className="itsolition-card itsolition-card-2">
          <div className="itsolition-card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="itsolition-card__title">
            Cyber Security Products & Services
          </h2>
          <p className="itsolition-card__apply">
            <Link
              to="/antivirus&cybersecurity"
              className="itsolition-card__link"
              onClick={scrollToTop}
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </p>
        </div>
        <div className="itsolition-card itsolition-card-3">
          <div className="itsolition-card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="itsolition-card__title">
            Data Recovery and Data Migration
          </h2>
          <p className="itsolition-card__apply">
            <Link
              to="/datarecovery&migration"
              className="itsolition-card__link"
              onClick={scrollToTop}
            >
              Learn More <i class="fas fa-arrow-right"></i>
            </Link>
          </p>
        </div>
        <div className="itsolition-card itsolition-card-4">
          <div className="itsolition-card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="itsolition-card__title">Communication Systems</h2>
          <p className="itsolition-card__apply">
            <Link
              to="/communicationsystem"
              className="itsolition-card__link"
              onClick={scrollToTop}
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </p>
        </div>
        <div className="itsolition-card itsolition-card-5">
          <div className="itsolition-card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="itsolition-card__title">IT Hardware Solutions</h2>
          <p className="itsolition-card__apply">
            <Link
              to="/ithardwaresolutions"
              className="itsolition-card__link"
              onClick={scrollToTop}
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </p>
        </div>
        <div className="itsolition-card itsolition-card-1">
          <div className="itsolition-card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="itsolition-card__title">Virtual CIO/CTO Service</h2>
          <p className="itsolition-card__apply">
            <Link
              to="/virtualcioctoservices"
              className="itsolition-card__link"
              onClick={scrollToTop}
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </p>
        </div>
        <div className="itsolition-card itsolition-card-2">
          <div className="itsolition-card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="itsolition-card__title">
            IP Mobile & Virtual Telephony
          </h2>
          <p className="itsolition-card__apply">
            <Link
              to="/ipmobile&virtualtelephone"
              className="itsolition-card__link"
              onClick={scrollToTop}
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </p>
        </div>
        <div className="itsolition-card itsolition-card-3">
          <div className="itsolition-card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="itsolition-card__title">
            Payment, Accounting and Web Solutions
          </h2>
          <p className="itsolition-card__apply">
            <Link
              to="/paymentaccounting&websolutions"
              className="itsolition-card__link"
              onClick={scrollToTop}
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </p>
        </div>
        <div className="itsolition-card itsolition-card-4">
          <div className="itsolition-card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="itsolition-card__title">Network Assessment</h2>
          <p className="itsolition-card__apply">
            <Link
              to="/networkassessment"
              className="itsolition-card__link"
              onClick={scrollToTop}
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </p>
        </div>
        <div className="itsolition-card itsolition-card-5">
          <div className="itsolition-card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="itsolition-card__title">
            Software Development Solutions
          </h2>
          <p className="itsolition-card__apply">
            <Link
              to="/softwaredevelopmentsolutions"
              className="itsolition-card__link"
              onClick={scrollToTop}
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </p>
        </div>
        <div className="itsolition-card itsolition-card-1">
          <div className="itsolition-card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="itsolition-card__title">It Financing Options</h2>
          <p className="itsolition-card__apply">
            <Link
              to="/itfinancing"
              className="itsolition-card__link"
              onClick={scrollToTop}
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </p>
        </div>
        <div className="itsolition-card itsolition-card-2">
          <div className="itsolition-card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="itsolition-card__title">
            Project Management Services
          </h2>
          <p className="itsolition-card__apply">
            <Link
              to="/projectmanagementservices"
              className="itsolition-card__link"
              onClick={scrollToTop}
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </p>
        </div>
        <div className="itsolition-card itsolition-card-3">
          <div className="itsolition-card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="itsolition-card__title">Training Services</h2>
          <p className="itsolition-card__apply">
            <Link
              to="/trainingservices"
              className="itsolition-card__link"
              onClick={scrollToTop}
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItSolutionCards;
