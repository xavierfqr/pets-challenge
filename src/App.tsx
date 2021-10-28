import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import AboutMe from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import styled from 'styled-components';

const StyledMainDiv = styled.div`
  margin: auto;
  width: 80%;
`

function App() {

  React.useEffect(() => {
    document.body.style.backgroundColor = "#faf0e6"
  }, [])

  return (
    <div>
      <Router>
        <Navbar/>
          <StyledMainDiv>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about-me" component={AboutMe}/>
            </Switch>
          </StyledMainDiv>
      </Router>
    </div>
  );
}

export default App;
