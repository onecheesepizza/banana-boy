import React from "react";
import { css } from 'emotion';
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
    type: "fadeIn",
    duration: 1,
    delayTime: 250
}
function Section(props) {
    return (
        <div className={style}>
        <div className="container">
            <h2>Flavors</h2>
            <ul>
                {flavorIcons.map((icon, index) =>
                    <li key={"flavIcon"+index}>
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

const style = css`
    background-color: #FCF9D2;
    padding:2em 1em;
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
        img {
            width: 70vw;
            padding:0;
            margin:1em auto;
        }
    }
    li {
        flex: 1 1 auto;
        text-align: center;
        width:10em;
        height:100%;
        padding: 0em 1em;
    }
    h3 {
        margin:0;
        padding:0;
    }
    p {
        font-size: .65em;
        /* margin:.5em; */
        max-width: 15em;
        margin: .5em auto;
        text-align: center;
    }
    img {
        max-width: 300px;
        padding:0;
        /* margin:1em; */
    }
`;
export default Section;