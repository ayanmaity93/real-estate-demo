import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


function About () {

  const [isHome,setHome] = useState(false);
  function toHome(){
    setHome(true);
  }

  if(isHome){
    return(
      <Redirect to="/" />
    )
  } else {
    return(
      <div>
        <h1>About Page</h1>
        <a onClick={toHome}>Click Here to Home Page</a>
      </div>
    ) 
  }
}

export default About;