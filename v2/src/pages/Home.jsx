import React from 'react';
// src/pages/Home.jsx
import Header from '../components/header';
import Hero from '../components/Hero';
import Motivation from '../components/Motivation';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Header />
    <Hero />
    <AboutUs />
    <Motivation />
    <Footer />
  </div>
);

export default Home;
