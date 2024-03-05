import React from "react";
import '../CSS/Footer.css'
const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section about">
          <h1 class="logo-text">
            <span>VALORANT CENTER</span>
          </h1>
          <p>We strive to provide the best service to our customers.</p>
          <div class="contact">
            <span>
              <i class="fas fa-phone"></i> &nbsp; +1 236-514-4008
            </span>
            <span>
              <i class="fas fa-envelope"></i> &nbsp; vermagautam1927@gmail.com
            </span>
          </div>
          <div class="socials">
            <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/gautam-verma-879650227/">
              <i class="fab fa-linkedin"></i>
            </a>
            <a target="_blank"  rel="noreferrer" href="https://www.instagram.com/gautam___v/">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/about">
              <li>About</li>
            </a>
            <a href="/surveys">
              <li>Surveys</li>
            </a>
          </ul>
        </div>
        <div class="footer-section policies">
          <h2>Policies</h2>
          <ul>
            <a href="/">
              <li>Privacy Policy</li>
            </a>
            <a href="/">
              <li>Terms & Conditions</li>
            </a>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; VALORANT| GAUTAM VERMA
      </div>
    </footer>
  );
};

export default Footer;
