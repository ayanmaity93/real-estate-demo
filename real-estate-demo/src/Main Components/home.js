import React, { useState,useEffect } from 'react';
import { Redirect } from 'react-router-dom';
// import NumberField from '../Common Components/number.js';
// import DropdownField from '../Common Components/dropdown.js';
import PropertiesList from './popularproperties.js';
import PropertyHomeCarousel from './propertyHomeCarousel.js';
import Testimonials from './testimonials.js';
import TotalProperties from './totalProperty.js';
import PropertyForm from './propertyForm.js';
import FAQs from './faq.js';
import OurAgents from './ouragents.js';

function Home () {

  const [isPropertyLoaded,setPropertyLoaded] = useState(false);
  const [proprtyList,setPropertyList] = useState('');
  let propertyCompHeading ={
    "pageId":"home",
    "mainHeading":"Find your best Property",
    "subHeading":"Esteem spirit temper too say adieus who direct esteem.",
    "imageClass":"slider_bg_1"
  };

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
      <React.Fragment>
        {/* <h1>Home Page</h1>
        <a onClick={toAbout}>Click Here to About Page</a> */}
        <PropertyForm properties={propertyCompHeading}></PropertyForm>
        {/* <PopularProperties></PopularProperties> */}
        <PropertiesList property={proprtyList} type="popular"></PropertiesList>
        <PropertyHomeCarousel property={proprtyList} ></PropertyHomeCarousel>
        <FAQs></FAQs>
        <TotalProperties></TotalProperties>
        <Testimonials></Testimonials>
        <OurAgents></OurAgents>
      </React.Fragment>
    ) 
  }
}

export default Home;