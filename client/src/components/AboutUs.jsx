import React from 'react';

const AboutSection = () => {
  return (
    <div
      id="about"
      style={{
        backgroundColor: '#0c0624',
        color: 'white',
        padding: '80px 20px',
      }}
    >
      {/* Centered Title and Paragraph */}
      <div className="container text-center mb-5">
        <h2 style={{ color: '#d633ff', fontWeight: '900', fontSize: '72px',fontfamily: 'Kufam'}}>ABOUT US</h2>
        <p
          style={{
            color: '#00e6f6',
            fontWeight: '900',
            fontSize: '24px',
            maxWidth: '800px',
            margin: '20px auto 0',
            fontfamily: 'Kufam',
          }}
        >
          Hack the Future 2025 is a 36-hour virtual/in-person hackathon where coders,
          designers, and creators from around the world come together to build
          cutting-edge solutions. Whether you're a beginner or a pro, this is your stage
          to innovate.
        </p>
      </div>

      {/* Icons + Box Row */}
      <div className="container d-flex flex-column flex-md-row align-items-start justify-content-between gap-4">
        {/* Feature List */}
        <div className="mb-4" style={{ maxWidth: '600px', fontSize: '24px', lineHeight: '1.8' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>💡 10+ Problem Statements</li>
            <li>🛡️ Prizes Worth ₹5,00,000</li>
            <li>🟣 Open to All (Students & Professionals)</li>
            <li>📡 Workshops & Mentorship</li>
            <li>🔀 Hybrid Mode (Join Online or Onsite – Delhi)</li>
          </ul>
        </div>

        {/* Right Box */}
        <div
          style={{
            backgroundColor: '#d9d9d9',
            borderRadius: '12px',
            width: '300px',
            height: '220px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '20px',
            boxSizing: 'border-box',
          }}
        >
          <button
            style={{
              alignSelf: 'center',
              padding: '10px 20px',
              backgroundColor: '#2c1a40',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
            }}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
