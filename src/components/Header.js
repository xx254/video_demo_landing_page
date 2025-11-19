import React from 'react';
import './Header.style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="title-wrapper">
          <h1 className="header-title">Personal Brand Videos — Powered by AI</h1>
          <a 
            href="https://veoapis.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="api-link"
          >
            Powered by VeoAPIs
          </a>
        </div>
        <p className="header-subtitle">
          Explore how AI perfectly replicates the narrative rhythm and cinematography of viral short videos
        </p>
      </div>
    </header>
  );
};

export default Header;

