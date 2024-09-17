import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Adjust the path as necessary

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Shaping Innovation. Scaling Entrepreneurship.</h1>
          <p className="hero-subtitle">
            Building a Future-Ready Innovation Ecosystem where Entrepreneurs Soar
          </p>
          <div className="hero-buttons">
            <button className="hero-button">
              <Link to="/startups" className="hero-link">
                Startups
              </Link>
            </button>
            <button className="hero-button">
              <Link to="/corporates" className="hero-link">
                Corporates
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Inspire, Build, Collaborate Section */}
      <div className="feature-section">
        <div className="feature-item">
          <div className="feature-icon">📖</div>
          <h2 className="feature-title">Startup</h2>
          <p className="feature-description">
            Inspiring innovation and bold ideas that turn dreams into reality.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔧</div>
          <h2 className="feature-title">IPR</h2>
          <p className="feature-description">
            Fueling disruptors and building a platform for tomorrow’s creators.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🤝</div>
          <h2 className="feature-title">Researchers</h2>
          <p className="feature-description">
            Forging powerful connections for collaborations to flourish.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
