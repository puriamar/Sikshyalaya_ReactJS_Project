import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Notfound from "./Notfound";
import School from "./components/school";
import Subject from "./components/Subject";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="content">
        <Switch>
          {/* <Route path="/loginform" component={LoginForm} />
          <Route path="/registerform" component={RegisterForm} /> */}

          <Route path="/Home" component={Home} />
          <Route path="/School/:name/:grade/:subject" component={Subject} />
          <Route path="/School/:name" component={School} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/not-found" component={Notfound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
