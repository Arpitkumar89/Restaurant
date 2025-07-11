import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// Pages
import Home from './Home';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Menu from './pages/Menu';
import About from './pages/Abouts';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import ForgotPassword from './pages/ForgotPass';
import Dashboard from './pages/Dashboard';
import OrderPage from './pages/OrderPage';
import Add from './pages/Add';
// Components

import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
         <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="Order/" element={<OrderPage />} />
          <Route path="/add" element={<Add />} />
        </Routes>
        
      </Router>
     
      <Footer />
    </>
  );
}

export default App;

