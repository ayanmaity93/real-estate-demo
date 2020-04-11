import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Testimonials from './testimonials.js';
import OurAgents from './ouragents.js';


function About () {

    return(
      <>
        <div className="about_mission">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-6">
                  <div className="about_thumb">
                      <img src={require("./../assets/images/about/about.png")} alt="" />
                  </div>
              </div>
              <div className="col-xl-6 col-md-6">
                  <div className="about_text">
                      <h4>Our Mission</h4>
                      <p>While there are countless Trips out there in charity shops and car boot sales, you can also buy refurbished examples, with today replacement leatherette available in all colors. I love my Trip and use it regularly something so refreshing about its simplicity.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials></Testimonials>
        <OurAgents></OurAgents>
      </>
    ) 
}

export default About;