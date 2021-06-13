import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Home() {
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

  // Implementing Delete method to delete data from database//
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
            {users.map(
              ( user,idx ) => (
                <tr key={idx}>
                  <th scope="row">{idx + 1}</th>
                  {/* <th scope="row">{user.id}</th> */}
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link className="btn btn-danger mx-3" to={`/UserForm/edit/${user.id}`}>
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      class="btn btn-danger mx-2">Delete</button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
