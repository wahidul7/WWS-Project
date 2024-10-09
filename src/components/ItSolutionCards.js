import React from "react";
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
            <a className="card__link" href="#">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
        <div className="card card-2">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">Cyber Security Products & Services</h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
        <div className="card card-3">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">Data Recovery and Data Migration</h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
        <div className="card card-4">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">Communication Systems</h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
        <div className="card card-5">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">IT Hardware Solutions</h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
        <div className="card card-1">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">Virtual CIO/CTO Service</h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItSolutionCards;
