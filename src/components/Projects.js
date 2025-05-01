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
          transition: all 0.3s ease;
        }

        .projects-container:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .projects-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0d6efd;
          text-align: center;
          margin-bottom: 2rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          animation: fadeIn 1s ease-out;
        }

        .projects-title:hover {
          color: #004aad;
        }

        .project-item {
          background-color: #f8f9fa;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          border-left: 5px solid #0d6efd;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .project-item:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .project-title {
          font-size: 1.4rem;
          color: #333;
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .project-description {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .project-link {
          font-size: 1rem;
          font-weight: 600;
          color: #0d6efd;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .project-link:hover {
          color: #004aad;
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
          <h5 className="project-title">Project 1: Portfolio Website</h5>
          <p className="project-description">
            Built using React and Bootstrap. Showcases my personal background and projects. A responsive and interactive portfolio that highlights my skills and work.
          </p>
        </div>

        <div className="project-item">
          <h5 className="project-title">Project 2: Ecommerce App</h5>
          <p className="project-description">
            A simple ecommerce app using React and Laravel, with local storage support. It helps users to show their products in a sleek interface.
          </p>
        </div>  

        <div className="project-item">
          <h5 className="project-title">Project 3: Task Management</h5>
          <p className="project-description">
            A task management app using React and Laravel, with local storage support. It helps users to add, edit, and delete tasks in a sleek interface.
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
