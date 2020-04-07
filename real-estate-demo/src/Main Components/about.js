import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
// import logo from './../assets/images/logo.png';


function About () {

  // useEffect(() => {
  //   localStorage.clear();
  //   window.FB.getLoginStatus(function(response) {   
  //     console.log(response);
  //     if(response.status == 'connected'){
  //       localStorage.setItem("userdata",JSON.stringify(response.authResponse));
  //       setLoginStatus(true);
  //     }
  //   });
  // },[fbInitialize]);

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