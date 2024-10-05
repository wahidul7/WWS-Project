import React from "react";
import "./AchievementsCard.css";

function AchievementsCard() {
  return (
    <div className="achievements-card">
      <div className="achievement">
        <div className="icon">😊</div>
        <div className="number">300+</div>
        <div className="label">Happy Clients</div>
      </div>
      <div className="achievement">
        <div className="icon">✅</div>
        <div className="number">2,000+</div>
        <div className="label">Completed Projects</div>
      </div>
      <div className="achievement">
        <div className="icon">🎉</div>
        <div className="number">25+</div>
        <div className="label">Years Of Experience</div>
      </div>
      <div className="achievement">
        <div className="icon">👥</div>
        <div className="number">150+</div>
        <div className="label">Professional Team</div>
      </div>
    </div>
  );
}

export default AchievementsCard;
