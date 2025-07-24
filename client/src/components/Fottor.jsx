import React from 'react';
import icon from '../assets/icon.png'; // Assuming you have a logo image in your assets
import {
  FaYoutube,
  FaWhatsapp,
  FaLinkedin,
  FaXTwitter,
  FaDiscord,
  FaFacebook
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#130225', color: 'white', padding: '40px 20px' }}>
      <div className="container">
        {/* Footer Grid */}
        <div className="row">
          {/* Logo and About */}
          <div className="col-md-4 mb-4">
            <img src={icon} alt="Vulincon Logo" className="mb-3" style={{ width: '150px' }} />
            <p style={{ fontSize: '14px' }}>
              We offer a dedicated platform to showcase innovations and provide education in information security,
              data protection, and privacy, fostering awareness and collaboration across industries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold" style={{ color: '#d633ff' }}>Quick Links</h6>
            <ul className="list-unstyled">
              {['Home', 'About', 'Our Team', 'Review Panel', 'Sponsor Us'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white text-decoration-none d-block mb-1">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Contact Us</h6>
            <p>
              Email: <a href="mailto:veltrixispvt.ltd@gmail.com" className="text-info">veltrixispvt.ltd@gmail.com</a>
            </p>
          </div>

          {/* Newsletter Again */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold" style={{ color: '#d633ff' }}>Subscribe to Our Newsletter</h6>
            <form className="d-flex gap-2">
              <input type="email" className="form-control" placeholder="Enter your e-mail" />
              <button className="btn btn-info fw-bold text-white">Subscribe</button>
            </form>
          </div>
        </div>

        <hr style={{ borderColor: '#444' }} />

        {/* Bottom */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-muted">
          <div>
            © 2025 Vulincon. All rights reserved.{' '}
            <a href="#" className="text-white ms-2 me-2">Privacy Policy</a>
            <a href="#" className="text-white me-2">Terms & Conditions</a>
            <a href="#" className="text-white">Legal</a>
          </div>
          <div className="mt-3 mt-md-0 d-flex gap-3 fs-5">
            <a href="#"><FaYoutube color="white" /></a>
            <a href="#"><FaWhatsapp color="white" /></a>
            <a href="#"><FaXTwitter color="white" /></a>
            <a href="#"><FaLinkedin color="white" /></a>
            <a href="#"><FaDiscord color="white" /></a>
            <a href="#"><FaFacebook color="white" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
