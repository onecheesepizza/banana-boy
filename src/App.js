import React from 'react';
//components
import Header from './components/Header';
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
  return (
    <div className="App" >
      {/* <Global styles={style}/> */}
      <Header></Header>
      <About></About>
      <Ingredients></Ingredients>
      <Flavors></Flavors>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

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

export default App;
