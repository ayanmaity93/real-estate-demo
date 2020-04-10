import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
// import NumberField from '../Common Components/number.js';
// import DropdownField from '../Common Components/dropdown.js';
import PopularProperties from './popularproperties.js';
import PropertyForm from './propertyForm.js';

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
        {/* <h1>Home Page</h1>
        <a onClick={toAbout}>Click Here to About Page</a> */}
        <PropertyForm></PropertyForm>
        <PopularProperties></PopularProperties>
      </div>
      
    ) 
  }
}

export default Home;