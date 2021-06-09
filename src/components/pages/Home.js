import React, { useState, useEffect } from "react";

function Home() {

  const [users, setUser] = useState([]);

//fetch data from json server// GET method
 useEffect(() => {
  fetch('http://localhost:3000/users')
  .then(res => res.json())
  .then(userData => setUser(userData))
 }, [])
 


  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
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
