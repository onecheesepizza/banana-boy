import React from "react";
import ingIconBanana from "../images/icon-ing-banana-fruit.svg";
import ingIconCoconut from "../images/icon-ing-coconut-tree.svg";
import ingIconCacao from "../images/icon-ing-chocolate.svg";
import ingIconHoney from "../images/icon-ing-beehive.svg";

function Ingredients(props) {
    return (
        <div className="ingredients">
        <div className="container">
            <h2>Four Simple Main Ingredients</h2>
            <ul>
                <li>
                    <img alt="Bananas" src={ingIconBanana}></img>
                    <h3>Bananas</h3>
                    <p>Nutrient-dense bananas may boost digestive and heart health due to their fiber and antioxidant content.</p>
                </li>
                <li>
                    <img alt="Coconut Cream" src={ingIconCoconut}></img>
                    <h3>Coconut Cream</h3>
                    <p>Coconut cream is dairy free & keto approved.</p>
                </li>
                <li>
                    <img alt="Cacao" src={ingIconCacao}></img>
                    <h3>Cacao</h3>
                    <p>Calcium rich Cacao is densely packed with iron, magnesium, and antioxidents.</p>
                </li>
                <li>
                    <img alt="Raw Honey" src={ingIconHoney}></img>
                    <h3>Raw Honey</h3>
                    <p>Raw honey naturally provides antibacterial action, wound healing effects, dietary antioxidants, and anti-inflammatory benefits.</p>
                </li>
            </ul>
            <p className ="quote">"If you can't pronounce it, don't eat it." - Common Sense</p>
        </div>
        </div>
    );
}

export default Ingredients;