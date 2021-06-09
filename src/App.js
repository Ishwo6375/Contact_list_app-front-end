import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import AddEmployeeForm from "./components/EmployeeForm/AddEmployeeForm";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home  />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/employee/add">
            <AddEmployeeForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
