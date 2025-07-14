import React from 'react';
import Image from '../assets/background.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../assets/payments/card.png'; // Assuming you have a card image in your assets
import Google from '../assets/payments/google.png'; // Assuming you have a Google Pay image in your assets
import SBI from '../assets/payments/sbi.png'; // Assuming you have SBI logo in your assets
import HDFC from '../assets/payments/hdfc.png'; // Assuming you have HDFC logo in your assets
import ICICI from '../assets/payments/icici.png'; // Assuming you have ICICI logo in your assets
import Axis from '../assets/payments/image.png'; // Assuming you have Axis logo in your assets
const banks = [
  { name: 'SBI', logo: SBI },
  { name: 'HDFC', logo: HDFC },
  { name: 'ICICI', logo: ICICI },
  { name: 'Axis', logo: Axis },
];

const RegisterPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // <-- centers vertically
        padding: '40px 20px',
        paddingLeft: '150px',
        paddingRight: '210px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1000px',
          backgroundColor: 'rgba(12, 6, 36, 0.92)',
          border: '2px solid #00e6f6',
          borderRadius: '30px',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          boxShadow: '0 0 30px rgba(0, 0, 0, 0.8)',
          padding: '40px',
        }}
      >
        <h2 className="text-center fw-bold mb-4" style={{ color: '#d633ff', fontSize: '2.5rem' }}>
          Hackathon Registration Form
        </h2>

        <p className="text-center text-info fw-bold mb-5" style={{ fontSize: '1.2rem' }}>
          Description: Should be filled by Team Leader
        </p>

        <form>
          <div className="row mb-3">
            <div className="col-md-6 mb-3">
              <label className="form-label text-info fw-bold">Full Name</label>
              <input type="text" className="form-control bg-dark text-white border-info" placeholder="First Name" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label text-info fw-bold">Last Name</label>
              <input type="text" className="form-control bg-dark text-white border-info" placeholder="Last Name" />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label text-info fw-bold">Email Address</label>
            <input type="email" className="form-control bg-dark text-white border-info" placeholder="example@example.com" />
          </div>

          <div className="mb-3">
            <label className="form-label text-info fw-bold">Phone Number</label>
            <input type="tel" className="form-control bg-dark text-white border-info" placeholder="0000-000-000" />
          </div>

          <div className="mb-3">
            <label className="form-label text-info fw-bold">Address</label>
            <input type="text" className="form-control bg-dark text-white border-info" />
          </div>

          <div className="row mb-3">
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control bg-dark text-white border-info" placeholder="District" />
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control bg-dark text-white border-info" placeholder="State" />
            </div>
          </div>

          <div className="mb-3">
            <input type="text" className="form-control bg-dark text-white border-info" placeholder="Pin Code" />
          </div>

          <div className="mb-3">
            <label className="form-label text-info fw-bold">Institution/Company</label>
            <input type="text" className="form-control bg-dark text-white border-info" />
          </div>

          <div className="mb-3">
            <label className="form-label text-info fw-bold">Role/Position</label>
            <input type="text" className="form-control bg-dark text-white border-info" />
          </div>

          <div className="mb-3">
            <label className="form-label text-info fw-bold">Skills/Expertise</label>
            <input type="text" className="form-control bg-dark text-white border-info" />
          </div>

          <div className="mb-3">
            <textarea className="form-control bg-dark text-white border-info" placeholder="Example: Web development, Robotics, UI, etc..." rows="2" />
          </div>

          <div className="mb-3">
            <label className="form-label text-info fw-bold">Additional Comments</label>
            <textarea className="form-control bg-dark text-white border-info" rows="2" />
          </div>

          <div className="mb-4">
            <p className="text-warning fw-bold">Consent and Agreement</p>
            <p><strong>Code of Conduct Agreement: </strong>I have read and agree to abide by the hackathon's code of conduct.</p>
            <p><strong>Photo Consent:</strong>I consent to the use of my photos/videos taken during the event for promotional purposes.</p>
            <p><strong>Waiver:</strong>I understand and accept the risks associated with participating in the hackathon and release the organizers from any liability</p>
          </div>

         {/* Payment Section */}
<div className="mb-5 p-4 rounded" style={{ border: '2px solid #00e6f6', backgroundColor: 'rgba(255,255,255,0.02)' }}>
  <p className="fw-bold text-info mb-3 fs-5">To pay: <span className="text-success">Rs.999</span></p>
  <p className="fw-bold text-white mb-3">Select payment method:</p>

  <div className="row row-cols-1 row-cols-md-2 g-4">
    {/* Pay by UPI */}
    <div className="col">
      <div className="border border-secondary rounded p-3 h-100">
        <h6 className="fw-bold text-white mb-3">Pay by UPI</h6>
        <div className="d-flex align-items-center mb-2">
          <input type="radio" name="payment" id="gpay" className="form-check-input me-2" />
          <label htmlFor="gpay" className="form-check-label text-white fw-semibold me-2">
            <img src={Google} height="24" />
            <span className="ms-2">GPay</span>
          </label>
        </div>
        <button className="btn btn-outline-light btn-sm mt-2 w-100">+ Add new UPI ID</button>
      </div>
    </div>

    {/* Cards */}
    <div className="col">
      <div className="border border-secondary rounded p-3 h-100">
        <h6 className="fw-bold text-white mb-3">Cards</h6>
        <div className="d-flex align-items-center mb-2">
          <input type="radio" name="payment" id="card" className="form-check-input me-2" />
          <label htmlFor="card" className="form-check-label text-white fw-semibold me-2">
            <img src={Card} alt="Visa" height="24" />
            <span className="ms-2">Visa</span>
          </label>
        </div>
        <button className="btn btn-outline-light btn-sm mt-2 w-100">+ Add new Credit/Debit Cards</button>
      </div>
    </div>

    {/* Netbanking */}
    <div className="col">
  <div className="border border-secondary rounded p-3 h-100">
    <h6 className="fw-bold text-white mb-3">Netbanking</h6>
    <div className="d-flex flex-wrap gap-2">
      {banks.map((bank, idx) => (
        <button key={idx} className="btn btn-sm btn-outline-light d-flex align-items-center gap-2">
          <img src={bank.logo}  width="24" height="24" />
          {bank.name}
        </button>
      ))}
      <button className="btn btn-sm btn-outline-light">More Banks</button>
    </div>
  </div>
</div>

    {/* Wallets */}
    <div className="col">
      <div className="border border-secondary rounded p-3 h-100">
        <h6 className="fw-bold text-white mb-3">Wallets</h6>
        {[
          { name: 'Amazon Pay Balance', linked: true },
          { name: 'PhonePe' },
          { name: 'Mobikwik Wallet' }
        ].map((wallet, idx) => (
          <div key={idx} className="form-check mb-2">
            <input className="form-check-input" type="radio" name="wallet" id={`wallet-${idx}`} />
            <label className="form-check-label text-white" htmlFor={`wallet-${idx}`}>
              {wallet.name} {wallet.linked && <span className="text-danger ms-1">Link</span>}
            </label>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

          <div className="text-center">
            <button
              type="submit"
              className="btn fw-bold"
              style={{
                backgroundColor: '#d633ff',
                color: 'white',
                padding: '12px 40px',
                borderRadius: '25px',
                fontSize: '1.3rem',
              }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;