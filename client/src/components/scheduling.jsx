import React from 'react';

const schedule = [
  { start: '8:00', end: '9:30', event: 'Registration', speaker: '', track: '', type: 'normal' },
  { start: '9:30', end: '10:00', event: '', speaker: '', track: '', type: 'normal' },
  { start: '10:00', end: '10:30', event: 'Tea Break', speaker: '', track: '', type: 'break' },
  { start: '10:30', end: '11:00', event: '', speaker: '', track: '', type: 'normal' },
  { start: '11:00', end: '12:00', event: '', speaker: '', track: '', type: 'normal' },
  { start: '12:00', end: '12:30', event: '', speaker: '', track: '', type: 'normal' },
  { start: '12:30', end: '13:30', event: 'Lunch Break', speaker: '', track: '', type: 'break' },
  { start: '13:30', end: '14:30', event: '', speaker: '', track: '', type: 'normal' },
  { start: '14:30', end: '15:30', event: '', speaker: '', track: '', type: 'normal' },
  { start: '15:30', end: '16:30', event: '', speaker: '', track: '', type: 'normal' }, // <- Last but one (this will be tallest)
  { start: '16:30', end: '17:30', event: '', speaker: '', track: '', type: 'normal' },
];

const SchedulePreview = () => {
  return (
    <div style={{ backgroundColor: '#0b0020', padding: '60px 10px', color: 'rgba(28, 237, 244, 1)', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2 style={{ fontSize: '36px', color: '#d633ff', fontWeight: 900, marginBottom: '10px' }}>SCHEDULE PREVIEW</h2>

      {/* Day Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '20px' }}>
        <div>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Day 1</div>
          <div style={{ width: '100%', height: '2px', backgroundColor: '#00f6ff', margin: '4px 0' }}></div>
          <div style={{ fontSize: '12px', color: '#bbbbbb' }}>June 26, 2025</div>
        </div>
        <div>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Day 2</div>
          <div style={{ width: '100%', height: '2px', backgroundColor: '#00f6ff', margin: '4px 0' }}></div>
          <div style={{ fontSize: '12px', color: '#bbbbbb' }}>June 27, 2025</div>
        </div>
      </div>

      <h3 style={{ color: '#00f6ff', fontSize: '20px', marginBottom: '20px' }}>Kickoff Ceremony</h3>

      {/* Table Container */}
      <div style={{
        display: 'inline-block',
        border: '2px solid #d633ff',
        borderRadius: '15px',
        overflow: 'hidden',
        minWidth: '900px',
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#1a001f' }}>
              <th style={headerStyle}>Start</th>
              <th style={headerStyle}>End</th>
              <th style={hiddenHeaderStyle}></th>
              <th style={hiddenHeaderStyle}></th>
              <th style={hiddenHeaderStyle}></th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, index) => {
              const isLastButOne = index === schedule.length - 2;
              const rowStyle = row.type === 'break' ? breakRowStyle : normalRowStyle;

              return (
                <tr
                  key={index}
                  style={{
                    ...rowStyle,
                    height: isLastButOne ? '100px' : 'auto',
                  }}
                >
                  <td style={cellStyle}>{row.start}</td>
                  <td style={cellStyle}>{row.end}</td>
                  <td style={{ ...cellStyle, color: row.type === 'break' ? '#fff' : '#00f6ff' }}>{row.event}</td>
                  <td style={cellStyle}>{row.speaker}</td>
                  <td style={cellStyle}>{row.track}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Styles
const headerStyle = {
  padding: '12px 15px',
  border: '1px solid #d633ff',
  fontWeight: 'bold',
  color: '#fff',
  fontSize: '14px',
};

const hiddenHeaderStyle = {
  ...headerStyle,
  color: 'transparent',
  backgroundColor: '#1a001f',
};

const cellStyle = {
  padding: '12px 15px',
  border: '1px solid #d633ff',
  fontSize: '14px',
  textAlign: 'center',
};

const normalRowStyle = {
  backgroundColor: '#000',
};

const breakRowStyle = {
  backgroundColor: '#7929ec',
};

export default SchedulePreview;
