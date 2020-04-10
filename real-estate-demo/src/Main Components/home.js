import React, { useState,useEffect } from 'react';
import { Redirect } from 'react-router-dom';
// import NumberField from '../Common Components/number.js';
// import DropdownField from '../Common Components/dropdown.js';
import PopularProperties from './popularproperties.js';
import PropertyHomeCarousel from './propertyHomeCarousel.js';
import Testimonials from './testimonials.js';
import PropertyForm from './propertyForm.js';

function Home () {

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
        {/* <h1>Home Page</h1>
        <a onClick={toAbout}>Click Here to About Page</a> */}
        <PropertyForm></PropertyForm>
        <PopularProperties property={proprtyList} ></PopularProperties>
        <PropertyHomeCarousel property={proprtyList} ></PropertyHomeCarousel>
        <Testimonials></Testimonials>
      </div>
      
    ) 
  }
}

export default Home;