import React from 'react';
import icon from '../assets/icon.png'; // Adjust the path if needed

const Navbar = () => {
  return (
    <nav
      className="d-flex justify-content-between align-items-center px-4"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        background: 'teansparent',
        padding: '10px 0',
        backdropFilter: 'blur(6px)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* Logo */}
      <a href="#home" className="d-flex align-items-center">
        <img
          src={icon}
          alt="Hackathon Icon"
          style={{ width: '130px', height: '70px', objectFit: 'contain' }}
        />
      </a>

      {/* Nav Links */}
      <div className="d-flex gap-4">
        <a href="/" className="text-white text-decoration-none">HOME</a>
        <a href="#tracks" className="text-white text-decoration-none">EVENT</a>
        <a href="#contact" className="text-white text-decoration-none">CONTACT US</a>
        <a href="/faq" className="text-white text-decoration-none">FAQ</a>
        <a href="#about" className="text-white text-decoration-none">ABOUT US</a>
        <button className="text-white text-decoration-none">Rigistration</button>
      </div>
    </nav>
  );
};

export default Navbar;
