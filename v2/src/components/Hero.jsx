import React from "react";
import ImageSlider from "./ImageSlider";


const Hero = () => {
    return (
        <div className="Hero" >
        <ImageSlider />
         <div>
            <p className="hero-desc">STRONGER</p>
            <p className="hero-desc">FASTER</p>
            <p className="hero-desc">BETTER</p>
         </div>
        </div>
    );
};

export default Hero;