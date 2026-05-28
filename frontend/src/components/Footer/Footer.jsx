import React from 'react';
import './Footer.css';

import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
     
      <div className="footer-container">
        {/* Widget 1: About Me */}
        <div className="footer-widget">
            <div className="footer-logo-profile">
          </div>
          <p className="footer-bio">
            Hi, I’m <strong>Nipuna Lankara</strong>, a Full Stack Developer passionate about building user-friendly web applications and crafting seamless user interfaces.
          </p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/nipuna-lankara-6a43b2323/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        {/* Widget 2: Quick Links */}
        <div className="footer-widget">
            <div className="footer-widget-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
    <li><a href="#about">About Me</a></li>
    <li><a href="#work">Projects</a></li>
    <li><a href="#skills-tools">Skills & Tools</a></li>
    <li><a href="#certificates">Certificates</a></li>
          </ul>
          </div>
        </div>

        {/* Widget 3: Contact Info */}
        <div className="footer-widget">
          <h3>Contact Info</h3>
          <ul>
            <li>Email: nipunalankara@gmail.com</li>
            <li>Phone: +94 76 1517 821</li>
            <li>Location: Matara, Sri Lanka</li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <p>© 2026 Nipuna Lankara. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
