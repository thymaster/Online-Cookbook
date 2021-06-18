import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <body>
      <header className="navbar">
        <div className="brand-title">
          <h1>Bits n Bytes</h1>
        </div>
        <div className="navbar-links">
          <ul>
            <li className="li li-slide">
              <a href="#">Contact</a>
            </li>
            <li className="li li-slide">
              <a href="#">Sign In</a>
            </li>
            <li className="li li-slide">
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </header>
    </body>
  );
};
