import React from "react";
// import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import "../Contact/Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="navbar-style-for-contact">
        <Navbar makeOpaque={true} />
      </div>
      {/* <Link to="/contact"></Link> */}
      <div className="floating-container">
        <h1 className="designer-name">Anish Sarkar</h1>
        <div className="floating-card">
          <div className="information">
            <div className="photopraph-div">
              <div className="photograph-alignment">
                <div className="photograph">
                  <img
                    className="picture"
                    src="/anish.jpg"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
            <p className="about">
              As the designer and developer I take care of the visual features
              and the technical details to make sure you have seamless
              experience. Should you come across any bug, feel free to contact
              me.
            </p>
            <address className="email">
              <a
                className="email-hyperlink"
                href="mailto:sarkaranish0099@gmail.com"
              >
                sarkaranish0099@gmail.com
              </a>
            </address>
          </div>
          <div className="graphic"></div>
        </div>
      </div>
    </div>
  );
};
