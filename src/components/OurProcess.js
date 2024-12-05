import React from "react";
import "./OurProcess.css";

function OurProcess() {
  return (
    <>
      <div className="heading">
        <h1 className="header-text">Our Process | How It Works</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="alliance-text">Strategic Alliances</h2>
              <p className="alliance-description">
                Being proactive and sourcing new strategic alliances with the
                best tech companies to offer our clients a solid solution that
                covers all needs in technology.
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>01</h2>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="diagnostic-text">Diagnostic & Execution</h2>
              <p className="diagnostic-description">
                Our team of experts will review your case and come up with the
                best option for your business whether your budget is small or
                large, our main focus is that you’ll get the best option for
                your business.
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>02</h2>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="implementation-text">Solution Implementation</h2>
              <p className="implementation-description">
                Our team of experts will get everything set up and working in no
                time, there is no job too big or too small, everything is done
                with quality and professionalism.
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>03</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProcess;
