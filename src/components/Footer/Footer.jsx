import React from "react";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="left-side">
        Made with ❤️ by mimo
      </div>
      <div className="right-side">
        <Link to="/contactus" className="contact-link">Contact Us</Link>  {/* Use Link instead of a */}
      </div>
    </footer>
  );
}

export default Footer;
