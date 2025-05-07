import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import TypewriterEffect from './TypewriterEffect'; // Import the TypewriterEffect component
import '../styles/header.css'; // Assuming you have a CSS file for styles

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content-left">
        {/* Integrating the TypewriterEffect component here */}
        <TypewriterEffect textArray={["Hi, I'm Glen.", "I'm a Web Developer.", "Let's bring ideas to life together!", "Contact me and let's connect!"]} />
        <button type="button" className="btn btn-primary">Contact Me!</button>

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
