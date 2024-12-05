import React from "react";
import "./MissionCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faAward } from "@fortawesome/free-solid-svg-icons";

const MissionCard = () => {
  return (
    <div className="mission-card">
      <div className="mission-card-bg"></div>
      <div className="mission-card-content">
        <div className="column">
          <h2>
            <FontAwesomeIcon icon={faBullseye} /> Our Vision & Mission
          </h2>
          <p>
            Offer the best customized solution for all clients.
            <br />
            To be a model of technological integration in the market worldwide.
            <br />
            To be recognized for our efficiency, effectiveness, and quality.
          </p>
        </div>
        <div className="column">
          <h2>
            <FontAwesomeIcon icon={faAward} /> Awards & Recognition
          </h2>
          <ul>
            <li>2015 Canada's Top 100 Employers</li>
            <li>
              2013 MAPA Business Intelligence Partner of the Year Finalist
            </li>
            <li>2013 Microsoft Partner of the Year Award Finalist</li>
            <li>2011 CDN TOP 100 Solution Providers</li>
            <li>CRN Fast Growth 100</li>
            <li>The Stevies For Sales & Customer Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
