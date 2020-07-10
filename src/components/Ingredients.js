import React from "react";
import { css } from 'emotion';
import ingIconBanana from "../images/icon-ing-banana-fruit.svg";
import ingIconCoconut from "../images/icon-ing-coconut-tree.svg";
import ingIconCacao from "../images/icon-ing-chocolate.svg";
import ingIconHoney from "../images/icon-ing-beehive.svg";
import ScrollAnimation from 'react-animate-on-scroll';

const ingredientIcons = [
    {
    imgSrc: ingIconBanana,
    title: "Bananas",
    text: "Nutrient-dense bananas may boost digestive and heart health due to their fiber and antioxidant content."
    },
    {
    imgSrc: ingIconCoconut,
    title: "Coconut Cream",
    text: "Coconut cream is dairy-free & keto approved."
    },
    {
    imgSrc: ingIconCacao,
    title: "Cacao",
    text: "Calcium rich Cacao is densely packed with iron, magnesium, and antioxidents."
    },
    {
    imgSrc: ingIconHoney,
    title: "Raw Honey",
    text: "Raw honey naturally provides antibacterial action, wound healing effects, dietary antioxidants, and anti-inflammatory benefits."
    }
];
const animation = {
    type:["fadeIn"],
    duration: "1",
    delayTime: "250"
}

function Ingredients(props) {
    return (
        <div className={style}>
        <div className="container">
            <h2>Four Simple Main Ingredients</h2>
            <ul>
                {ingredientIcons.map((icon, index) =>
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
            <ScrollAnimation
                animateIn={animation.type}
                duration={animation.duration}
                delay={animation.delayTime * ingredientIcons.length-1}
                animateOnce>
            <p className ="quote">"If you can't pronounce it, don't eat it." - Common Sense</p>
            </ScrollAnimation>
        </div>
        </div>
    );
}

const style = css`
    background-color: #F196A1;
    padding:2em;
    ul {
        width: 100%;
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding:1em 0;
        align-items: baseline;
        /* flex-wrap: wrap; */
    }
    @media all and (max-width: 1070px) {
        ul {
            flex-wrap: wrap;
        }
    }
    li {
        flex: 1 1 auto;
        max-width: 8em;
        text-align: center;
        width:10em;
        height:100%;
        margin: 1em 0em 0em 0em;
    }
    h3 {
        margin:0;
        padding:0;
    }
    p {
        font-size: .65em;
        margin:.5em;
    }
    img {
        max-width: 50px;
        padding:0;
        margin:0;
    }
    p.quote{
        opacity: 0.5;
        font-size: .75em;
        font-weight: 300;
        font-style: italic;
        text-align: center;
        margin:0;
        padding:0;
    }
`;
export default Ingredients;