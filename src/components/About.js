import React from "react";
import iconOrganic from "../images/icon-save-plant.svg";
import iconHomemade from "../images/icon-bowl-and-spoon.svg";
import iconFree from "../images/icon-healthy-heart.svg";

function About(props) {
    return (
        <div className="about" name="about">
        <div className="container">
            <ul>
                <li>
                    <img alt="about" src={iconOrganic}></img>
                    <p>Simple & Organic Ingredients</p>
                </li>
                <li>
                    <img alt="about" src={iconHomemade}></img>
                    <p>Homemade</p>
                </li>
                <li>
                    <img alt="about" src={iconFree}></img>
                    <p>Dairy & Gluten-Free</p>
                </li>
            </ul>
            <p className="aboutText"> <span className="large">Banana Boy's mission is to share a fun, healthy, and delicious treat with Los Angeles and the world.</span> Our banana-based ice cream alternative embodies the beauty and simplicity of all-natural food. There are many frozen treats, but only ours has these enlightened ingredients.  
            </p>
        </div>
        </div>
    );
}

export default About;