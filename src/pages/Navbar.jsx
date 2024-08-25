import React, {useState} from 'react'
import './Navbar.css'
import img from '../assets/Hack-Vortex-Logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

          <button className='faq-button'><a href='mailto:pritamshil880@gmail.com'>Get in Touch</a></button>
        </header>
      </div>
    </>
  )
}

export default Navbar