import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import AboutMe from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import styled from 'styled-components';

const StyledAppDiv = styled.div`
  background-color: #faf0e6;
`

const StyledMainDiv = styled.div`
  margin: auto;
  width: 80%;
`

function App() {
  return (
    <StyledAppDiv>
      <Router>
        <Navbar/>
          <StyledMainDiv>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about-me" component={AboutMe}/>
            </Switch>
          </StyledMainDiv>
      </Router>
    </StyledAppDiv>
  );
}

export default App;
