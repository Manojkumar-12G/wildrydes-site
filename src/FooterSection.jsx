import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import {
    faMapMarkerAlt,
    faPhone,
    faEnvelope
  } from '@fortawesome/free-solid-svg-icons';

import "./FooterSection.css"; // Import the CSS file

const FooterSection = () => {
  return (
    
    <section className="two-grids-section">
      {/* First Grid */}
      <div className="first-grid">
        <h2>First Grid Header</h2>
        <span className="firstgridpara">
          This is a paragraph in the first grid. You can add more content here
          as needed.
        </span>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Your Company Name
        </div>
      </div>

      {/* Second Grid */}
      <div className="second-grid">
        {/* Section 1 - Services */}
        <div className="section">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#m" style={{color:"white"}}>Service 1</a>
            </li>
            <li>
              <a href="#n">Service 2</a>
            </li>
            <li>
              <a href="#j">Service 3</a>
            </li>
            <li>
              <a href="#g">Service 4</a>
            </li>
            <li>
              <a href="#y">Service 5</a>
            </li>
            <li>
              <a href="#i">Service 6</a>
            </li>
          </ul>
        </div>

        {/* Section 2 - Useful Links */}
        <div className="section">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="#i">Link 1</a>
            </li>
            <li>
              <a href="#i">Link 2</a>
            </li>
            <li>
              <a href="#i">Link 3</a>
            </li>
            <li>
              <a href="#i">Link 4</a>
            </li>
            <li>
              <a href="#i">Link 5</a>
            </li>
            <li>
              <a href="#i">Link 6</a>
            </li>
          </ul>
        </div>

        {/* Section 3 - Contacts */}
        <div className="section">
          <h3>Contacts</h3>
          <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} />  Your Address
          <br />
          <FontAwesomeIcon icon={faPhone} /> +91-9876543210
          <br />
          <FontAwesomeIcon icon={faEnvelope} /><a href="mailto:xyz@gmail.com" style={{ color: 'white' }}>xyz@gmail.com</a>
        </p>
          <div className="follow-us-section">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <div>
                <a
                  href="https://www.facebook.com/your-facebook-page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }}/>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/your-linkedin-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }}/>
                </a>
              </div>
              <div>
                <a
                  href="https://www.twitter.com/your-twitter-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default FooterSection;
