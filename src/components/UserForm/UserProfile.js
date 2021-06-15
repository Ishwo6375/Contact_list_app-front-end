import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://contact-list-phase2-app.herokuapp.com/users/${id}`)
      .then((res) => res.json())
      .then((userData) => setUser(userData));
  }, []);

  return (
    <>
      <div className="container py-4">
        <ul className="list-group w-50">
     
          <h2 className="user-heading">Name: {user.name}</h2> <br />
          <img className="user-img " src={user.image} />
          <li className="user-list">User Name: {user.username}</li>
          <li className="user-list">Email: {user.email}</li>
          <li className="user-list">Phone: {user.phone}</li>
        </ul>
      </div>
    </>
  );
}

export default UserProfile;
