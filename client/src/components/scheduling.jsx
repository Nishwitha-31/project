import React from 'react';

const Schedule = () => {
  return (
    <div style={{ backgroundColor: '#0c0624', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ marginRight: '40px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '24px' }}>Day 1</div>
          <div style={{ fontSize: '12px', color: '#bbb' }}>June 18, 2025</div>
          <div style={{ height: '2px', backgroundColor: '#00d5ff', marginTop: '5px' }}></div>
        </div>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '24px' }}>Day 2</div>
          <div style={{ fontSize: '12px', color: '#bbb' }}>June 19, 2025</div>
        </div>
      </div>

      <div style={{
        display: 'inline-block',
        border: '2px solid #9a00ff',
        borderRadius: '20px',
        overflow: 'hidden',
      }}>
        <table style={{ borderCollapse: 'collapse', width: '300px', backgroundColor: '#0c0624', color: 'white' }}>
          <tbody>
            <tr style={{ borderBottom: '1px solid #222' }}>
              <td style={{ color: '#00d5ff', padding: '10px', fontWeight: 'bold' }}>09:00 AM</td>
              <td style={{ padding: '10px' }}>Registration</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #222' }}>
              <td style={{ color: '#00d5ff', padding: '10px', fontWeight: 'bold' }}>10:00 AM</td>
              <td style={{ padding: '10px' }}>Opening ceremony</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #222' }}>
              <td style={{ color: '#00d5ff', padding: '10px', fontWeight: 'bold' }}>11:00 AM</td>
              <td style={{ padding: '10px' }}>Idea submission</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #222' }}>
              <td style={{ color: '#00d5ff', padding: '10px', fontWeight: 'bold' }}>12:00 PM</td>
              <td style={{ padding: '10px' }}>Round-1: Design Phase</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #222' }}>
              <td style={{ color: '#00d5ff', padding: '10px', fontWeight: 'bold' }}>02:00 PM</td>
              <td style={{ padding: '10px' }}>Lunch</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #222' }}>
              <td style={{ color: '#00d5ff', padding: '10px', fontWeight: 'bold' }}>03:00 PM</td>
              <td style={{ padding: '10px' }}>Round-2: Development of core code</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #222' }}>
              <td style={{ color: '#00d5ff', padding: '10px', fontWeight: 'bold' }}>09:00 PM</td>
              <td style={{ padding: '10px' }}>Dinner</td>
            </tr>
            <tr>
              <td style={{ color: '#00d5ff', padding: '10px', fontWeight: 'bold' }}>10:00 PM</td>
              <td style={{ padding: '10px' }}>Continuation Round-2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;