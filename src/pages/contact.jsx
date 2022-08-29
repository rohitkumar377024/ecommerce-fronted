import React from "react";

function Contact() {
   return (
      <div className="d-flex contact container vh-100">
         <div className="d-flex flex-column text-center w-50 justify-content-center">
            <h1><b>Contact Us</b></h1>
            <div>
               <button className="btn btn-outline-dark px-5"><b>Lets Talk</b></button>
            </div>
         </div>

         <div className="d-flex gap-5 flex-column  justify-content-center text-center w-50">

            <div className="px-5 d-flex gap-5">

               <h3 className=" text-secondary"><b>phone</b></h3>
               <a href="callto:8586918598" className="link-dark d-flex align-items-center text-decoration-none"><b>8586918598</b></a>

            </div>

            <div className="px-5 d-flex gap-5">

               <h3 className="text-secondary"><b>e-mail</b></h3>
               <a href="mailto:email" className="link-dark d-flex align-items-center text-decoration-none"><b>hemantarya7860@gmail.com</b></a>

            </div>

            <div className="px-5 d-flex gap-5">

               <h3 className="text-secondary"><b>linkedin</b></h3>
               <a href="linkedin" className="link-dark d-flex align-items-center text-decoration-none"><b>hemantarya7860@gmail.com</b></a>

            </div>

         </div>

      </div>
   );
}
export default Contact;