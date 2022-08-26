import React,{useEffect,useState} from "react";
import CategoryItem from "../components/CategoryItem"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { chairArray } from '../chairData';

function Category() {
   const [data,setData]=useState([]);

const navigate=useNavigate();

 useEffect (() =>{
    // axios
    // .get("http://localhost:5000/products/")
    // .then((res) => setData(res.data.message))
    // .catch((err) => console.log(err));
},[]);


    //const searchButton = document.getElementById('search-button');
    //const searchInput = document.getElementById('search-input');
    //searchButton.addEventListener('click', () => {
    //const inputValue = searchInput.value;
    //alert(inputValue);
    // });

    return (
        <div className="container" >
            <div className="text-center  container m-5 ">

                <h1><b>Search your dream furniture.</b></h1>

                <div className="d-flex container justify-content-center p-2">

                    <div className="px-5 m-2  container">

                        <input  className=" " type="search"/>
                    
                        <button className="btn btn-outline-dark mx-2 "><b>Search</b></button>
                        
                    </div>
                </div> 

            </div>
            <div className="d-flex flex-wrap  p-2 gap-2 justify-content-center ">
                {chairArray.map(chair => <CategoryItem name={chair.name} image={chair.image} />)}
            </div>
        </div>
    )
}
export default Category