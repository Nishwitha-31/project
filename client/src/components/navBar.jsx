import React from 'react';
import icon from '../assets/icon.png'; // Adjust the path as necessary
const Navbar = () => {
  return (
    <div
      className="d-flex justify-content-between align-items-center px-4"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '10px 0',
      }}
    >
      <img src={icon} alt="Hackathon Icon" style={{ width: '130px', height: '40px' }} />
      <nav className="d-flex gap-4">
        <a href="#home" className="text-white text-decoration-none">HOME</a>
        <a href="#event" className="text-white text-decoration-none">EVENT ▾</a>
        <a href="#about" className="text-white text-decoration-none">ABOUT US</a>
        <a href="#contact" className="text-white text-decoration-none">CONTACT US</a>
        <a href="#sponsor" className="text-white text-decoration-none">SPONSOR US</a>
        <a href="#faq" className="text-white text-decoration-none">FAQ</a>
      </nav>
    </div>
  );
};

export default Navbar;
