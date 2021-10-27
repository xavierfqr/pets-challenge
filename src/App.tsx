import React from 'react';
import Home from './components/Home';
import AboutMe from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about-me" component={AboutMe}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
