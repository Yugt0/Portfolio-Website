import React from 'react';

function Projects() {
  return (
    <>
      <style>{`
        .projects-container {
          max-width: 1000px;
          margin: 3rem auto;
          padding: 2rem;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          font-family: 'Roboto', sans-serif;
        }

        .projects-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0d6efd;
          text-align: center;
          margin-bottom: 2rem;
          text-transform: uppercase;
          animation: fadeIn 1s ease-out;
        }

        .project-item {
          background-color: #f8f9fa;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          border-left: 5px solid #0d6efd;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .project-title {
          font-size: 1.4rem;
          color: #333;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .project-description {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .tech-stack {
          margin-top: 0.5rem;
        }

        .badge {
          display: inline-block;
          background-color: #0d6efd;
          color: white;
          font-size: 0.85rem;
          padding: 0.4rem 0.8rem;
          border-radius: 30px;
          margin: 0.25rem 0.25rem 0 0;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .badge:hover {
          background-color: #004aad;
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
          .projects-title {
            font-size: 2rem;
          }

          .project-title {
            font-size: 1.2rem;
          }

          .project-description {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>

        <div className="project-item">
          <h5 className="project-title">Portfolio Website</h5>
          <p className="project-description">
            A responsive React portfolio showcasing my skills, background, and projects.
          </p>
          <div className="tech-stack">
            <span className="badge">React</span>
            <span className="badge">Bootstrap</span>
            <span className="badge">HTML</span>
            <span className="badge">CSS</span>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">Ecommerce App</h5>
          <p className="project-description">
            An ecommerce platform built using React and Laravel, allowing users to browse and display products.
          </p>
          <div className="tech-stack">
            <span className="badge">React</span>
            <span className="badge">Laravel</span>
            <span className="badge">PHP</span>
            <span className="badge">MySQL</span>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">Task Management App</h5>
          <p className="project-description">
            A productivity app for managing tasks. Features add, edit, delete functionalities with persistence.
          </p>
          <div className="tech-stack">
            <span className="badge">React</span>
            <span className="badge">Laravel</span>
            <span className="badge">Local Storage</span>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">Electronic Medical Records</h5>
          <p className="project-description">
            A secure system for storing and managing patient health records in clinics or hospitals.
          </p>
          <div className="tech-stack">
            <span className="badge">React</span>
            <span className="badge">Laravel</span>
            <span className="badge">Express</span>
            <span className="badge">MySQL</span>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">Inventory Management System</h5>
          <p className="project-description">
            A full-featured system to track inventory levels, orders, and deliveries in real time.
          </p>
          <div className="tech-stack">
            <span className="badge">PHP</span>
            <span className="badge">MySQL</span>
            <span className="badge">JavaScript</span>
            <span className="badge">HTML</span>
            <span className="badge">CSS</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
