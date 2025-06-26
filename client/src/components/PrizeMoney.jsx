import React from 'react';
import prizeImg from '../assets/prizes.png'; // <-- make sure to replace with your actual image path

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

      <div className="d-flex justify-content-center">
        <img
          src={prizeImg}
          alt="Prize Podium"
          style={{
            width: '100%',
            maxWidth: '500px',
            height: 'auto',
            borderRadius: '20px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
          }}
        />
      </div>
    </div>
  );
};

export default PrizesRewardsSection;
