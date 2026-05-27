import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Connect With Me</h1>
        <img src={theme_pattern} alt="theme" />
      </div>

      <div className="contact-container">
        {/* Email */}
        <div className="contact-card">
          <img src={mail_icon} alt="email" />
          <div>
            <h3>Email</h3>
            <p>nipunalankara@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="contact-card">
          <img src={call_icon} alt="call" />
          <div>
            <h3>Phone</h3>
            <p>+94 76 15 17 821</p>
          </div>
        </div>

        {/* Address */}
        <div className="contact-card">
          <img src={location_icon} alt="location" />
          <div>
            <h3>Address</h3>
            <p>34/A, Matara, Sri Lanka</p>
          </div>
        </div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nipuna-lankara-6a43b2323/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card link-card"
        >
          <FaLinkedin className="contact-icon" />
          <div>
            <h3>LinkedIn</h3>
            <p>Nipuna Lankara</p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/NipunaLankara"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card link-card"
        >
          <FaGithub className="contact-icon" />
          <div>
            <h3>GitHub</h3>
            <p>NipunaLankara</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
