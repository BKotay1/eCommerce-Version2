import React from "react";
// import { FontAwesomeIcon } from "react-fontawesome"
// import { faInstagram, faTwitter, faLinkedin, faFacebook, faSlack, faYoutube} from "fontawesome/free-brands-svg-icons";


const Footer = () => {
        return (
            <footer>
                <img src="./public/images/footer-logo.png" alt="footer-logo" class="footer-logo"></img>
              <div className="footer-icons">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
        
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
        
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
        
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook"></i>
                </a>
        
                <a href="https://www.slack.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-slack"></i>
                </a>
        
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
              <div class="footer-rights">
               <p> &copy; 2025 Copyright. All rights reserved. </p>
            <p class="privacy-link">Terms & Conditions.</p>
            <p class="privacy-link">Privacy Policy</p>
          </div>
            </footer>
    )
}

export default Footer;