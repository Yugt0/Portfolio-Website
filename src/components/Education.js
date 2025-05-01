import React from 'react';

function Education() {
  return (
    <>
      <style>{`
        .education-container {
          max-width: 800px;
          margin: 3rem auto;
          padding: 2rem;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .education-title {
          font-size: 2.5rem;
          color: #0d6efd;
          margin-bottom: 2rem;
          text-align: center;
          text-transform: uppercase;
        }

        .education-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .education-item {
          background-color: #f8f9fa;
          padding: 1rem 1.5rem;
          margin-bottom: 1.2rem;
          border-left: 5px solid #0d6efd;
          border-radius: 6px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
        }

        .school-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #333;
        }

        .school-details {
          font-size: 1rem;
          color: #555;
        }

        @media (max-width: 768px) {
          .education-title {
            font-size: 2rem;
          }

          .school-name {
            font-size: 1.1rem;
          }

          .school-details {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <ul className="education-list">
          <li className="education-item">
            <div className="school-name">University of Cabuyao</div>
            <div className="school-details">Bachelor of Science in Information Technology (2022 - Present)</div>
          </li>
          <li className="education-item">
            <div className="school-name">Bigaa Integrated National High School</div>
            <div className="school-details">Junior & Senior High School (2016 - 2022)</div>
          </li>
          <li className="education-item">
            <div className="school-name">Bigaa Elementary School</div>
            <div className="school-details">Elementary Level (2010 - 2016)</div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Education;
