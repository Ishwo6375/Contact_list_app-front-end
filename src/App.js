import React, { useState, useEffect } from "react";

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
   const [users, setUsers] = useState([]);

  //fetch data from json server// GET method
  
  useEffect(() => {
    getUsers();
  }, []);

  //this function is called at a first time and whenever delete api is done//
  function getUsers() {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((userData) => setUsers(userData));
  }
    
     function deleteUser(userId) {
    fetch(`http://localhost:3000/users/${userId}`, {
      method: "DELETE",
    }).then((res) => {
      res.json().then(() => {
        const newUsers = users.filter((user) => user.id !== userId);
        setUsers(newUsers);
        getUsers();
      });
    });
  }

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  function onHandleChange(e) {
    setUser({...user, [e.target.name]: e.target.value });
  }
  

  //Implementing POST method to add Employee
  function onSubmitUser(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
      }),
    };

    fetch("http://localhost:3000/users", config)
      .then((res) => res.json())
      .then((newUser) => {
        const newUsers = [user, newUser];
        setUser(newUsers);
      });
  }

  


 
 

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home deleteUser={deleteUser} users={users}/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/UserForm/add">
            <AddUserForm
              // onHandleChange={onHandleChange}
              // user={user}
              // onSubmitUser={onSubmitUser}
            />
          </Route>
          <Route exact path="/UserForm/edit/:id">
            <EditUserForm 
            // onHandleChange={onHandleChange}
            // user={user}
           
             />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
