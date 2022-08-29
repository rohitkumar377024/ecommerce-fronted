import React from 'react'
import { Link } from 'react-router-dom';
import { BiCategoryAlt} from 'react-icons/bi';
import { CgProfile} from 'react-icons/cg';
import { MdOutlinePermContactCalendar} from 'react-icons/md';
import { BsTextLeft } from 'react-icons/bs';
import { FcAbout } from 'react-icons/fc';
function Navbar() {
    return (
        <nav>

            <div className=' container d-flex justify-content-between flex-wrap' >


                <div>
                    <h1><b><a href='/' className='text-dark text-decoration-none'>Furniture Store</a></b></h1>
                </div>


                <div className='gap-5 d-flex align-items-center '>
                    <Link to="/about" className="text-dark text-decoration-none" ><b>About</b><span className='px-2'><FcAbout/></span></Link>
                    <Link to="/contact" className="text-dark text-decoration-none"><b>Contact<span className='px-2'><MdOutlinePermContactCalendar/></span> </b></Link>
                    <Link to="./category" className="text-dark text-decoration-none"><b>category<span className='px-2'><BiCategoryAlt/></span></b></Link>
                    <Link to="./Loginpage" className="text-dark text-decoration-none"><b>LogIn<span className='px-2'><CgProfile/></span></b></Link>
                    <Link to="./Register" className="text-dark text-decoration-none"><b>Register<span className='px-2'><BsTextLeft/></span> </b></Link>
                  

                </div>
            </div>
        </nav>
    )
}

export default Navbar