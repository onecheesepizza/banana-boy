import React, {useState, useEffect} from "react";
import { css } from 'emotion';
import { Link } from 'react-scroll';

//config
const loadTransitionTime = ".5s";
const loadTransitionDelay = "1000" //ms
const hoverTransitionTime = ".25s";

//component
function ArrowBounce({scrollTo, hidden}) {
    //state: initial load transition
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
        //set loaded state at component mount, after delay
        const timer = setTimeout(() => {
            setLoaded(true);
        }, loadTransitionDelay);
		return () => clearTimeout(timer);
    }, [])
    
    //JSX
    return (
		<div id="down-arrow" className={style+" "+ (loaded ? loadedStyle : unloadedStyle)} >
            <Link 
            to={scrollTo} 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="fa fa-arrow-down fa-2x" 
            href="#">
                <div 
                className="arrow bounce"
                style={hidden? {opacity:0} : null}
                >↓</div>
            </Link>
        </div>
    );
};

//styles
const loadedStyle = css`
    opacity: 1;
    transition: ${loadTransitionTime};
`;

const unloadedStyle = css`
    opacity: 0;
`;

const style= css`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    .arrow {
        opacity: .65;
        position:absolute;
        top:90vh;
        left:0;
        right:0;
        font-size:2em;
        text-align: center;
        color: white; 
        transition: opacity ${hoverTransitionTime};
    }
    @media only screen and (max-width: 600px) {
        .arrow {
            top: 79vh; /* accounts for mobile bottom bar */
        }
	}
    .bounce {
        -moz-animation: bounce 2s infinite;
        -webkit-animation: bounce 2s infinite;
        animation: bounce 2s infinite;
    }
    .arrow a { 
        text-decoration: none; 
    }
    .arrow:hover { 
        color: #F196A1;
        opacity:1;
    }
`;

export default ArrowBounce;
