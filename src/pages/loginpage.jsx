import axios from "axios";
import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
    const navigate = useNavigate()

    function loginuser(e){
        e.preventDefault()
        axios
        .post("http://localhost:5000/users/login", {emailAddress:"otamhan@gmail.com",password:"omkar@123"})
        .then(response =>{
            console.log(response.data)
            if (response.data.status==200){
                navigate("/")
            }

        } )
        .catch(error => console.log(error))
    }
    return (
        <div className="d-flex container">
            <div className="d-flex align-items-center border border-success">
                <form>

                    <input type="text" placeholder="Name or Email" /><br /><br />

                    <input type="password" placeholder="Password" /><br /><br />

                    <button  onClick={loginuser} type="submit" className="btn btn-outline-dark"> submit</button>
                </form>
            </div>
            <div>
                <img src="" alt=""/>

            </div>

        </div>
    );
}
export default Loginpage;