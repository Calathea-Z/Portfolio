import "./styles/app.css";
import Header from './Components/Header';
import Nav from './Components/Nav';
import About from './Components/About';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import { Route, Routes } from "react-router-dom";


const App = () => {

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;