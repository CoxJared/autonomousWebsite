import React from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Sponsors from './pages/sponsors/Sponsors';
import About from './pages/about/About';
import Rectruitment from './pages/recruitment/Recruitment';
import Contact from './pages/contact/Contact';
import Donate from './pages/donate/Donate';

function App() {
  return (
    <Router>
    <div className="app">
        <Route exact path="/" 
            component={Home} />
        <Route exact path="/sponsors" 
            component={Sponsors} />
        <Route exact path="/about" 
            component={About} />
        <Route exact path="/recruitment" 
            component={Rectruitment} />
        <Route exact path="/contact" 
            component={Contact} />
            <Route exact path="/donate" 
            component={Donate} />
    </div>
  </Router>
  );
}

export default App;
