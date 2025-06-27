import React from 'react';

const people = [
  { name: 'Vicky Ray', role: 'Founder & CEO', link: '@vickyray' },
];

const TeamCard = ({ person }) => (
  <div className="col-6 col-md-3 mb-4 d-flex justify-content-center">
    <div
      style={{
        backgroundColor: 'transparent',
        border: '1px solid #7929ec',
        borderRadius: '12px',
        padding: '20px',
        textAlign: 'center',
        width: '100%',
        maxWidth: '160px',
      }}
    >
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '1px solid #7929ec',
          margin: '0 auto 10px',
        }}
      />
      <div style={{ color: '#ffffff', fontWeight: 'bold' }}>{person.name}</div>
      <div style={{ color: '#bbbbbb', fontSize: '0.9rem' }}>{person.role}</div>
      <div style={{ color: '#f946ff', fontSize: '0.9rem' }}>{person.link}</div>
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <div style={{ backgroundColor: '#0c0624', color: 'white', padding: '60px 20px' }}>
      <div className="container text-center">
        {/* Judges Section */}
        <h2 style={{ color: '#d633ff', fontWeight: '900', fontSize: '48px', marginBottom: '30px' }}>
          JUDGES
        </h2>
        <div className="row justify-content-center mb-5">
          {[...Array(4)].map((_, i) => (
            <TeamCard key={`judge-${i}`} person={people[0]} />
          ))}
        </div>
        {/* Mentors Section */}
        <h2 style={{ color: '#d633ff', fontWeight: '900', fontSize: '48px', marginBottom: '30px' }}>
          MENTORS
        </h2>
        <div className="row justify-content-center">
          {[...Array(8)].map((_, i) => (
            <TeamCard key={`mentor-${i}`} person={people[0]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
