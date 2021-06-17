import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span>
        <h1>Breaking Bite</h1>
      </span>
      <span>
        <button>
          <h2>Contact</h2>
        </button>
      </span>
      <span>
        <button>
          <h2>Sign In</h2>
        </button>
      </span>
      <span>
        <button>
          <h2>Sign Up</h2>
        </button>
      </span>
    </div>
  );
};
