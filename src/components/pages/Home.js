import React, { useState, useEffect } from "react";

function Home() {
  const [users, setUser] = useState([]);

  //fetch data from json server// GET method
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((userData) => setUser(userData));
  }, []);

  //mapping users data to show to Dom

  
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
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            
        {users.map((user, idx) => (
              <tr>
                <th scope="row">{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
