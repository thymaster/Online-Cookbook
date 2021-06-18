import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="brand-title-footer">
          <h4>
            <a href="#">Bits n Bytes</a>
          </h4>
        </div>
        <div className="social-media-links">
          <ul>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Linkedin</a>
            </li>
            <li>
              <a href="">Git Hub</a>
            </li>
            <li>
              <a href="">Gmail</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms and Conditions</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </div>
        <div>C 2021 Bits n Bytes, ALL RIGHTS RESERVED</div>
      </footer>
    </div>
  );
};
