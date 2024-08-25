import React from 'react'
import img1 from '../assets/Events.jpg'
import './Hero.css'

function Hero() {
  return (
    <div>
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
    </div>
  )
}

export default Hero