import React from 'react';

function About() {
  return (
    <>
      <style>{`
        .about-container {
          max-width: 900px;
          margin: 3rem auto;
          padding: 2.5rem;
          background-color: #ffffff;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          border-radius: 12px;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s ease;
        }

        .about-container:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .about-title {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
          color: #343a40;
          text-align: center;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .about-title:hover {
          color: #0d6efd;
        }

        .about-text {
          font-size: 1.2rem;
          line-height: 1.75;
          color: #495057;
          text-align: justify;
          margin-bottom: 2rem;
        }

        .about-image {
          max-width: 180px;
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: block;
          border: 4px solid #0d6efd;
          transition: transform 0.3s ease;
        }

        .about-image:hover {
          transform: scale(1.1);
        }

        .about-footer {
          font-size: 1rem;
          color: #6c757d;
          text-align: center;
          margin-top: 2rem;
        }

        .about-footer a {
          color: #0d6efd;
          text-decoration: none;
          font-weight: 500;
        }

        .about-footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .about-container {
            padding: 1.5rem;
          }

          .about-title {
            font-size: 2rem;
          }

          .about-text {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="about-container">
        <img
          src="mememem.png"
          alt="Your Name"
          className="about-image"
        />
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hi, I'm Fren Sua Yutrago, a passionate developer from Cabuyao. I enjoy coding, playing games, and learning new technologies. 
          I am always excited to take on new challenges and improve my skills. Whether it's building a personal project, collaborating with a team,
          or solving complex problems, I'm eager to keep learning and growing in my field.
        </p>
        <div className="about-footer">
          <p>Feel free to connect with me via <a href="mailto:yutragofrensua95@gmail.com">email</a> or follow me on <a href="https://web.facebook.com/TeBkaP" target="_blank" rel="noopener noreferrer">Facebook</a>!</p>
        </div>
      </div>
    </>
  );
}

export default About;
