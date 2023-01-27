import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="left">
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png"
            alt=""
          />
          <div className="input">
            <input type="email" placeholder="Your Email" />
            <button>Send</button>
          </div>
        </div>
        <div className="right">
          <div className="about">
            <h1>About</h1>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/partners"}>Our Partners</Link>
            <Link to={"/services"}>Our Services</Link>
          </div>
          <div className="about">
            <h1>Contact</h1>
            <Link to={"/contact"}>Contact Us</Link>
            <Link to={"/faq"}>FAQ Page</Link>
            <Link to={"/aboutMe"}>About Me</Link>
          </div>
          <h1>Follow Us</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
