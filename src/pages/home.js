import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
//import {Link} from "react-router-dom";
 
function Home (){

    const images = [
        { url: "https://www.ikea.com/in/en/images/products/bergmund-chair-cover-orrsta-light-grey__0859542_pe780965_s5.jpg" },
        { url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wingback-chair-1575497792.jpg?crop=1xw:1xh;center,top&resize=980:*" },
        { url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/windsor-chair-1575568796.png?crop=1.00xw:0.925xh;0,0.0597xh&resize=980:*" },
      ];
    return(


    <div className="Home ">

        
 
        <div className='d-flex container'>

            <div className='d-flex flex-column w-50 justify-content-center p-5 m-5 gap-5'>
                <h1><b>Welcome to <br/>your dream furniture.</b></h1>

                <div>
                      <button className='btn  btn-outline-dark px-5 py-2'><b>SHOP NOW</b></button>
                </div>    
            </div>

            <div>  
                <SimpleImageSlider
                  width={600}
                  height={600}
                  images={images}
                  showBullets={true}
                  showNavs={true}/>
            </div>

            <div className='text-center m-5'>
                <h6>2022 * NEW DELHI-NCR</h6>
            </div>

        </div> 
    </div>       

    );
}
export default Home;
