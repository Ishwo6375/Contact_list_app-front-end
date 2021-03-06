import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserContainer.css";

function UserContainer() {
  //setting initial state to empty array//
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //fetch data from json server// GET method
  useEffect(() => {
    getUsers();
  }, []);

  //this function is called at a first time and whenever delete api is done//
  function getUsers() {
    fetch("https://contact-list-phase2-app.herokuapp.com/users")
      .then((res) => res.json())
      .then((userData) => setUsers(userData));
  }

  // Implementing Delete method to delete data from database//
  function deleteUser(userId) {
    fetch(`https://contact-list-phase2-app.herokuapp.com/users/${userId}`, {
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
    <div className="container bg">
      <input
        type="text"
        placeholder="search employee... "
        className="form-control search-input"
        onChange = {(e)=> {
          setSearchTerm(e.target.value)
        }}
      />
      <div className="py-4">
        <h1>Employee Records</h1>
        <table className="table">
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
            {users.filter(value =>{
              if (searchTerm === '') {
                return value;
              }else if(
                value.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                value.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                value.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                value.phone.toLowerCase().includes(searchTerm.toLowerCase())
              )
              {
                return value
              }
            }).map(
              (
                user,
                idx //use map to users array to show single user to dom//
              ) => (
                <tr key={idx} className="table-css">
                  <th scope="row">{idx + 1}</th>
                  {/* <th scope="row">{user.id}</th> */}
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link
                      className="btn btn-primary mx-3"
                      to={`/UserForm/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-outline-success mx-3"
                      to={`/UserForm/viewuser/${user.id}`}
                    >
                      View
                    </Link>

                    <button
                      onClick={() => deleteUser(user.id)}
                      className="btn btn-danger mx-2"
                    >
                      Delete
                    </button>
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

export default UserContainer;
