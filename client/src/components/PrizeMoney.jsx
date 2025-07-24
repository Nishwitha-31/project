import React from 'react';
import Prize1 from '../assets/prize1.png'; 
import Prize2 from '../assets/prize2.png';
import Prize3 from '../assets/prize3.png'; 

const prizes = [
  {amount: '₹30,000', image: Prize1 },
  {amount: '₹20,000', image: Prize2 },
  {amount: '₹10,000', image: Prize3 },
];

const PrizesRewardsSection = () => {
  return (
    <div
      style={{
        backgroundColor: '#0c0624',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          color: '#d633ff',
          fontWeight: '900',
          fontSize: '42px',
          fontFamily: 'Kufam',
          marginBottom: '40px',
        }}
      >
        🏆 Prizes & Rewards
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {prizes.map((prize, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              color: '#0c0624',
              padding: '20px',
              borderRadius: '12px',
              width: '200px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
              textAlign: 'center',
            }}
          >
            <img
              src={prize.image}
              style={{
                width: '70px',
                height: '70px',
                objectFit: 'contain',
                marginBottom: '12px',
              }}
            />
            <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>{prize.position}</h4>
            <p
              style={{
                backgroundColor: '#d633ff',
                color: 'white',
                borderRadius: '6px',
                padding: '6px 12px',
                fontWeight: '600',
                display: 'inline-block',
              }}
            >
              {prize.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizesRewardsSection;
