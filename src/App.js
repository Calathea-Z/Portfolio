import "./styles/App.css";
import Header from './Components';
import Nav from './Components';
import About from './Components';
import Experience from './Components';
import Services from './Components';
import Portfolio from './Components';
import Reviews from './Components';
import Contact from './Components';
import Footer from './Components';

import { Route, Routes } from "react-router-dom";


const App = () => {

  const URL = "";

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;