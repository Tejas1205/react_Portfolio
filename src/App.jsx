import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // ✅ Import BrowserRouter
import "./App.css";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skill from './components/Skill';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Hobbies from './components/Hobbies';

const App = () => {
  return (
    <Router>  {/* ✅ Wrap everything inside BrowserRouter */}
      <> 
        <Navbar/>
        <Home/>
        <About/>
        <Hobbies/>
        <Services/>
        <Experience/>
        <Skill/>
        <Projects/>
        <Contact/>
      </>
    </Router>
  );
};

export default App;
