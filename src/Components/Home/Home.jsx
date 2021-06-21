import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { About } from "../About/About";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};
