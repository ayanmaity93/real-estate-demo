import React, { useState,useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropertiesList from './popularproperties.js';
import PropertyForm from './propertyForm.js';

function Property () {

  const [isPropertyLoaded,setPropertyLoaded] = useState(false);
  const [proprtyList,setPropertyList] = useState('');

  useEffect(() => {
    fetch("http://localhost:3000/properties.json",{
      method: "GET"})
    .then(res => res.json())
    .then(
        (result) => {
            setPropertyList(result);
            setPropertyLoaded(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            console.log(error);
        }
    )
  },[]);
  
  if(!isPropertyLoaded){
    return(
      <p>Loading Property...</p>
    )
  } else {
    return(
      <div>
        <PropertyForm></PropertyForm>
        <PropertiesList property={proprtyList} type="all"></PropertiesList>
      </div>
      
    ) 
  }
}

export default Property;