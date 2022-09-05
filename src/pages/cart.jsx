import axios from "axios";
import React from "react";
import { useEffect } from "react";



function Cart () {
    
// 1 useeffect --- list (at start)
// 2 onclick ==== increment (plus) --- Add to Cart API, remove button --- Remove from Cart API

// const userID = localStorage.getItem("userID")
//  --> localhost:5000/users/cart/${userID}

 useEffect (() => {
     axios
     .post(`localhost:5000/user/cart/$userId`)
     .then((Response) => console.log(Response.data.cart.usetId))
     .catch((error)=>console.log(error))


    //  const (()=>{
    //     axios
    //     .get(``)
    //     .then(()=>)
    //     .catch
    //     const (()=>{

    //     })
    //  })


 },[]);



    return (
        <div>

            <dic></dic>
            <div>
                <img src="" alt="" />
            </div>
        </div>


    );
}
export default Cart;