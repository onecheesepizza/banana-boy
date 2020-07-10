import React from "react";
import { css } from 'emotion';
import SVG from 'react-inlinesvg';
import bgImg from '../images/cone-blue.jpeg';
import iconInstagram from "../images/icon-social-instagram.svg";
import { Link } from 'react-scroll';

function Section({ title }) {
    return (
        <header className={style}>
            <h1>#ITSBANANABOY</h1>
            <a href="https://www.instagram.com/itsbananaboy/" target="_blank" rel="noopener noreferrer">
                <SVG className="icon-social" src={iconInstagram}></SVG>
            </a>
            {/* <img className="icon-social" alt="Instagram" src={iconInstagram}></img> */}
            <div className="arrow bounce">
                <Link 
                    // activeClass="active" 
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className="fa fa-arrow-down fa-2x" 
                    href="#">↓</Link>
            </div>
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
    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
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
    .icon-social:hover {
        fill:#F196A1;
    }
    .arrow {
        font-size:2em;
        text-align: center;
        margin: 8% 0;
        position:absolute;
        bottom:0;
        /* left:48%; */
        margin:.5em 0;
        width:100vw;
    }
    .bounce {
        -moz-animation: bounce 2s infinite;
        -webkit-animation: bounce 2s infinite;
        animation: bounce 2s infinite;
    }
    .arrow a { 
        color: white; 
        text-decoration: none; 
        transition: .5s;
    }
    .arrow a:hover { 
        color: #F196A1;
    }
`;

export default Section;
