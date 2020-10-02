import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Navbar from './components/navbar';
import Intro from './contents/intro';
import About from './contents/about';
import Education from './contents/education';
import Skills from './contents/skills';
import Contact from './contents/contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {

  return (

    <Router>

      <div className="App">

        <Navbar />

        <Route exact path="/intro">
          <Intro />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/education">
          <Education />
        </Route>

        <Route exact path="/skills">
          <Skills />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

      </div>

    </Router>

  )

}

export default App;
