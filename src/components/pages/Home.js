import React, { useState, useEffect } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  //fetch data from json server// GET method
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((userData) => setUsers(userData));
  }, []);

  function deleteEmployee(id) {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then(data => console.warn(data))
     
  }

  //  function deleteEmployee(userId) {
  //   const URL = `http://localhost:3000/users/${userId}`;
  //   const config = { method: "DELETE" };
  //   fetch(URL, config)
  //     .then(r => r.json())
  //     .then(() => {
  //       const newUsers = users.filter(user => user.id !== userId);
  //       setUsers(newUsers);
  //     })
  // }

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
            {users.map(
              (
                user,
                idx //implemented map over users to show single user to table in dom//
              ) => (
                <tr key={idx}>
                  {/* <th scope="row">{idx + 1}</th> */}
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button class="btn btn-danger mx-2">View</button>
                    <button class="btn btn-primary mx-2">Edit</button>
                    <button
                      onClick={() => deleteEmployee(user.id)}
                      class="btn btn-danger mx-2"
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

export default Home;
