import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import "../Styles/Contact.css";

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <Link to="/contact"></Link>
    </div>
  );
};
