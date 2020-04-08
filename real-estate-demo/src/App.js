import React from 'react';
import './assets/styles/App.scss';
import About from './Main Components/about.js';
import Home from './Main Components/home.js';
import SiteHeader from './Main Components/siteHeader.js';
import {  BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";


class App extends React.Component {

  render(){
    return(
      <>
        <SiteHeader></SiteHeader>
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    )
  };
}

export default App;
