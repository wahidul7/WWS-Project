import React from "react";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <div className="why-choose-us-card">
      <h2>Why Choose Us</h2>
      <p>
        <strong>Providing New IT Business Solutions And Ideas</strong>
      </p>
      <p>
        WWS has a network of consultants, industry experts, technical gurus, and
        support staff that spans the globe, offering clients a truly global
        perspective on a broad range of industries, markets, and technologies.
      </p>
      <button className="view-projects-button">View Projects</button>

      <div className="skills">
        <div className="skill">
          <h4>Cloud and Consulting Implementation</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}>
              80%
            </div>
          </div>
        </div>
        <div className="skill">
          <h4>Data Security</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: "85%" }}>
              85%
            </div>
          </div>
        </div>
        <div className="skill">
          <h4>Cyber Security Product and Services</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}>
              80%
            </div>
          </div>
        </div>
        <div className="skill">
          <h4>IT Consultancy and Products</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: "95%" }}>
              95%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
