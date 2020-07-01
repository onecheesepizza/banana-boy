import React from 'react';
//components
import Header from './components/Header';
import About from './components/About';
import Ingredients from './components/Ingredients';
import Flavors from './components/Flavors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App" >
      <Header></Header>
      <About></About>
      <Ingredients></Ingredients>
      <Flavors></Flavors>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
