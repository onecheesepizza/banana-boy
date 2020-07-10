import React from "react";
import { css } from 'emotion';
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
        <div className={style} name="about">
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
};

const style = css`
    background-color: #FCF9D2;
    padding:2em 1em;
    /* width:1vw; */
    ul {
        width: 100%;
        background-color: #FCF9D2;
        display:flex;
        flex-direction: row;
        /* flex-wrap: wrap; */
        padding:1em 0;
        justify-content: space-evenly;
        align-items: baseline;
    }
    li {
        flex: 1 1 auto;
        width:10em;
        font-size: 1em;
        text-align: center;
        margin: .5em 1em;
    }
    @media all and (max-width: 700px) {
        li {
            font-size: 3vw;
            margin-top: em;
        }
        li p {
            margin-top: 1em;
        }
    }
    img{
        margin: 0 auto;
    }
    ext{
        margin: 0em 0em;
    }
    .large{
        font-weight: 700;
    }
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-30px);
        }
        60% {
            transform: translateY(-15px);
        }
    }
}`

export default About;