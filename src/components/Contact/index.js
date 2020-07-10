import React from "react";
import { css } from 'emotion';
import bgImg from '../../images/cone-blue.jpeg';
import ContactForm from "./ContactForm";

function Contact(props) {
    return (
        <div className={style}>
        <div className="container">
            <h2>Contact</h2>
            <ContactForm></ContactForm>
        </div>
        </div>
    );
};

const style = css`
    padding: 1.5em .5em;
    height:100%;
    /* bg */
    background: url(${bgImg}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position-y: top;
    @media (max-width: 1024px) {
            background:none;
            background-color:#8AD0F4;
    }
    /* ipad background fix */
    @supports (-webkit-touch-callout: none) {
            background: none;
            background-color: #8AD0F4;
    }
    .container {
        max-width: 450px !important;
        padding:.5em;
    }
    h2 {
        color:white;
    }
    p{
        margin:1em 0em;
        text-align: center;
        -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
        -o-animation: fadein 1s; /* Opera < 12.1 */
            animation: fadein 1s;
    }
    form {
        margin-top: 1em;
        width:100%;
        color: white;
    }
    label {
        color:white;
    }
    input, textarea {
        width: 100%;
        font-family: 'Libre Franklin', sans-serif;
        font-size: 1em;
        font-weight:300;
        margin-top:.5em;
        margin-bottom: 1em;
        padding:.25em;
        border:none;
        box-sizing: border-box;
    }
    textarea{
        height:5em;
        margin-bottom: .5em;
    }
    button {
        background-color: white;
        font-size: .75em;
        border: none;
        color: rgb(61, 61, 61);
        text-transform:lowercase;
        letter-spacing: .1em;
        padding: .5em 1em;
        margin:1em 0em;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        width:100%;
        transition: .5s;
    }
    button:hover {
        background-color: #F196A1;
        color:white;
    }
`;

export default Contact;