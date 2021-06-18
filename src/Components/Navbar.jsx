import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <body>
      <header className="navbar">
        <div className="logo">
          <span>
            <h1>Bits n Bytes</h1>
          </span>
        </div>
        <div className="signup">
          <span>
            <button className="btn btn-slide">
              <h2>Contact</h2>
            </button>
          </span>
          <span>
            <button className="btn btn-slide">
              <h2>Sign In</h2>
            </button>
          </span>
          <span>
            <button className="btn btn-slide">
              <h2>Sign Up</h2>
            </button>
          </span>
        </div>
      </header>
    </body>
  );
};
