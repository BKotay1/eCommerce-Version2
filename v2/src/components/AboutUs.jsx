import React from "react";
import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className="about-us">
        <header className="about-title">About Us</header>
        <p className="about-paragraph">
          Our Athletic programs give you access to the best online physical training programs in the world.
        </p>
        <p className="about-paragraph">Our main mission is keeping clients healthy and in top-tier shape.</p>
        <p className="about-paragraph">
          Besides that, we make a community impact to keep all our athletes from high school, College, and the Pro's
          ready for their season with world-class training and support!
        </p>
        <a href="/product" className="about-paragrph__link">Start your Training Program Today!</a>
      </div>
    )
}

export default AboutUs;