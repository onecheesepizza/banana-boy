import React from "react";
import { css } from 'emotion';
import SVG from 'react-inlinesvg';
import bgImg from '../images/cone-blue.jpeg';
import iconInstagram from "../images/icon-social-instagram.svg";

function Section({ title }) {
    return (
        <header className={style}>
            <h1>#ITSBANANABOY</h1>
            <a href="https://www.instagram.com/itsbananaboy/" target="_blank" rel="noopener noreferrer">
                <SVG className="icon-social" src={iconInstagram}></SVG>
            </a>
        </header>
    );
};

const style=css`
    background-color:transparent;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    background: url(${bgImg}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position-y: top;
    @media (max-width: 1024px) {
        {
        background-attachment: scroll;
        background-position-y: top;
        }
    }
    /* ipad background fix */
    @supports (-webkit-touch-callout: none) {
        {
        background-attachment: scroll;
        background-position-y: top;
        }  
    }
    h1 {
        font-weight: 700;
        font-size: 10vw;
        text-align: center;
        text-transform: uppercase;
        margin:0;
        letter-spacing: -.05em;
        padding:.75em 0 0 .25em;
        color: white;
        -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
        -o-animation: fadein 1s; /* Opera < 12.1 */
            animation: fadein 1s;
    }
    @media all and (max-width: 600px) {
        h1{
            padding-top: 1.5em;
        }
    }
    .icon-social {
        fill:white;
        width:1.5em;
        position: absolute;
        top:1em;
        right:1em;
        transition: .5s;
        -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
        -o-animation: fadein 1s; /* Opera < 12.1 */
            animation: fadein 1s;
    }
    .icon-social:hover {
        fill:#F196A1;
    }
    @media all and (max-width: 1000px) {
        .icon-social {
            width:1em;
            top:.5em;
            right:.5em;
        }
    }
    @media all and (max-width: 600px) {
        .icon-social {
            display:none;
        }
    }
`;

export default Section;
