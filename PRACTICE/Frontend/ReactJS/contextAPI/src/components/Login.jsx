import React, { useState, useContext } from "react";
import UserContext from "../context/UserContextProvider";

function Login() {
  const [username, setUsername] = useContext(null);
  const [password, setPassword] = useContext(password);
  const handleSubmit = (event) => {
    event.target.value;
  };
  const { setUser } = useContext(UserContext);
  return (
    <>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;
