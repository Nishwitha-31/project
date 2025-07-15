import React from 'react';
import handshake from '../assets/handshake.png'; // Illustration on the left
import prathibha from '../organizers/prathibha.png'; // Contact 1 image
import jishitha from '../organizers/jashitha.png';   // Contact 2 image

const SponsorSection = () => {
  return (
    <div id="sponsor" style={{ backgroundColor: '#0c0624', color: '#fff', padding: '60px 20px' }}>
      <div className="container">
        <h2
          style={{
            color: '#d633ff',
            fontSize: '2.5rem',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          SPØNSØR US
        </h2>

        <div className="row align-items-center">
          {/* Left Side Image */}
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <img src={handshake} alt="Sponsor Illustration" style={{ maxWidth: '80%', height: 'auto' }} />
          </div>

          {/* Right Side Contact Cards */}
          <div className="col-md-6">
            <div
              style={{
                border: '2px solid #7929ec',
                borderRadius: '16px',
                padding: '20px',
                backgroundColor: '#1a103d',
              }}
            >
              <h5 className="text-center" style={{ color: '#f946ff', marginBottom: '20px' }}>
                CONTACT US
              </h5>

              {/* Contact Card 1 */}
              <div className="d-flex align-items-center mb-4">
                <img
                  src={prathibha}
                  alt="V. Prathibha Reddy"
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '10px',
                    marginRight: '15px',
                    border: '1px solid #7929ec',
                  }}
                />
                <div>
                  <div style={{ fontWeight: 'bold', color: '#fff' }}>V. PRATHIBHA REDDY</div>
                  <div>PH NO : 99086 10927</div>
                  <div>Email : vendraprathibha@gmail.com</div>
                </div>
              </div>

              {/* Contact Card 2 */}
              <div className="d-flex align-items-center">
                <img
                  src={jishitha}
                  alt="Jishitha"
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '10px',
                    marginRight: '15px',
                    border: '1px solid #7929ec',
                  }}
                />
                <div>
                  <div style={{ fontWeight: 'bold', color: '#fff' }}>JISHITHA</div>
                  <div>PH NO : 73961 36668</div>
                  <div>Email : jishithareddykesari@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
