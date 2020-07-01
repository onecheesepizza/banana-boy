import React from "react";
import coneBlue from "../images/cone-blue.jpeg";
import coneGreen from "../images/cone-green.jpeg";
import conePink from "../images/cone-pink.jpeg";

function Section(props) {
    return (
        <div className="flavors">
        <div className="container">
            <h2>Flavors</h2>
            <ul>
                <li>
                    <img alt="Chocolate" src={coneGreen}></img>
                    <h3>Chocolate</h3>
                    <p>Made with organic bananas, organic coconut cream, organic raw honey, organic cacao powder and Himalayan sea salt.</p>
                </li>
                <li>
                    <img alt="Chocolate Peanut" src={coneBlue}></img>
                    <h3>Chocolate Peanut</h3>
                    <p>Made with organic bananas, organic coconut cream, organic raw honey, organic cacao powder, organic peanut butter.</p>
                </li>
                <li>
                    <img alt="Peanut Butter" src={conePink}></img>
                    <h3>Peanut Butter</h3>
                    <p>Made with organic bananas, organic coconut cream, organic raw honey, organic peanut butter.</p>
                </li>
            </ul>
        </div>
        </div>
       
    );
}

export default Section;