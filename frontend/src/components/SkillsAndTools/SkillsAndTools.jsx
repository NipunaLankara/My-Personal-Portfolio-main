import React from 'react'
import './SkillsAndTools.css'
import { skills_data, tools_data } from '../../assets/skills_data'
import theme_pattern from '../../assets/theme_pattern.svg'

const SkillsAndTools = () => {
  return (
    <div id="skills-tools" className="skills-tools">
      <div className="skills-tools-title">
        <h1> My Skills & Tools </h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="skills-tools-container">
        {skills_data.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div key={index} className="skills-tools-format">
              <div className="skills-tools-icon"><IconComponent /></div>
              <h3>{skill.name}</h3>
             
            </div>
          );
        })}

        {tools_data.map((tool, index) => {
          const IconComponent = tool.icon;
          return (
            <div key={index} className="skills-tools-format">
              <div className="skills-tools-icon"><IconComponent /></div>
              <h3>{tool.name}</h3>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsAndTools;
