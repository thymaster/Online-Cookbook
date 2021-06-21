import React from "react";
import { Register } from "./Components/Register/Register";
import { Signin } from "./Components/Signin/Signin";
import { Home } from "./Components/Home/Home";
import { Contact } from "./Components/Contact/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/signin" component={Signin} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
