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

  function populateUsers() {
    users.map((user, idx) => {
      <tr>
        <th >{idx + 1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>;
    });
  }

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
            <tr>
              {populateUsers()}
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
