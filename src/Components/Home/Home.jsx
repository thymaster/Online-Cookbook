import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { WelcomePage } from "../WelcomePage/WelcomePage";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <WelcomePage />
      <Footer />
    </div>
  );
};
