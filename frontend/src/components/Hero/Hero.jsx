import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { TypeAnimation } from 'react-type-animation'
import MyResume from '../../assets/MyResume.pdf';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />

      <h1><span>I'm Nipuna Lankara,</span></h1>

      <h2 className="typing-text">
        <TypeAnimation
          sequence={[
            'Fullstack Developer', 2000,
            'Frontend Developer', 2000,
            'Backend Developer', 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h2>

      <p>
        Welcome to my personal portfolio! I’m Nipuna Lankara, a passionate and dedicated <br/>technology student and aspiring software developer.
        This site highlights<br/> my skills, projects, and progress toward a career in tech.
      </p>

      <div className="hero-action">
        <AnchorLink href="#contact">
          <div className="hero-connect">Connect With Me</div>
        </AnchorLink>
       <a href={MyResume} target="_blank" rel="noopener noreferrer">
          <div className="hero-resume">My Resume</div>
</a>

      </div>
    </div>
  )
}

export default Hero
