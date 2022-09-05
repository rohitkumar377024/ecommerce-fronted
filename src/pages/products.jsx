import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Products() {


    const { id } = useParams();

    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const userId = localStorage.getItem("userId");



        useEffect(() => {
            axios
                .get(`http://localhost:5000/products/${id}`)
                .then((Response) => {
                    console.log(Response.data.data, "data from backend");
                    setData(Response.data.data);
                })

                .catch((error) => console.log(error));
        }, []);





        const addToCart = () => {
            console.log(userId, id);
            axios
                .post(`http://localhost:5000/users/cart/${userId}`, { product: id }, {})
                .then((Response) => console.log(Response.data))
                .catch((e) => console.log(e));

        };





        return (
            <div className="product">
                <div>
                    <div>
                        {data._id}
                        {data.name}
                    </div>
                    <div>
                        <img className="productimage" src={data.iamgeUrl} alt="image not found" />
                    </div>
                    <div>
                        {data.categoryId}
                    </div>
                </div>
                <div>
                    <div>
                        <button className="btn btn-danger" onClick={() => addToCart()}>buy now</button>
                    </div>
                </div>

            </div>

        );
    }

    export default Products;