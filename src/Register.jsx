import axios from "axios";
import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const [number, setNumber] = useState("");

  function registeruser(e) {

    e.preventDefault();

    axios 
      .post("http://localhost:5000/users/register", {
        name: name,
        emailAddress: email,
        phoneNumber: number,
        password: password,
      })
      .then((res) => console.log(res.data));
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" >
        
      <form onSubmit={registeruser} className="d-flex flex-column gap-4" >
      <h1>Register here</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          type="name"
          required
          placeholder="name"
          className="form-control"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
          requried
          className="form-control"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
          className="form-control"
        />

        <input
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          placeholder="number"
          required
          className="form-control"
        />

        <button type="submit" className="btn btn-danger">
          Creat Account
        </button>
      </form>
    </div>
  );
}
export default Register;
