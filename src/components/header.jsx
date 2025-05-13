import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import TypewriterEffect from './TypewriterEffect'; // Import the TypewriterEffect component
import '../styles/header.css'; // Assuming you have a CSS file for styles

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content-left">
        {/* Integrating the TypewriterEffect component here */}
        <h1 className="hero-title">Hi, I'm Glen</h1>
        <TypewriterEffect textArray={[ "I'm a Web Developer.", "Let's bring ideas to life together!", "Contact me and let's connect!"]} />
        <button type="button" className="btn btn-primary">Contact Me!</button>
        <div className="icon-container" style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#fff',
              borderRadius: '50%',
              padding: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <i className="fa-brands fa-linkedin" style={{ fontSize: '20px', color: '#0A66C2' }}></i>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#fff',
              borderRadius: '50%',
              padding: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <i className="fa-brands fa-github" style={{ fontSize: '20px', color: '#333' }}></i>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#fff',
              borderRadius: '50%',
              padding: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <i className="fa-brands fa-facebook" style={{ fontSize: '20px', color: '#1877F3' }}></i>
          </a>
        </div>
      </div>
      <div className="hero-content-right">
        <img src="https://via.placeholder.com/400" alt="Hero" className="hero-image" />
      </div>
    </div>
  );
};

const Header = () => {
  return <HeroSection />;
};

export default Header;
