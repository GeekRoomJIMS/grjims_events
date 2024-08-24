import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="landing-page">
            <main>
                <div className="content">
                    <h1>DISCOVER THE LATEST FASHION</h1>
                    <p>Elevate your wardrobe with our curated collection of stylish and high-quality apparel, accessories</p>
                    <button className="shop-now">Shop Now</button>
                </div>
                <div className="image-container">
                    {/* <div className="rotating-image" style={{transform: `rotateY(${rotation}deg)`}}> */}
                    <div className="rotating-image">
                        <img src={img} alt="Fashion models" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Hero;