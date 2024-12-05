import React from "react";
import "./AboutWWS.css";

function AboutWWS() {
  return (
    <div className="about-wws-container">
      <div className="about-wws-card">
        <h2>About WWS</h2>
        <p>
          <strong>20+ Years of Excellence in IT Solutions</strong>
        </p>
        <p>
          At World Wireless Solutions (WWS), we are dedicated to establishing a
          robust business presence and an international identity for each of our
          clients. Our commitment to excellence is reflected in our
          comprehensive range of business services.
        </p>

        <h3 className="aboutwwsh3">Our Services</h3>
        <ul>
          <li>
            <strong>Personalized Services</strong>: Tailored solutions to meet
            your unique business needs.
          </li>
          <li>
            <strong>24/7 Support</strong>: Around-the-clock assistance to ensure
            your operations run smoothly.
          </li>
          <li>
            <strong>Global Workforce</strong>: Access to a diverse and skilled
            team from around the world.
          </li>
          <li>
            <strong>User Experience</strong>: Enhancing user interactions with
            intuitive and effective designs.
          </li>
          <li>
            <strong>Big Data & Analytics</strong>: Leveraging data to drive
            informed business decisions.
          </li>
          <li>
            <strong>Quick Tips and Advice</strong>: Expert guidance to help you
            navigate complex challenges.
          </li>
        </ul>
      </div>

      <div className="testimonial-card">
        <h3>Client Testimonials</h3>
        <blockquote>
          <p>
            "In my encounters with Eduardo Harari of World Wireless Solutions, I
            found him to be a bright and well-rounded individual. He easily
            grasped highly technical aspects of the business, communicated
            clearly and directly, and was very responsive to my needs. I would
            recommend World Wireless Solutions for similar projects in
            Telecommunications or other industries."
          </p>
          <footer>
            <strong>Jeff Prevost</strong>
            <br />
            Manager RF Network Engineering – Bell Mobility
          </footer>
        </blockquote>
        <p>
          <a className="aboutusbutton" href="/OurCompany">
            More About Us
          </a>
        </p>
      </div>
    </div>
  );
}

export default AboutWWS;
