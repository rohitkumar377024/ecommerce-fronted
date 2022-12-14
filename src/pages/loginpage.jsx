import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';

function Loginpage() {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [password, setPassword] = useState("");


    function loginuser(e) {

        e.preventDefault()

        axios

            .post("http://localhost:5000/users/login", { emailAddress: name, password: password })

            .then(response => {

                console.log(response.data)

                if (response.data.status == 200) {

                    localStorage.setItem("isLoggedIn", "true");

                    window.location.reload()
                }

            })
            .catch(error => console.log(error))
    }
    return (
        <div className="d-flex container">

            <div className="d-flex align-items-center p-2 text-center">

                <form>

                    <h1 className="py-5">Log In <span><FiLogIn /></span></h1>

                    <input className="namebar rounded-3 "
                        type="text" 
                        placeholder="   Name or Email"
                        required
                        onChange={(e) => setName(e.target.value)} /><br /><br />

                    <input className="passwordbar rounded-3"
                        type="password"
                         placeholder="   Password"
                         required
                        onChange={(e) => setPassword(e.target.value)} /><br /><br />

                    <div>
                        <button onClick={loginuser}
                            type="submit"
                            className="btn px-5 m-3 btn-danger"><b>submit</b></button>
                    </div>
                    <a href="/register" className=" text-dark text-decoration-none p-5" ><h6><b>Creat Account</b></h6></a>
                </form>
            </div>
            <div>
                <img className="loginpageimage " src="https://ii1.pepperfry.com/media/catalog/product/a/m/800x880/amanda-one-seater-sofa-in-steel-grey-colour-by-casacraft-amanda-one-seater-sofa-in-steel-grey-colour-ploroe.jpg" alt="image ki maad chud gye h" />

            </div>

        </div>
    );
}
export default Loginpage;