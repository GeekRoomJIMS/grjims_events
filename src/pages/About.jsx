import React from 'react'
import './About.css'
import img2 from '../assets/Map.png'

function About() {
  return (
    <div>
        <div className="about-container">
        <h2 className='h2'>ABOUT</h2>
        <div className="about-content">
          <div className="about-text">
            <h4 className='h4'>
              HackVortex isn't just a hackathon—it's where
              over 300+ passionate developers collide,
              igniting sparks of innovation and birthing
              champions of the tech world. With themes
              spanning AI & web3, fintech, healthcare,
              edtech, and beyond, CodeClash offers a
              dynamic arena for collaboration, competition,
              and unbounded creativity.
            </h4>
            <p className='p'>
              <strong>Venue:</strong><br />
              Jagan Institute Of Management Studies, Rohini Sector-5, Industrial Area, Near Rithala Metro, New delhi
              110085
            </p>
          </div>
          <div className="about-image">
            <img src={img2} alt="Venue satellite view" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
