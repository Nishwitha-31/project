import React from 'react';
import aiImg from '../assets/AI.png';
import innovationImg from '../assets/innovation.png';
import web3Img from '../assets/web3.png';
import climateImg from '../assets/climate.png';
import ideathonImg from '../assets/ideathon.png';

const tracks = [
  { title: 'AI & ML', img: aiImg },
  { title: 'Open Innovation', img: innovationImg },
  { title: 'Web3 & Blockchain', img: web3Img },
  { title: 'Climate Tech', img: climateImg },
  { title: 'Ideathon Based', img: ideathonImg },
];

const TracksSection = () => {
  return (
    <div style={{ backgroundColor: '#0c0624', color: 'white', padding: '60px 20px' }}>
      <div className="container text-center">
        <h2
          style={{
            color: '#d633ff',
            fontWeight: '900',
            fontSize: '72px',
            fontFamily: 'Kufam',
          }}
        >
          🧠 Tracks or Themes
        </h2>

        {/* First Row: 3 items */}
        <div className="d-flex justify-content-center flex-wrap gap-5 mt-5">
          {tracks.slice(0, 3).map((track, idx) => (
            <div
              key={idx}
              className="d-flex flex-column align-items-center"
              style={{ maxWidth: '236px' }}
            >
              <img
                src={track.img}
                alt={track.title}
                style={{
                  width: '236px',
                  height: '168px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  marginBottom: '10px',
                }}
              />
              <p
                style={{
                  color: '#00e6f6',
                  fontWeight: '1000',
                  fontFamily: 'Kyiv*Type Titling',
                  fontSize: '24px',
                }}
              >
                {track.title}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row: 2 items centered */}
        <div className="d-flex justify-content-center flex-wrap gap-5 mt-4">
          {tracks.slice(3).map((track, idx) => (
            <div
              key={idx}
              className="d-flex flex-column align-items-center"
              style={{ maxWidth: '236px' }}
            >
              <img
                src={track.img}
                alt={track.title}
                style={{
                  width: '236px',
                  height: '168px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  marginBottom: '10px',
                }}
              />
              <p
                style={{
                  color: '#00e6f6',
                  fontWeight: '1000',
                  fontFamily: 'Kyiv*Type Titling',
                  fontSize: '24px',
                }}
              >
                {track.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TracksSection;
