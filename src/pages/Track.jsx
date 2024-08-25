import React from 'react'
import './Track.css'
import img3 from '../assets/AI ML.png'
import img4 from '../assets/EduTech.png'
import img5 from '../assets/HealthCare.png'
import img6 from '../assets/Fintech.png'
import img7 from '../assets/Open Innovation.png'
import img8 from '../assets/Web3.png'

function Track() {
  return (
    <div>
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
    </div>
  )
}

export default Track