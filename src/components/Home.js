import React from 'react';

function Home() {
  return (
    <>
      <style>{`
        .home-container {
          text-align: center;
          padding: 6rem 2rem;
          background-color: #ffffff;
          border-radius: 15px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          max-width: 1000px;
          margin: 0 auto;
        }

        .home-container:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .home-title {
          font-size: 4rem;
          color: #0d6efd;
          font-weight: 700;
          margin-bottom: 2.5rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          animation: fadeIn 1s ease-out;
        }

        .home-description {
          font-size: 1.3rem;
          color: #495057;
          line-height: 1.8;
          font-family: 'Roboto', sans-serif;
          max-width: 900px;
          margin: 0 auto;
          animation: fadeIn 1.2s ease-out;
        }

        .home-description span {
          font-weight: 600;
          color: #0d6efd;
        }

        .cta-button {
          margin-top: 2rem;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          color: #ffffff;
          background-color: #0d6efd;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-transform: uppercase;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background-color: #004aad;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .home-title {
            font-size: 2.8rem;
          }

          .home-description {
            font-size: 1.15rem;
          }

          .cta-button {
            font-size: 1rem;
            padding: 0.9rem 2.2rem;
          }
        }
      `}</style>

      <div className="home-container">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-description">
          This is a simple React website showcasing my background, education, projects, and contact information.
          <br />
          Feel free to explore the sections above to learn more about <span>Your Name</span>.
        </p>
        <a href="projects">
          <button className="cta-button">Explore My Work</button>
        </a>
      </div>
    </>
  );
}

export default Home;
