import React from "react";
import SVG from 'react-inlinesvg';
import iconInstagram from "../images/icon-social-instagram.svg";

function Footer(props) {
    return (
        <div className="footer">
            <p>Copyright © 2020 Banana Boy</p>
            <p>Los Angeles, CA</p>
            <p><a href="https://www.instagram.com/itsbananaboy/" target="_blank" rel="noopener noreferrer">
                <SVG className="icon-social" src={iconInstagram}></SVG>
            </a></p>
        </div>
    );
}

export default Footer;