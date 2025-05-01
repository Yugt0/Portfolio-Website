import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <style>{`
        .header {
          background-color: #0d6efd;
          color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          text-decoration: none;
          color: white;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #cce5ff;
        }
      `}</style>

      <header className="header">
        <nav className="nav">
          <div className="logo">My Portfolio</div>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About Me</Link></li>
            <li><Link to="/education" className="nav-link">Education</Link></li>
            <li><Link to="/projects" className="nav-link">Projects</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
