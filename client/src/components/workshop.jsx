import React from 'react';

const workshops = [
  {
    title: 'Solder & Spark Badge Workshop',
    description:
      "Dive into the electrifying world of electronics at Unicon 2025’s Soldering a Badge Village, hosted by the innovative ISTRG crew! This isn’t just a workshop—it’s a thrilling, hands...",
    speakers: 'By Mohammed Saqeeb Shariff, Karthik Ekanathan',
    name: 'Karthik Ekanathan',
    role: 'QE engineer @ Crestron',
  },
];

const WorkshopCard = ({ data }) => (
  <div style={cardStyle}>
    <div style={{ flex: 1 }}>
      <div style={{ color: '#ff00d4', fontWeight: 'bold', fontSize: '12px', marginBottom: '5px' }}>WORKSHOP</div>
      <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>
        {data.title}
      </div>
      <div style={{ color: '#00f6ff', fontSize: '14px', marginBottom: '10px' }}>{data.description}</div>
      <div style={{ color: '#aaa', fontSize: '12px', marginBottom: '20px' }}>{data.speakers}</div>
      <div style={{ color: '#fff', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '6px', fontWeight: '500' }}>Read more</span>
        <span style={{ fontSize: '16px' }}>→</span>
      </div>
    </div>
    <div style={{ marginLeft: '20px', textAlign: 'center' }}>
      <div style={avatarStyle}></div>
      <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '14px' }}>{data.name}</div>
      <div style={{ color: '#00f6ff', fontSize: '12px' }}>{data.role}</div>
    </div>
  </div>
);

const WorkshopsSection = () => {
  return (
    <div style={{ backgroundColor: '#0b0020', padding: '60px 20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2 style={{ fontSize: '48px', fontWeight: '900', color: '#d633ff', marginBottom: '40px' }}>WORKSHOPS</h2>
      
      {/* Row 1 */}
      <div style={rowStyle}>
        <WorkshopCard data={workshops[0]} />
        <WorkshopCard data={workshops[0]} />
      </div>

      {/* Row 2 */}
      <div style={rowStyle}>
        <WorkshopCard data={workshops[0]} />
        <WorkshopCard data={workshops[0]} />
      </div>
    </div>
  );
};

// Styles
const rowStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  marginBottom: '30px',
  flexWrap: 'wrap'
};

const cardStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  border: '1px solid #00f6ff',
  borderRadius: '10px',
  padding: '20px',
  maxWidth: '500px',
  minHeight: '220px',
  width: '100%',
  backgroundColor: '#10002b',
};

const avatarStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: '#ccc',
  marginBottom: '10px',
};

export default WorkshopsSection;
