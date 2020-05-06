import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigate from "./components/nav/nav";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Portfolio from "./components/pages/portfolio";


function App() {
  return (
    <div className="App">
      <Navigate>

      </Navigate>
      <Router>

        {/* <Route path="/" render={() => <LandingPage />} exact /> */}
        <Route path="/about" render={() => <About />} exact />
        <Route path="/contact" render={() => <Contact />} exact />
        <Route path="/portfolio" render={() => <Portfolio />} exact />
      </Router>
    </div>
  );
}

export default App;
