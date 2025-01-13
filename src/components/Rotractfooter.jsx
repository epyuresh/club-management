import React from "react";
import "./RotractFooter.css"; // Updated file name to match convention

const Rotractfooter = () => {
  return (
    <footer className="rotract-footer">
      <div className="rotract-footer-columns">
        {/* Rotaract Club Section */}
        <div className="rotract-footer-column" style={{ marginRight: "20px" }}>
          <img
            src="rotractuok.png"
            alt="Rotaract Club Logo"
            className="rotractf-logo"
          />
          <p className="rotract-text">
            With a noble desire to serve humanity, the Rotaract Club of
            University of Kelaniya strives forth to give spirit and life to
            numerous projects done throughout the year focused on a clear vision
            and a mission.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="rotract-footer-column">
          <h4 className="rotract-heading">Contact Us</h4>
          <p className="rotract-text">
            Need help or have a question? <br />
            Contact us at: <a href="mailto:info@racuok.lk">info@racuok.lk</a>
          </p>
        </div>

        {/* RACUOK Section */}
        <div className="rotract-footer-column">
          <h4 className="rotract-heading">RACUOK</h4>
          <ul className="rotract-footer-list">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Events</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="rotract-footer-column">
          <h4 className="rotract-heading">Coming Soon On</h4>
          <div className="rotract-social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rotract-social-link"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rotract-social-link"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rotract-social-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rotract-social-link"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rotract-social-link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <hr className="rotract-footer-divider" />
      <div className="rotract-footer-bottom">
        <p>&copy; All Rights Reserved 2024</p>
      </div>
    </footer>
  );
};

export default Rotractfooter;
