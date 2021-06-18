import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <div className="brand-title">
          <h1>Bits n Bytes</h1>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
