import React from 'react'
import './Prizes.css'

function Prizes() {
  return (
    <div>
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
    </div>
  )
}

export default Prizes