import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState('');

 const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post("https://dummyjson.com/auth/login",{
                username: userName,
                password: password
            }, {
                headers: { 'Content-Type': 'application/json' }
            })
        //   const response = await fetch('https://dummyjson.com/auth/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ username: userName, password:password }),
        //   });
            console.log(response);
          const data = response.data;
          console.log(data);

          if (response.status == "200") {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.id);
            setError("");
            navigate("/profile");
            // history.push('/profile');
          } else {
            setError(data.message);
          }
        } catch (err) {
          setError('An unexpected error occurred.');
        }
      };
  

  return (
    <div className="container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Submit</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
