import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import Navbar from './components/Navbar';
import Home from './Home';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Menu from './pages/Menu';
import About from './pages/Abouts';
import Contact from './pages/Contact';
import Footer from './components/Footer'
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/menu' element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />  
      </Routes>
   </Router>
    <Footer />
    </>
  );
}

export default App;
