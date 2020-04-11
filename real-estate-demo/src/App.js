import React, { useState, useEffect } from 'react';
import './assets/styles/App.scss';
import About from './Main Components/about.js';
import Home from './Main Components/home.js';
import Property from './Main Components/property.js';
import AddProperty from './Main Components/addproperty.js';
import PropertyDetail from './Main Components/propertydetail.js';
import Footer from './Main Components/footer.js';
import SiteHeader from './Main Components/siteHeader.js';
import Contact from './Main Components/contact.js';
import {  BrowserRouter as Router,Switch,Route } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'


function App () {

  const [isNavJson,setNavJson] = useState(false);
  const [routeItems,setRouteItems] = useState('');

  let components = {
    About: <About />,
    Home: <Home />
  }

  useEffect(() => {
    localStorage.clear();
    fetch("http://localhost:3000/nav.json",{
      method: "GET"})
      .then(res => res.json())
      .then(
        (result) => {
          let navData = result;
          let routeItems=navData.navigation.map((item,key)=>
            <Route key={item.key} path={item.url} render={()=>item.component}>
              {components[item.component]}
            </Route>
          );
          setRouteItems(routeItems);
          localStorage.setItem('navData',JSON.stringify(result));
          setNavJson(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )
  },[]);

  if(isNavJson){
    return(
      <>
      <Router>
        <SiteHeader></SiteHeader>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              {/* {routeItems} */}
              <Route path='/about'>
                <ScrollToTop>
                  <About></About>
                </ScrollToTop>
              </Route>
              <Route path='/property'>
                <ScrollToTop>
                  <Property></Property>
                </ScrollToTop>
              </Route>
              <Route path='/contact'>
                <ScrollToTop>
                  <Contact></Contact>
                </ScrollToTop>
              </Route>
              <Route path='/propertyDetail'>
                <ScrollToTop>
                  <PropertyDetail></PropertyDetail>
                </ScrollToTop>
              </Route>
              <Route path='/'>
                <ScrollToTop>
                  <Home ></Home>
                </ScrollToTop>
              </Route>
            </Switch>
          <AddProperty></AddProperty>
          <Footer></Footer>
        </Router>
      </>
    )               
  } else {
    return(
      <p>Loading...</p>
    )
  }
}

export default App;
