import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Route path="/" render={() => <LandingPage />} exact />
        <Route path="/about" render={() => <About />} exact />
        <Route path="/contact" render={() => <Contact />} exact />
        <Route path="/portfolio" render={() => <Portfolio />} exact />
      </Router>
    </div>
  );
}

export default App;
