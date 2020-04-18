import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';


function Testimonials () {

    const [isTestimonials,setTestimonials] = useState(false);
    const [testimonialsList,setTestimonialsList] = useState('');

    useEffect(() => {
        fetch("testimonials.json",{
          method: "GET"})
        .then(res => res.json())
        .then(
            (result) => {
                let testimonialsData = result.testimonials.map((item)=>
                    <div className="single_carousel" key={item.id}>
                        <div className="single_testmonial text-center">
                            <div className="quote">
                                <img src={require("./../assets/images/svg_icon/quote.svg")} alt="" />
                            </div>
                            <p className="text-center">{item.text}</p>
                            <div className="testmonial_author">
                                <div className="thumb">
                                        <img src={require("./../assets/images/case/"+item.profilepic)} alt="" />
                                </div>
                                <h3>{item.name}</h3>
                                <span>{item.designation}</span>
                            </div>
                        </div>
                    </div>
                );
                setTestimonialsList(testimonialsData);
                setTestimonials(true);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error);
            }
        )
      },[]);
    if(isTestimonials)
    {
        return(
            <div className="testimonial_area overlay ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="testmonial_active">
                                <Carousel autoPlay={true} showStatus={false} showIndicators={false} infiniteLoop={true} useKeyboardArrows={true} stopOnHover={true}>
                                    {testimonialsList}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    } else {
        return(
            <p>Testimonials Loading...</p>
        )
    }
}

export default Testimonials;