import React, { useState, useEffect } from "react";
import {  Link } from "react-router-dom";



function Home() {

 
  const [users, setUsers] = useState([]);
  

  //fetch data from json server// GET method
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((userData) => setUsers(userData));
  }, []);



 
   
  

  return (
    <div className="container">
      <div className="py-4">
        <h1>Employee Records</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, idx) => ( //implemented map over users to show single user to table in dom//
              <tr key={idx}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button class="btn btn-danger mx-2" >View</button>
                  <Link className="btn btn-danger mx-3" to="/EmployeeForm/edit">Edit User</Link>
                  <button  class="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
