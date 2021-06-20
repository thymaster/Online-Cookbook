import React from "react";
import { Navbar } from "./Navbar";
import { About } from "./About";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};
