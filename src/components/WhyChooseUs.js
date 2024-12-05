import React from "react";
import { useNavigate } from "react-router-dom";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const handleViewProjectsClick = () => {
    navigate("/CaseStudies");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="why-choose-us-container">
      <div className="uscard">
        <div className="card-content">
          <div className="text-content">
            <h2>Providing New IT Business Solutions And Ideas</h2>
            <p>
              WWS has a network of consultants, industry experts, technical
              gurus and support staff that spans the globe, and offers clients a
              truly global perspective on a broad range of industries, markets,
              and technologies.
            </p>
            <button
              className="view-projects-button"
              onClick={handleViewProjectsClick}
            >
              VIEW PROJECTS
            </button>
          </div>
          <div className="skills-container">
            <div className="skill">
              <h3>Cloud and Consulting Implementation</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: "80%" }}>
                  80%
                </div>
              </div>
            </div>
            <div className="skill">
              <h3>Data Security</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: "85%" }}>
                  85%
                </div>
              </div>
            </div>
            <div className="skill">
              <h3>Cyber Security Product and Services</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: "80%" }}>
                  80%
                </div>
              </div>
            </div>
            <div className="skill">
              <h3>IT Consultancy and Products</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: "95%" }}>
                  95%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
