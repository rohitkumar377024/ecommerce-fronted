import axios from "axios";
import React, { useState } from "react";


function Register() {

    const [name, setName] = useState("")

    const [password, setPassword] = useState("")

    const [email, setEmail] = useState("")

    const [number, setNumber] = useState("")

    function registeruser() {

        axios
            .post("http://localhost:5000/users/register",{ 
                name:name,
                emailAddress: email,
                phoneNumber:number,
                password:password
            })
            .then(res=>console.log(res.data))


    }

    return (
        <div>
            <input onChange={(e) => setName(e.target.value)} type="name" placeholder="name" />

            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" />

            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />

            <input onChange={(e) => setNumber(e.target.value)} type="number" placeholder="number" />

            <button onClick={registeruser} type="submit" className="btn btn-outline-dark"><b>Submit</b></button>

        </div>

    );
}
export default Register;