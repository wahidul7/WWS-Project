import React from "react";
import { Link } from "react-router-dom";
import "./ItSolutionCards.css";

function ItSolutionCards() {
  return (
    <div className="main-container">
      <div className="heading">
        <h1 className="heading__title">Establish your Business Presence</h1>
        <p className="heading__credits">
          WWS is strategically located between the fastest growing consumer
          markets in the world. Our strong determination has forged a bond with
          the global professional community. Our business partners represent the
          highest echelon of commerce and industry. At WWS, our commitment is to
          establish a business presence for each client and an international
          identity which can be recognized through our outstanding business
          services.
        </p>
      </div>
      <div className="cards">
        <div className="card card-1">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">Cloud Consulting and Implementation</h2>
          <p className="card__apply">
            <Link to="/cloudconsulting" className="card__link">
              {" "}
              Learn More <i className="fas fa-arrow-right"></i>{" "}
            </Link>
          </p>
        </div>
        <div className="card card-2">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">Cyber Security Products & Services</h2>
          <p className="card__apply">
            <Link to="/antivirus&cybersecurity" className="card__link">
              {" "}
              Learn More <i className="fas fa-arrow-right"></i>{" "}
            </Link>
          </p>
        </div>
        <div className="card card-3">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">Data Recovery and Data Migration</h2>
          <p className="card__apply">
            <Link to="/datarecovery&migration" className="card__link">
              {" "}
              Learn More <i className="fas fa-arrow-right"></i>{" "}
            </Link>
          </p>
        </div>
        <div className="card card-4">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">Communication Systems</h2>
          <p className="card__apply">
            <Link to="/communicationsystem" className="card__link">
              {" "}
              Learn More <i className="fas fa-arrow-right"></i>{" "}
            </Link>
          </p>
        </div>
        <div className="card card-5">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">IT Hardware Solutions</h2>
          <p className="card__apply">
            <Link to="/ithardwaresolutions" className="card__link">
              {" "}
              Learn More <i className="fas fa-arrow-right"></i>{" "}
            </Link>
          </p>
        </div>
        <div className="card card-1">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">Virtual CIO/CTO Service</h2>
          <p className="card__apply">
            <Link to="/virtualcioctoservices" className="card__link">
              {" "}
              Learn More <i className="fas fa-arrow-right"></i>{" "}
            </Link>
          </p>
        </div>
        <div className="card card-2">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">IP Mobile & Virtual Telephony</h2>
          <p className="card__apply">
            <Link to="/ipmobile&virtualtelephone" className="card__link">
              {" "}
              Learn More <i className="fas fa-arrow-right"></i>{" "}
            </Link>{" "}
          </p>
        </div>
        <div className="card card-3">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">Payment, Accounting and Web Solutions</h2>
          <p className="card__apply">
            <Link to="/paymentaccounting&websolutions" className="card__link">
              {" "}
              Learn More <i className="fas fa-arrow-right"></i>{" "}
            </Link>{" "}
          </p>
        </div>
        <div className="card card-4">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">Network Assessment</h2>
          <p className="card__apply">
            <Link to="/networkassessment" className="card__link">
              {" "}
              Learn More <i className="fas fa-arrow-right"></i>{" "}
            </Link>
          </p>
        </div>
        <div className="card card-5">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">Software Development Solutions</h2>
          <p className="card__apply">
            <Link to="/softwaredevelopmentsolutions" className="card__link">
              {" "}
              Learn More <i className="fas fa-arrow-right"></i>{" "}
            </Link>
          </p>
        </div>
        <div className="card card-1">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">It Financing Options</h2>
          <p className="card__apply">
            <Link to="/itfinancing" className="card__link">
              {" "}
              Learn More <i className="fas fa-arrow-right"></i>{" "}
            </Link>
          </p>
        </div>
        <div className="card card-2">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">Project Management Services</h2>
          <p className="card__apply">
            <Link to="/projectmanagementservices" className="card__link">
              {" "}
              Learn More <i className="fas fa-arrow-right"></i>{" "}
            </Link>
          </p>
        </div>
        <div className="card card-3">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">Training Services</h2>
          <p className="card__apply">
            <Link to="/trainingservices" className="card__link">
              {" "}
              Learn More <i className="fas fa-arrow-right"></i>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItSolutionCards;
