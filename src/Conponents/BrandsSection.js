import React from "react";
import image1 from '../Assets/Images/image 4.png';
import image2 from '../Assets/Images/image 5.png';
import image3 from '../Assets/Images/image 14.png';
import image4 from '../Assets/Images/image 15.png';
import image5 from '../Assets/Images/image 16.png';
import image6 from '../Assets/Images/image 17.png';
import image7 from '../Assets/Images/image 18.png';
import image8 from '../Assets/Images/image 19.png';
import image9 from '../Assets/Images/image 20.png';

function BrandsSection(){
    return (
        <div>
           <div class="container brand">
            <h1>Join these brands</h1>
            <p>We've had the pleasure of working with industry-defining brands. These are just some of them.</p>

            <div class="partnership">
                <img alt="" src={image1}></img>
                <img alt="" src={image2}></img>
                <img alt="" src={image3}></img>
                <img alt="" src={image4}></img>
                <img alt="" src={image5}></img>
                <img alt="" src={image6}></img>
                <img alt="" src={image7}></img>
                <img alt="" src={image8}></img>
                <img alt="" src={image9}></img>
            </div>
        </div>
        </div>
    )
}

export default BrandsSection;