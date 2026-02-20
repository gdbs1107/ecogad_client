import React from 'react';

const PageHero = ({ title, subtitle, bgImage }) => {
  return (
    <div style={{
      position: 'relative',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      overflow: 'hidden',
      marginTop: '80px', // header height
      textAlign: 'center',
    }}>
      {/* Background Image with Dark Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.35)', // Darken for readability
        zIndex: 1,
      }}></div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: '800', 
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}>{title}</h1>
        <p style={{ 
          fontSize: '1.25rem', 
          opacity: 0.9, 
          maxWidth: '700px', 
          margin: '0 auto', 
          fontWeight: 400 
        }}>{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHero;
