import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import AddEmployeeForm from "./components/EmployeeForm/AddEmployeeForm";
import { useHistory } from "react-router-dom";

function App() {

  let history = useHistory();

//seeting useState to hold data from form//
  //setting initial value to empty string//

  const [user, setUsers] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  
 function onHandleChange(e){
  setUsers({...user,[e.target.name]: e.target.value})
 }


 


 function onSubmitUser(e){
  e.preventDefault();
    const config = {
     method:"POST",
     headers: {
       "Content-Type": "application/json",
     }, 
     body: JSON.stringify({
       name: user.name,
       username:user.username,
       email: user.email,
       phone: user.phone
     })
   }

   fetch('http://localhost:3000/users', config)
   .then(res => res.json())
   .then(newUser => {
     const newUsers = [user, newUser];
     setUsers(newUsers)
    
    
   })
 
 }
  
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
            <AddEmployeeForm onHandleChange={onHandleChange} user={user} onSubmitUser={onSubmitUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
