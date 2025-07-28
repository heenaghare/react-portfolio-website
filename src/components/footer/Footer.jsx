import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        {/* First column */}
        <div className="col-md-3">
          <h5>Connect</h5>
          <p className="icon"> <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
          </p>
        </div>

        {/* Second column */}
        <div className="col-md-3">
          <h5>Navigation</h5>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>jQuery</p>
          <p>Bootstrap</p>
          <p>Javascript</p>
        </div>

        {/* Third column */}
        <div className="col-md-3">
          <h5>Services</h5>
          <p>Web Design</p>
          <p>eCommerce</p>
          <p>WordPress</p>
          <p>Frontend</p>
        </div>

        {/* Fourth column */}
        <div className="col-md-3">
          <h5>Contact:</h5>
          <p>Pune, India</p>
          <p>+91 9665194551</p>
          <p>heenaghare07@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
