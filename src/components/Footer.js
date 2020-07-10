import React from "react";
import { css } from 'emotion';
import SVG from 'react-inlinesvg';
import iconInstagram from "../images/icon-social-instagram.svg";

function Footer(props) {
    return (
        <div className={style}>
            <p>Copyright © 2020 Banana Boy</p>
            <p>Los Angeles, CA</p>
            <p><a href="https://www.instagram.com/itsbananaboy/" target="_blank" rel="noopener noreferrer">
                <SVG className="icon-social" src={iconInstagram}></SVG>
            </a></p>
        </div>
    );
}

const style = css`
    padding:.5em 0em;
    background-color:#F196A1;
    p {
        text-align: center;
        font-size: .6em;
    }
    .icon-social {
        fill:black;
        width:2em;
        margin-top:.5em;
        transition: .5s;
    }
    .icon-social:hover {
        fill:#8AD0F4;
    }
`;

export default Footer;