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
                  <img className="picture" src="./anish_400x400.jpg" alt="avatar" />
                </div>
              </div>
            </div>
            <p className="about">
              As the designer and developer I take care of the visual features and the technical details to make sure you have seamless
              experience. Should you come across any bug, feel free to contact me.
            </p>
            <address className="email"><a className="email-hyperlink" href="mailto:sarkaranish0099@gmail.com">sarkaranish0099@gmail.com</a></address>
          </div>
          <div className="graphic"></div>
        </div>
      </div>
    </div>
  );
};
