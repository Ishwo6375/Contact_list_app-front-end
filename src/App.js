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




function App() {
  //seeting useState to hold data from form//
  //setting initial value to empty string//
 
  const [user, setUsers] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  function onHandleChange(e) {
    setUsers({...user, [e.target.name]: e.target.value });
  }
  

  //Implementing POST method to add Employee
  function onSubmitUser(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:3000/users", config)
      .then((res) => res.json())
      .then((newUser) => {
        const newUsers = [user, newUser];
        setUsers(newUsers);
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
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/UserForm/add">
            <AddUserForm
              onHandleChange={onHandleChange}
              user={user}
              onSubmitUser={onSubmitUser}
            />
          </Route>
          <Route exact path="/UserForm/edit">
            <EditUserForm 
            onHandleChange={onHandleChange}
            user={user}
           
             />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
