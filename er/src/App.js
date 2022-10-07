import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import equipment from "./components/equipment";
import equipmentForm from "./components/equipmentForm";
import Students from "./components/students";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/equipment/:id" component={equipmentForm} />
            <Route path="/equipment" component={equipment} />
            <Route path="/students" component={Students} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/equipment" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
