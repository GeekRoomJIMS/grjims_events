import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Schedule from './Schedule';
import img from '../assets/Hack-Vortex-Logo.png'
import img1 from '../assets/Events.jpg'
import img2 from '../assets/Map.png'
import img3 from '../assets/AI ML.png'
import img4 from '../assets/EduTech.png'
import img5 from '../assets/HealthCare.png'
import img6 from '../assets/Fintech.png'
import img7 from '../assets/Open Innovation.png'
import img8 from '../assets/Web3.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timelineAnimation");
          document
            .querySelectorAll(".container, .container-mobile")
            .forEach((container) =>
              container.classList.add("timelineAnimationContainer")
            );
        }
      });
    };

    const options = {
      threshold: 0.2,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll("#timeline");
    divs.forEach((div) => observer.observe(div));
  });

  return (
    <>
      <div className="Navbar">
        <header>
          <div className="logo"><img src={img} alt="logo" width={100} /></div>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={isMenuOpen ? 'open' : ''}>
            <a href="#home">Home</a>
            <a href="#about">Theme</a>
            <a href="#products">Prices</a>
            <a href="#contact">Track</a>
            <a href="#faq">FAQ</a>
          </nav>
          <button className='faq-button'>Get in Touch</button>
        </header>
      </div>
      <div className="landing-page">
        <main>
          <div className="content">
            <h1 className='h1'>Innovate, code, and network at Hack-Vortex Tech Fest!</h1>
            <p>Jims, Rohini Sec-5</p>
            <button className="shop-now">Apply With DevFolio</button>
          </div>
          <div className="image-container">
            <img src={img1} alt="hack vortex" />
          </div>
        </main>
      </div>
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
      <div className="tracks-container">
        <h2 className="tracks-title">TRACKS</h2>
        <div className="tracks-grid">
          <div className="track-item">
            <img src={img7} alt="Open Innovation" />
            <p>Open Innovation</p>
          </div>
          <div className="track-item">
            <img src={img3} alt="AI ML" />
            <p>AI ML</p>
          </div>
          <div className="track-item">
            <img src={img8} alt="Web 3" />
            <p>Web 3</p>
          </div>
          <div className="track-item">
            <img src={img5} alt="Health Care" />
            <p>Health Care</p>
          </div>
          <div className="track-item">
            <img src={img4} alt="Edu Tech" />
            <p>Edu Tech</p>
          </div>
          <div className="track-item">
            <img src={img6} alt="FinTech" />
            <p>FinTech</p>
          </div>
        </div>
      </div>
      <div className="prizes-container">
        <h2 className="prizes-title">PRIZES</h2>
        <div className="prizes-grid">
          <div className="prize-item main-prize">
            <h3>Winning Team</h3>
            <p>Cash Prize: ₹15000</p>
            <p>Goodies worth ₹20000+</p>
          </div>
          <div className="prize-item">
            <h3>First Runner Up</h3>
            <p>Cash Prize: ₹8000</p>
            <p>Goodies worth ₹20000+</p>
          </div>
          <div className="prize-item">
            <h3>Second Runner Up</h3>
            <p>Cash Prize: ₹5000</p>
            <p>Goodies worth ₹20000+</p>
          </div>
          <div className="prize-item">
            <h3>All Girls Team</h3>
            <p>Cash Prize: ₹1000</p>
            <p>Goodies worth ₹20000+</p>
          </div>
          <div className="prize-item">
            <h3>All Freshers Team</h3>
            <p>Cash Prize: ₹1000</p>
            <p>Goodies worth ₹20000+</p>
          </div>
        </div>
        <div className="goodies-info">
          <p>+ Exciting <span>Goodies and Giveaways</span> for all participants</p>
        </div>
      </div>
      <Schedule />
    </>
  );
}

export default Navbar;
