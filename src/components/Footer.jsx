import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-newsletter-card">
          <div className="footer-newsletter-left">
            <h2 className="footer-title">GET ON THE VIP LIST</h2>
            <p className="footer-subtitle">
              Sign up for 15% off and be the first to know about our latest
              offers & news
            </p>
          </div>

          <div className="footer-newsletter-right">
            <div className="footer-input-row">
              <input
                className="footer-input"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="footer-input"
                type="email"
                placeholder="Your email"
              />
            </div>
            <button className="footer-signup-btn">SIGN UP</button>
            <p className="footer-legal">
              *By signing up, you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-column">
            <h3>SHOP</h3>
            <a href="#lip">Lip</a>
            <a href="#face">Face</a>
            <a href="#kits">Kits</a>
            <a href="#shop-all">Shop All</a>
          </div>

          <div className="footer-column">
            <h3>ABOUT</h3>
            <a href="#our-story">Our Story</a>
            <a href="#clinically-proven">Clinically Proven</a>
          </div>

          <div className="footer-column">
            <h3>HELP</h3>
            <a href="#contact">Contact Us</a>
            <a href="#faqs">FAQs</a>
          </div>

          <div className="footer-column">
            <div className="footer-social">
              <a
                href="https://facebook.com"
                aria-label="Meta"
                className="footer-social-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M5,19.5c0-4.6,2.3-9.4,5-9.4c1.5,0,2.7,0.9,4.6,3.6c-1.8,2.8-2.9,4.5-2.9,4.5c-2.4,3.8-3.2,4.6-4.5,4.6 C5.9,22.9,5,21.7,5,19.5 M20.7,17.8L19,15c-0.4-0.7-0.9-1.4-1.3-2c1.5-2.3,2.7-3.5,4.2-3.5c3,0,5.4,4.5,5.4,10.1 c0,2.1-0.7,3.3-2.1,3.3S23.3,22,20.7,17.8 M16.4,11c-2.2-2.9-4.1-4-6.3-4C5.5,7,2,13.1,2,19.5c0,4,1.9,6.5,5.1,6.5 c2.3,0,3.9-1.1,6.9-6.3c0,0,1.2-2.2,2.1-3.7c0.3,0.5,0.6,1,0.9,1.6l1.4,2.4c2.7,4.6,4.2,6.1,6.9,6.1c3.1,0,4.8-2.6,4.8-6.7 C30,12.6,26.4,7,22.1,7C19.8,7,18,8.8,16.4,11" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="footer-social-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                aria-label="TikTok"
                className="footer-social-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
