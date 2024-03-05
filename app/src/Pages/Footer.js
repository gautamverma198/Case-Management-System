import React from 'react'
import "../CSS/Footer.css"
const Footer = () => {
  return (
    <>
    <footer>
        <div class="footer-container">
          <div class="footer-section">
            <h2>LINKS</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/newclient">Sign up</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h2>RESOURCES</h2>
            <ul>
              <li><a href="https://github.com/gautamverma198"  target="_blank">Github</a></li>
              <li><a href="https://www.instagram.com/gautam___v"  target="_blank">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/gautam-verma-879650227/"  target="_blank">LinkedIn</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h2>CONTACT CREATOR</h2>
            <p href="/cleint">Email: vermagautam1927@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
