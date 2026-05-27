import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.jpg';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.2 },
  }),
};

const About = () => {
  return (
    <div id='about' className='about'>

      <motion.div
        className="about-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        custom={0}
      >
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </motion.div>

      <div className="about-sections">

        <motion.div
          className="about-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          custom={1}
        >
          <img src={profile_img} alt="Profile" />
        </motion.div>

        <motion.div
            className="about-right"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.4}}
            variants={fadeUp}
            custom={2}
        >
          <div className="about-para">
            <p>
              I am currently pursuing a BSc (Hons) in Software Engineering at Cardiff Metropolitan University, where I
              continue to strengthen my knowledge in software architecture, system design, and modern application
              development. My academic journey has provided me with a solid foundation in both theoretical and practical
              aspects of software engineering.
            </p>

            <p>
              I am passionate about developing scalable and efficient applications, with a strong interest in backend
              development and API engineering. At the same time, I enjoy creating clean and responsive user interfaces
              that enhance user experience. I am continuously exploring new technologies, frameworks, and best practices
              to improve my skills and build high-quality software solutions.
            </p>
          </div>

          <motion.div
              className="about-links"
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.4}}
              variants={fadeUp}
              custom={3}
          >
            <div className="about-link">
              <FaLinkedin className="link-icon"/>
              <a href="https://www.linkedin.com/in/nipuna-lankara-6a43b2323/" target="_blank"
                 rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>

            <div className="about-link">
              <FaGithub className="link-icon"/>
              <a href="https://github.com/NipunaLankara" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>

            <div className="about-link">
              <FaEnvelope className="link-icon"/>
              <a href="mailto:nipunalankara@gmail.com">nipunalankara@gmail.com</a>
            </div>

            <div className="about-link">
              <FaPhone className="link-icon"/>
              <span>+94 76 15 17 821</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
};

export default About;
