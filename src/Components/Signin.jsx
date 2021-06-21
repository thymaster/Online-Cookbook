import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Signin.css";

export const Signin = () => {
  return (
    <div className="floating-container">
      <div className="signin-form">
        <div className="title">
          <Link to="/">
            <a
              href="#"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <svg
                fill="green"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-20 h-20 rounded-half"
                viewBox="0 0 122.88 120.4"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="cls-1"
                  d="M3,103.28q33.87-.07,67.73,0a2.46,2.46,0,0,1,2.45,2.44c0,3.65-1.54,10.79-9.79,10.79H10.35c-8.25,0-9.78-7.14-9.78-10.79A2.45,2.45,0,0,1,3,103.28Zm56.86-59c18.83,14.5,25.55,8.78,36.34,3.46,8.27-4.07,11.5-7.93,21.54-3.86V29.1H59.88V44.28ZM96.62,24.65l3.78-14a3.42,3.42,0,0,1,1.82-2.3L117.7.44a3.48,3.48,0,0,1,3.4,6.07l-14.28,7.26-3,10.88.27-.84h16.5A2.22,2.22,0,0,1,122.77,26h0V54.26c0,18.35-10,32.59-28.74,34v25.82h14.55c1.23,0,2.21,1.94,2.21,3.16s-1,3.17-2.21,3.17H76.82l.48-.51a19.07,19.07,0,0,0,3.57-5.82h3.78V88.34c-1,0-2-.12-3-.23a15,15,0,0,0-1.06-2.57,13.5,13.5,0,0,0,1.26-1.89,14.16,14.16,0,0,0,1-11.25,23.44,23.44,0,0,0-4.81-8.35c-4.58-5.28-12.65-10.66-23.47-13.6V26a2.21,2.21,0,0,1,2.21-2.21H96.87l-.25.84ZM67.55,81.78H7a7,7,0,0,1-7-7H0c0-10,19.85-17.21,36.53-17.37,32.8-.33,47.52,24.36,31,24.36Zm-14-16.14a3.77,3.77,0,1,1-3.76,3.77,3.77,3.77,0,0,1,3.76-3.77Zm-32.81.27A3.77,3.77,0,1,1,17,69.68a3.77,3.77,0,0,1,3.76-3.77Zm16.28-3.59a3.77,3.77,0,1,1-3.77,3.77,3.77,3.77,0,0,1,3.77-3.77ZM73,91.38a1.13,1.13,0,0,1,.16.56c0,.13,0,.27,0,.41s0,.28,0,.4a1.17,1.17,0,0,1-.16.57c-.55,2.42-2.78,5.6-9.62,5.6H10.35c-6.84,0-9.06-3.17-9.62-5.6a1.17,1.17,0,0,1-.16-.57c0-.12,0-.26,0-.4a2.88,2.88,0,0,1,0-.41,1.13,1.13,0,0,1,.16-.56c.56-2.43,2.79-5.6,9.62-5.6H37.83L48,96.24,58,85.78h5.39c6.84,0,9.07,3.17,9.62,5.6Z"
                />
              </svg>
              <span className="ml-3 text-xl">Bits n Bytes</span>
            </a>
          </Link>
        </div>
        <div className="credentials">
          <div className="text-material">
            <label className="alignment" htmlFor="email" required>
              Email
            </label>
            <br />
            <input className="alignment" type="email" />
            <br />
            <label className="alignment" htmlFor="password" required>
              Password
            </label>
            <br />
            <input className="alignment" type="password" />
            <br />
            <a href="#">
              <div className="forgot-password">Forgot Password?</div>
            </a>
            <button className="signin-button">Sign In</button>
            <a href="#">
              <Link to="/register">
                <h2 className="alternate-instruction">
                  Not Registered Yet? Create An Account Instead!
                </h2>
              </Link>
            </a>
          </div>
          <div className="graphic"></div>
        </div>
      </div>
    </div>
  );
};
