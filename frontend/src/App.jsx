import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SkillsAndTools from "./components/SkillsAndTools/SkillsAndTools";
import Certificate from './components/Certificates/Certificate';


const App = () => {
  return (
    <div>
     <Navbar/> 
     <Hero/>
     <About/>
     
     <MyWork/>
     <SkillsAndTools />
     <Certificate/>
     <Contact/>
     <Footer/>
    
      </div>
  )
}

export default App