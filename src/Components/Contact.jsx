import React from "react";
// import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import "../Styles/Contact.css";

export const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* <Link to="/contact"></Link> */}
      <div className="floating-container">
        <div className="floating-card">
          <div className="information">
            <div className="photopraph-div">
              <div className="photograph-alignment">
                <div className="photograph">
                  <img src="anish_400x400.jpg" alt="avatar" />
                </div>
              </div>
            </div>
          </div>
          <div className="graphic"></div>
        </div>
      </div>
    </div>
  );
};
