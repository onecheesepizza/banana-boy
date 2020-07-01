import React from "react";
import SVG from 'react-inlinesvg';
import iconInstagram from "../images/icon-social-instagram.svg";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Section({ title }) {
    return (
        <header>
            <h1>#ITSBANANABOY</h1>
            <a href="https://www.instagram.com/itsbananaboy/" target="_blank">
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
}

export default Section;