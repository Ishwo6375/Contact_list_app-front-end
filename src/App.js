import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import AddUserForm from "./components/UserForm/AddUserForm";
import EditUserForm from "./components/UserForm/EditUserForm";
import UserContainer from "./components/pages/UserContainer";

function App() {
  //setting initial value as empty string to hold form data//
  const [formData, setformData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  function onHandleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  //Implementing POST method to add Employee
  function onSubmitAddUser(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
      }),
    };

    fetch("https://contact-list-phase2-app.herokuapp.com/users", config)
      .then((res) => res.json())
      .then((newUser) => {
        const newUsers = [formData, newUser];
        setformData(newUsers);
      });
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/employee">
            <UserContainer />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/UserForm/add">
            <AddUserForm
              onHandleChange={onHandleChange}
              formData={formData}
              onSubmitAddUser={onSubmitAddUser}
            />
          </Route>
          <Route exact path="/UserForm/edit/:id">
            <EditUserForm
              // onHandleChange={onHandleChange}
              // user={user}
              // onSubmitUser={onSubmitUser}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
