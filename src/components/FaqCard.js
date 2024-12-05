import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FaqCard.css";

const FaqCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleReadMore = () => {
    navigate("/faq");
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="faq-card">
      <div className="faq-content">
        <div className="text-section">
          <h2>General Questions</h2>
          <div className="question-section">
            <div className="question" onClick={() => toggleAccordion(0)}>
              <h3 className="question-h3">
                Where Can I Find More Information?
              </h3>
              {activeIndex === 0 && (
                <div className="answer">
                  <p>
                    If you would like to know about the services we offer, write
                    an email to: info@worldwirelesssolutions.com
                  </p>
                </div>
              )}
            </div>
            <div className="question" onClick={() => toggleAccordion(1)}>
              <h3 className="question-h3">
                How Easy is It to Request Support?
              </h3>
              {activeIndex === 1 && (
                <div className="answer">
                  <p>
                    We provide accessible support options, such as email and
                    phone.
                  </p>
                </div>
              )}
            </div>
            <div className="question" onClick={() => toggleAccordion(2)}>
              <h3 className="question-h3">
                What industries does World Wireless Solutions Inc. serve?
              </h3>
              {activeIndex === 2 && (
                <div className="answer">
                  <p>
                    WWS Inc. serves most industries, as business technology is
                    common across industry verticals. We also have specialized
                    knowledge in the needs of industries that have special
                    compliance requirements, such as dental, medical, legal,
                    financial, and accounting industries as well as specific
                    support systems designed to support the travel and
                    transportation industries that make us a particularly strong
                    partner.
                  </p>
                </div>
              )}
            </div>
            <button className="read-more" onClick={handleReadMore}>
              Read More
            </button>
          </div>
        </div>
        <div className="image-section">
          <img src="/images/ourcompanybg.jpg" alt="FAQ Image" />
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
