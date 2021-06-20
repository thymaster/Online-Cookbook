import React from "react";
import { Register } from "./Components/Register";
import { Signin } from "./Components/Signin";
import { Home } from "./Components/Home";
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
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
