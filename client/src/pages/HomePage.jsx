import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navBar';
import AboutSection from '../components/AboutUs'; // ← Import here
import backgroundImage from '../assets/image.png';
import TracksSection from '../components/TracksSection'; 
import PrizesRewardsSection from '../components/PrizeMoney';

const HackathonLandingPage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-06-20T00:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{
          background: 'black',
          color: 'white',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          textAlign: 'center',
          paddingTop: '80px',
          position: 'relative',
        }}
      >
        <Navbar />

        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', lineHeight: '1.3' }}>
            BUILD.<br />BREAK.<br />INNOVATE.
          </h1>
          <h4 className="text-info mt-4">
            Join the Ultimate 36-Hour Hackathon Experience <br />– June 20–22, 2025
          </h4>

          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <button className="btn btn-outline-light px-4 py-2" style={{ backgroundColor: '#b04cff', borderRadius: '10px', fontWeight: 'bold' }}>
              Register Now
            </button>
            <button className="btn btn-outline-light px-4 py-2" style={{ borderColor: '#b04cff', color: '#b04cff', borderRadius: '10px', fontWeight: 'bold' }}>
              View Challenges
            </button>
          </div>

          <div className="d-flex justify-content-center gap-4 mt-5 fs-5 flex-wrap">
            <div><div className="fs-3">{timeLeft.days}</div>Days</div>
            <div><div className="fs-3">{String(timeLeft.hours).padStart(2, '0')}</div>Hours</div>
            <div><div className="fs-3">{String(timeLeft.minutes).padStart(2, '0')}</div>Minutes</div>
            <div><div className="fs-3">{String(timeLeft.seconds).padStart(2, '0')}</div>Seconds</div>
          </div>
        </div>
      </div>

      {/* Add About Section Below Hero */}
      <AboutSection />
      {/*TrackSection*/}
       <TracksSection />
      {/* Prizes and Rewards Section */}
      <PrizesRewardsSection />
    </>
  );
};

export default HackathonLandingPage;
