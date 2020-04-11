import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Testimonials from './testimonials.js';
import OurAgents from './ouragents.js';


function About () {

    return(
      <>
        <Testimonials></Testimonials>
        <OurAgents></OurAgents>
      </>
    ) 
}

export default About;