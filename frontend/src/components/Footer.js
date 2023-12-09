import React from 'react';
import './Footer.css'; // Zaimportowanie pliku ze stylami CSS
import logo from '../images/Logow.png'
import Facebook from '../images/Facebook.png';
import Instagram from '../images/Instagram.png';
import Linkedin from '../images/Linkedin.png';
function Foot() {
    const facebookLink = 'https://www.facebook.com/twojprofil';
    const instagramLink = 'https://www.instagram.com/twojprofil';
    const linkedinLink = 'https://www.linkedin.com/in/twojprofil';
  
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <img src={logo} alt="Footer Logo" className="footer-logo" />
            <div>
              <p>&copy; {new Date().getFullYear()} Wystaw.To </p>
              <ul className="footer-contact">
                <li>Kopernika 12/5, 45‐422 Opole, Poland</li>
                <li>+48 333 212 345</li>
                <li>wystawto@gmail.com</li>
                <li className="social-media-images">
                  <a href={facebookLink}><img src={Facebook} alt="Facebook" /></a>
                  <a href={instagramLink}><img src={Instagram} alt="Instagram" /></a>
                  <a href={linkedinLink}><img src={Linkedin} alt="LinkedIn" /></a>
                </li>
              </ul>
              
            </div>
            
          </div>
        </div>
      </footer>
    );
  }
  
  export default Foot;