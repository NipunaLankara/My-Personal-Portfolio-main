import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

// Technology icon mapping using emoji and symbols
const getTechIcon = (tech) => {
    const iconStyle = { fontSize: '18px', marginRight: '6px', display: 'inline-block' };
    
    switch (tech.toLowerCase()) {
        case 'react.js':
        case 'react':
            return <span style={{ ...iconStyle, color: '#61DAFB' }}>⚛️</span>;
        case 'node.js':
        case 'nodejs':
            return <span style={{ ...iconStyle, color: '#339933' }}>🟢</span>;
        case 'javascript':
            return <span style={{ ...iconStyle, color: '#F7DF1E' }}>📜</span>;
        case 'html':
        case 'html5':
            return <span style={{ ...iconStyle, color: '#E34F26' }}>🌐</span>;
        case 'css':
        case 'css3':
            return <span style={{ ...iconStyle, color: '#1572B6' }}>🎨</span>;
        case 'php':
            return <span style={{ ...iconStyle, color: '#777BB4' }}>🐘</span>;
        case 'mysql':
            return <span style={{ ...iconStyle, color: '#4479A1' }}>🗄️</span>;
        case 'express':
            return <span style={{ ...iconStyle, color: '#ffffff' }}>⚡</span>;
        case 'wordpress':
            return <span style={{ ...iconStyle, color: '#21759B' }}>📝</span>;
        case 'woocommerce':
            return <span style={{ ...iconStyle, color: '#96588A' }}>🛒</span>;
        case 'react router':
            return <span style={{ ...iconStyle, color: '#CA4245' }}>🔗</span>;
        case 'context api':
            return <span style={{ ...iconStyle, color: '#61DAFB' }}>🔄</span>;
        case 'localstorage':
            return <span style={{ ...iconStyle, color: '#FFA500' }}>💾</span>;
        default:
            return <span style={iconStyle}>⚙️</span>;
    }
};

const MyWork = () => {
    return (
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My Latest Projects</h1>
                <img src={theme_pattern} alt="Theme pattern" />
            </div>

            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div key={index} className="work-format">
                        <div className="work-image-container">
                            <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                                <img className="work_img" src={work.w_img} alt={work.w_name} />
                            </a>
                        </div>
                        <h2 className='wName'>{work.w_name}</h2>
                        <p className="work-description">{work.w_Disciption}</p>
                        
                        <div className="technologies-section">
                            <h3 className="tech-title">
                                <span className="tech-icon">🔧</span>
                                Technologies
                            </h3>
                            <div className="tech-container">
                                {work.w_Technologies.map((tech, techIndex) => (
                                    <div key={techIndex} className="tech-tag">
                                        {getTechIcon(tech)}
                                        <span>{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default MyWork;