import React, { useState, useEffect } from 'react';

//src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import './App.css';






const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;

