import React, { useState } from "react";
import "./ContactForm.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8800/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.text();
      alert(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      <div className="contact-info">
        <h2>WORLD WIRELESS SOLUTIONS INC</h2>
        <p>20 Bay Street, 11th Floor, Toronto, Ontario, M5J 2N8</p>
        <div className="icon">
          <img src="WWS/phone.png" alt="Phone Icon" />
          <p>+1 (416) 654-2124 </p>
          <p>+1 (877) 746-4997</p>
        </div>
        <div className="icon">
          <img src="WWS/email.png" alt="Email Icon" />
          <p>info@worldwireless solutions.com</p>
        </div>
        <div className="social-icons">
          <a
            className="social-icon-link facebook"
            href="https://www.facebook.com/WWSCorp"
            target="_blank"
            aria-label="Facebook"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            className="social-icon-link instagram"
            href="https://www.instagram.com/wwscorp/"
            target="_blank"
            aria-label="Instagram"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="social-icon-link twitter"
            href="https://x.com/WWSCorp"
            target="_blank"
            aria-label="Twitter"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            className="social-icon-link linkedin"
            href="https://www.linkedin.com/company/wwscorp/"
            target="_blank"
            aria-label="LinkedIn"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
