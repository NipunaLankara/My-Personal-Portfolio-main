import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/nipuna_logo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <ul className='nav-menu'>

        <li>
          <AnchorLink className='anchor-link' href="#home" onClick={() => setMenu("home")}>
            Home
            {menu === "home" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className='anchor-link' href="#about" onClick={() => setMenu("about")}>
            About Me
            {menu === "about" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>


          <li>
          <AnchorLink className='anchor-link'href="#work" onClick={() => setMenu("work")}>
            Projects
            {menu === "work" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>

<li>
          <AnchorLink className='anchor-link'href="#skills-tools" onClick={() => setMenu("skills-tools")}>
            Skills & Tools
            {menu === "skills-tools" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>


        <li>
          <AnchorLink className='anchor-link'href="#certificates" onClick={() => setMenu("certificates")}>
            Certificates
            {menu === "certificates" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>

        

      </ul>

      <AnchorLink href="#contact">
        <div className='nav-connect'> Connect With Me </div>
      </AnchorLink>
    </div>
  )
}

export default Navbar;
