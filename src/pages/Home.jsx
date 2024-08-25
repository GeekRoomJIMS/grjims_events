import React, { useState, useEffect } from 'react';
import './Home.css';
import Schedule from './Schedule';

import Team from './Team';
import Hero from './Hero';
import About from './About';
import Track from './Track';
import Prizes from './Prizes';
import Navbar from './Navbar';
import Footer from './Footer';
import FAQ from './FAQ';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Track/>
      <Prizes/>
      <Schedule />
      <Team />
      <FAQ/>
      <Footer/>
    </>
  );
}

export default Home;
