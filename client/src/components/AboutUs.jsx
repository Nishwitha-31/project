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
        </div>
        <p
          style={{
            color: '#00e6f6',
            fontWeight: '900',
            fontSize: '24px',
            maxWidth: '800px',
            margin: '20px auto 0',
            fontfamily: 'Kufam',
            textAlign: 'left',
          }}
        >
         Hack the Future 2025 is a 36-hour hybrid hackathon organized by CodeSurfers, bringing together coders, designers, tech enthusiasts, and innovators from around the globe to create groundbreaking technology solutions that shape the future.

Our mission is to cultivate a global ecosystem of innovation by empowering individuals of all skill levels to collaborate, experiment, and build impactful prototypes that address real-world challenges.

Hack the Future 2025, hosted in a virtual and on-site format, invites participants to co-create solutions across domains such as sustainability, education, healthcare, and future technologies — leveraging tools like cloud computing, AI, Web3, and more.

The hackathon serves as a platform for students, professionals, designers, and developers to join forces, explore ideas, and transform bold concepts into actionable projects. Through live mentorship, interactive workshops, and mini challenges, participants will gain hands-on experience, build strong networks, and explore pathways to launch their ideas globally.

        </p>

      {/* Icons + Box Row */}
      <div className="container d-flex flex-column flex-md-row align-items-start justify-content-between gap-4">
        {/* Feature List */}
        <div className="mb-4" style={{ maxWidth: '600px', fontSize: '24px', lineHeight: '1.8' }}>
          <p style={{ listStyleType: 'none', padding: 0 }}>
            “Hack the Future” empowers global innovators to design inclusive, scalable, and forward-thinking tech solutions. Participants will collaborate across time zones using cutting-edge tools, tackling pressing problems with creativity and purpose. The event is designed to be beginner-friendly, expert-driven, and deeply impact-focused — turning ideas into ventures that can thrive beyond the hackathon.”
          </p>
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