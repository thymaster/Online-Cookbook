import React from "react";
import { Register } from "./Components/Register/Register";
// import { Signin } from "./Components/Signin/Signin";
import { Home } from "./Components/Home/Home";
import { Contact } from "./Components/Contact/Contact";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { CookBook } from "./Components/CookBook/CookBook";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/register"
              component={() => <Register isSignUp={true} />}
            />
            <Route
              path="/signin"
              component={() => <Register isSignUp={false} />}
            />
            <Route path="/contact" component={Contact} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/cookbook" component={CookBook} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
