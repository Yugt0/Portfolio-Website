import React from 'react';

function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background-color: #212529;
          color: #ffffff;
          text-align: center;
          padding: 1rem 0;
          margin-top: auto;
          font-size: 0.95rem;
          box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.1);
        }

        .footer p {
          margin: 0;
          letter-spacing: 0.5px;
        }

        @media (max-width: 600px) {
          .footer {
            font-size: 0.85rem;
            padding: 0.75rem 0;
          }
        }
      `}</style>

      <footer className="footer">
        <p>&copy; 2025 Yutrago. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
