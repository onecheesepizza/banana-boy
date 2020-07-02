import React from "react";
import coneBlue from "../images/cone-blue.jpeg";
import coneGreen from "../images/cone-green.jpeg";
import conePink from "../images/cone-pink.jpeg";
import ScrollAnimation from 'react-animate-on-scroll';

const flavorIcons = [
    {
    imgSrc: coneBlue,
    title: "Chocolate",
    text: "Made with organic bananas, organic coconut cream, organic raw honey, organic cacao powder and Himalayan sea salt."
    },
    {
    imgSrc: coneGreen,
    title: "Chocolate Peanut",
    text: "Made with organic bananas, organic coconut cream, organic raw honey, organic cacao powder, organic peanut butter."
    },
    {
    imgSrc: conePink,
    title: "Peanut Butter",
    text: "Made with organic bananas, organic coconut cream, organic raw honey, organic peanut butter."
    }
];
const animation = {
    type:["fadeIn"],
    duration: "1",
    delayTime: "250"
}
function Section(props) {
    return (
        <div className="flavors">
        <div className="container">
            <h2>Flavors</h2>
            <ul>
                {flavorIcons.map((icon, index) =>
                    <li>
                        <ScrollAnimation
                            animateIn={animation.type}
                            duration={animation.duration}
                            delay={animation.delayTime * index}
                            animateOnce>
                            <img alt={icon.title} src={icon.imgSrc}></img>
                            <h3>{icon.title}</h3>
                            <p>{icon.text}</p>
                        </ScrollAnimation>
                    </li>
                )}
            </ul>
        </div>
        </div>
       
    );
}

export default Section;