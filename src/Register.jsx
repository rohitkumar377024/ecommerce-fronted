import axios from "axios";
import React, { useState } from "react";


function Register(){
    function registeruser (){
        axios
        .get ( {email,name,password,number})
        .then ()

    }

    return (
        <div>
            <input onChange={e =>setName(e.target.value)} type="name" placeholder="name"/>

            <input onChange={e => setEmail(e.target.value)} type="email"  placeholder="email"/>

            <input onChange={e =>  setPassword(e.target.value)} type="Password" placeholder="Password" />

            <input onChange={e =>  setNumber(e.target.value)} type="number" placeholder="number" />

            <button  onClick={registeruser} type="submit" className="btn btn-outline-dark"> submit</button>

        </div>

    );
}
export default Register;