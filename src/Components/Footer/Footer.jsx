import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="footer-address-part">
        {/* Contact */}
        <div className="footer-contact">
          <h1>Contact Us</h1>
          <ul>
            <li>
              <a href="#">
                <i className="bi bi-geo-alt-fill"></i> Location
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-telephone-fill"></i> Call +01 1234567890
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-envelope-fill"></i> demo@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Info */}
        <div className="footer-info">
          <h1>Feane</h1>
          <p>
            Necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with
          </p>

          <ul className="footer-social">
            <li>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Timing */}
        <div className="footer-timing">
          <h1>Opening Hours</h1>
          <p>Everyday</p>
          <p>10.00 Am - 10.00 Pm</p>
        </div>
      </div>
      <div className="copy-rights">
        <p>© 2025 All Rights Reserved By Free Html Templates</p>
        <p>© Distributed By ThemeWagon</p>
      </div>
    </footer>
  );
};

export default Footer;
