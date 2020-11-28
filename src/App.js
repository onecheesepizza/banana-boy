import React, {useState, useEffect} from 'react';
//components
import Header from './components/Header';
import ArrowBounce from './components/ArrowBounce';
import About from './components/About';
import Ingredients from './components/Ingredients';
import Flavors from './components/Flavors';
import Contact from './components/Contact';
import Footer from './components/Footer';
//styles
import { injectGlobal } from 'emotion';
import './App.css'; // contains @import-normalize
import 'animate.css/source/animate.css'; //for animations

function App() {
  //state: scroll position for ArrowBounce
	const [scrollTop, setScrollTop] = useState(0);
	const onScroll = (event) => {
		setScrollTop(event.target.scrollingElement.scrollTop);
	}
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
  }, []);
  
  //JSX
  return (
    <div className="App" >
      <Header></Header>
      <ArrowBounce
                scrollTo="about" 
                hidden={scrollTop>0 ? true : false}/>
      <About></About>
      <Ingredients></Ingredients>
      <Flavors></Flavors>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

//global styles
injectGlobal`
  html, body, div, ul, li, p{
      margin:0;
      padding:0;
  }
  @media all and (max-width: 500px) {
    body {
      font-size: 1.5em !important;
    }
  }
  body {
      width:100vw;
      height:100vh;
      font-family: 'Libre Franklin', sans-serif;
      background-color: #FCF9D2;
      background-color:transparent;
      font-size: 2em;
  }
  .container {
      max-width:960px;
      margin: 0 auto;
      padding:0;
  }

  h2{
      font-weight: 300;
      text-align: center;
      text-transform: uppercase;
      margin:0;
  } 
  h3{
      font-weight: 300;
  }
  img{
      max-width: 200px;
  }
  li {
      list-style: none;
  }
  ::selection {
      background: #593726;
      color:white; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
      background: #593726; /* Gecko Browsers */
      color:white; /* WebKit/Blink Browsers */
  }
`;

console.log(`
developed by zebranode 🦓
https://zebranode.dev
https://github.com/zebranode
`);

export default App;
