import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Productlist() {
    const [data, setData] = useState([]);
    const Navigate = useNavigate([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/products")
            .then((Response) => setData(Response.data.data))
            .catch((error) => console.log(error))
    }, [])




    return (
        <div className=" d-flex border border-success align-items-center">

            

            <div className="border border-primary d-flex gap-3">
                {data.map((item) => (
                    <div className=" border border-danger ">
                        <p>{item.id}</p>
                        <img className="imagebox border " src={item.imageUrl} alt="iimage not found" />
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>

        </div>



    )
}
export default Productlist;