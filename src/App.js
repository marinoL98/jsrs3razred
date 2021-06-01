import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Prva from './components/prva';
import Druga from './components/druga';

import Treca from './components/treca';
import Cetvrta from './components/cetvrta';
import Footer from './footer';
import StreamEp from './components/StreamEp';





function App() {
  return (
    <div className="App">
      
      
      
  <Router>
      <Route exact path="/" component={Prva}></Route>
      <Route  path="/druga" component={Druga}></Route>
      <Route  path="/treca" component={Treca}></Route>
      <Route  path="/cetvrta" component={Cetvrta}></Route>
      <Route  path="/StreamEp" component={StreamEp}></Route>
      <div id="linkovidiv">
      <Link to ="/druga"class="link1">SHOP</Link>
      <Link to ="/"class="link2">POČETNA</Link>
      <Link to="/treca"class="link3">NARUDŽBA</Link>
      <Link to="/cetvrta"class="link4">PAPIGE</Link> 
      <Link to="/StreamEp"class="link5">EXTRA</Link>   
      </div>
      </Router>

      
      
      <Footer>
        
      
      
      </Footer>
</div>
  );
}

export default App;
