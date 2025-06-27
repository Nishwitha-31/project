import React from 'react';

// Sample logos (replace with actual logo image imports or URLs)
const logos = [
  'Google for Developers',
  'GitHub',
  'Education',
  'AWS',
  'Devfolio',
  'Google for Developers',
  'GitHub',
  'Education',
  'AWS',
  'Devfolio',
  'Streamlit',
  'CertifyMe',
];

const PartnersSection = () => {
  return (
    <div style={{ backgroundColor: '#0b0020', padding: '60px 20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2 style={{ fontSize: '48px', fontWeight: '900', color: '#d633ff', marginBottom: '10px' }}>
        PARTNERS IN BUILDING
      </h2>
      <h2 style={{ fontSize: '48px', fontWeight: '900', color: '#d633ff', marginBottom: '40px' }}>
        FOR BETTER
      </h2>

      <div style={logoGridStyle}>
        {logos.map((name, index) => (
          <div key={index} style={logoCardStyle}>
            <span style={{ fontWeight: '500', fontSize: '14px', color: '#111' }}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styling
const logoGridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',
};

const logoCardStyle = {
  backgroundColor: '#fff',
  borderRadius: '12px',
  padding: '20px 30px',
  minWidth: '160px',
  minHeight: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
};

export default PartnersSection;
