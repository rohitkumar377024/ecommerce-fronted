import React, { useEffect, useState } from "react";
import { BiSearchAlt } from 'react-icons/bi';

import axios from "axios";

function Category() {

    const [data, setData] = useState([]);


    useEffect(() => {

        axios
            .get("http://localhost:5000/category")

            .then(response => setData(response.data.data))


    }, []);


    return (
        <div className="container" >

            <div className="text-center container m-5 ">

                <h1><b>Search your dream furniture.</b></h1>

                <div className="d-flex container justify-content-center p-2">

                    <div className="px-5 m-2 container">

                        <input className="searchbar m-2" placeholder="   search" type="search" />

                        <button className="btn btn-outline-dark "><b>search<span className="px-2"><BiSearchAlt/></span></b></button>

                    </div>

                </div>
                <div className="d-flex">
                    {data.map(item => <div className="categorybox m-3">

                        <img className="categoryimage" src={item.imageUrl} />

                        <p className="categorytext">{item.name}</p>

                    </div>)}
                </div>

            </div>

        </div>
    )
}
export default Category