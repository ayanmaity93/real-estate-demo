import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function Home () {

  const [isAbout,setAbout] = useState(false);
  const toAbout = function(){
    setAbout(true);
  }

  if(isAbout){
    return(
      <Redirect to="/about" />
    )
  } else {
    return(
      <div>
        <h1>Home Page</h1>
        <a onClick={toAbout}>Click Here to About Page</a>
      </div>
    ) 
  }
}

export default Home;