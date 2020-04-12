import React from 'react';
import Testimonials from './testimonials.js';
import FAQs from './faq.js';
import TotalProperties from './totalProperty.js';
import OurAgents from './ouragents.js';
import PropertyForm from './propertyForm.js';


function About () {
  let propertyCompHeading ={
    "pageId":"about",
    "mainHeading":"About Us",
    "subHeading":"",
    "imageClass":"bradcam_bg_1"
  };
    return(
      <>
        <PropertyForm properties={propertyCompHeading}></PropertyForm>
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
        <FAQs></FAQs>
        <TotalProperties></TotalProperties>
        <Testimonials></Testimonials>
        <OurAgents></OurAgents>
      </>
    ) 
}

export default About;