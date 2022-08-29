import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav>

            <div className=' container d-flex justify-content-between flex-wrap' >


                <div>
                    <h1><b><a href='/' className='text-dark text-decoration-none'>Furniture Store</a></b></h1>
                </div>


                <div className='gap-5 d-flex align-items-center '>
                    <Link to="/about" className="text-dark text-decoration-none" ><b>About</b></Link>
                    <Link to="/contact" className="text-dark text-decoration-none"><b>Contact</b></Link>
                    <Link to="./category" className="text-dark text-decoration-none"><b>Category</b></Link>
                    <Link to="./Loginpage" className="text-dark text-decoration-none"><b>Loginpage</b></Link>
                    <Link to="./Register" className="text-dark text-decoration-none"><b>Register</b></Link>
                  

                </div>
            </div>
        </nav>
    )
}

export default Navbar