import React from "react";
import iconOrganic from "../images/icon-save-plant.svg";
import iconHomemade from "../images/icon-bowl-and-spoon.svg";
import iconFree from "../images/icon-healthy-heart.svg";
import ScrollAnimation from 'react-animate-on-scroll';

const aboutIcons = [
    {
    imgSrc: iconOrganic,
    text: "Simple & Organic Ingredients"
    },
    {
    imgSrc: iconHomemade,
    text: "Homemade"
    },
    {
    imgSrc: iconFree,
    text: "Dairy & Gluten-Free"
    }
];
const animation = {
    type:["fadeIn"],
    duration: "1",
    delayTime: "250"
}

function About(props) {
    return (
        <div className="about" name="about">
        <div className="container">
            <ul>
                {aboutIcons.map((icon, index) => 
                    <li>
                        <ScrollAnimation
                            animateIn={animation.type}
                            duration={animation.duration}
                            delay={animation.delayTime*index}
                            animateOnce>
                            <img alt="about" src={icon.imgSrc}></img>
                            <p>{icon.text}</p>
                        </ScrollAnimation>
                    </li>
                )}
            </ul>
            <p className="aboutText"> <span className="large">Banana Boy's mission is to share a fun, healthy, and delicious treat with Los Angeles and the world.</span> Our banana-based ice cream alternative embodies the beauty and simplicity of all-natural food. There are many frozen treats, but only ours has these enlightened ingredients.  
            </p>
        </div>
        </div>
    );
}

export default About;