import React from 'react';

function Contact() {
  return (
    <>
      <style>{`
        .contact-container {
          max-width: 900px;
          margin: 3rem auto;
          padding: 2.5rem;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: 'Roboto', sans-serif;
          transition: all 0.3s ease;
        }

        .contact-container:hover {
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
        }

        .contact-title {
          font-size: 2.5rem;
          color: #0d6efd;
          font-weight: 700;
          margin-bottom: 2rem;
          text-align: center;
          letter-spacing: 1px;
          text-transform: uppercase;
          animation: fadeIn 1s ease-out;
        }

        .contact-info {
          font-size: 1.2rem;
          color: #555;
          line-height: 1.8;
          text-align: center;
          animation: fadeIn 1.2s ease-out;
        }

        .contact-info p {
          margin-bottom: 1.5rem;
        }

        .contact-info a {
          color: #0d6efd;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease, text-decoration 0.3s ease;
        }

        .contact-info a:hover {
          color: #004aad;
          text-decoration: underline;
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
          .contact-title {
            font-size: 2rem;
          }

          .contact-info {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        
        <div className="contact-info">
          <p>Email: <a href="mailto:yutragofrensua95@gmail.com">yutragofrensua95@gmail.com</a></p>
          <p>GitHub: <a href="https://https://github.com/Yugt0" target="_blank" rel="noopener noreferrer">Yugt0</a></p>
          <p>Facebook: <a href="https://web.facebook.com/TeBkaP" target="_blank" rel="noopener noreferrer">Frensua Delmo Yutrago</a></p>
        </div>
      </div>
    </>
  );
}

export default Contact;
