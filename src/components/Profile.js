import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log(userId);

    if (!userId) {
      navigate("/");
      return;
    }

    const fetchUser = async () => {
      try {
          const response = await fetch(`https://dummyjson.com/users/${userId}`);
          const data = await response.json();

        // const response = await axios.post(
        //   `https://dummyjson.com/users/${userId}`
        // );
        // const data = response.data;

        console.log(data);

        setUser(data);
        
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container profile">
      <h1>Profile</h1>
      <p>ID: {user.id}</p>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
