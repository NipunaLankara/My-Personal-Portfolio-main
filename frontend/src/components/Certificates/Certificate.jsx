import React from "react";
import "./Certificate.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { FaCertificate } from "react-icons/fa";

// Import your certificate images here (add your own image files in assets/certificates/)
import cart1 from "../../assets/python.png";
import cart2 from "../../assets/nodejs.png"


const certificates = [
  {
    year: "2026",
    title: "Python For Beginners",
    issuer: "University of Moratuwa E-Learning",
    image: cart1,
  },
    {
        year: "2026",
        title: "Server-side Web Programming",
        issuer: "University of Moratuwa E-Learning",
        image: cart2,
    },
];

const Certificate = () => {
  return (
    <div id="certificates" className="certificates">
      <div className="certificate-title">
        <h1>Certificates</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="certificate-container">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <div className="certificate-image-container">
              <img
                src={cert.image}
                alt={cert.title}
                className="certificate-image"
              />
            </div>
            <div className="certificate-info">
              <FaCertificate className="certificate-icon" />
              <h3>{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-year">{cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
