import React from "react";
import { Navbar } from "./Components/Navbar";
import { About } from "./Components/About";
import { Footer } from "./Components/Footer";
import { Register } from "./Components/Register";
// import "./App.css";

function App() {
  return (
    <div>
      <Register />
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
