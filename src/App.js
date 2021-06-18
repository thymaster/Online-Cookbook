import React from "react";
import { Navbar } from "./Components/Navbar";
import { About } from "./Components/About";
import { Footer } from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
