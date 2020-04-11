import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useHistory } from 'react-router-dom';
import NavigationTo from './../Common Components/navigationService.js'


function PropertyHomeCarousel (props) {

    let history = useHistory();

    let properties = props.property.propertiesList.map((item)=>
        <div className="single_details" key={item.id}>
            <div className="row">
                <div className="col-xl-6 col-md-6">
                    <div className="modern_home_info">
                        <div className="modern_home_info_inner">
                            <span className="for_sale">
                                {item.type}
                            </span>
                            <div className="info_header">
                                    <h3>{item.name}</h3>
                                    <div className="popular_pro d-flex">
                                        <img src={require("./../assets/images/svg_icon/location.svg")} alt="" />
                                        <span>{item.tag}</span>
                                    </div>
                            </div>
                            <div className="info_content">
                                <ul>
                                    <li> <img src={require("./../assets/images/svg_icon/square.svg")} alt="" /> <span>{item.size}</span>  </li>
                                    <li> <img src={require("./../assets/images/svg_icon/bed.svg")} alt="" /> <span>{item.propertyBeds}</span> </li>
                                    <li> <img src={require("./../assets/images/svg_icon/bath.svg")} alt="" /> <span>{item.propertyBath}</span> </li>
                                </ul>
                                <p>{item.smallDesc}</p>
                                <div className="prise_view_details d-flex justify-content-between align-items-center">
                                    <span>{item.fee}</span>
                                    <a className="boxed-btn3-line" href="" onClick={(e)=>{e.preventDefault(); NavigationTo("propertyDetail", history)}}>View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 

    return(
        <div className="home_details">
            <div className="container">
                <div className="row">   
                    <div className="col-xl-12">
                        <div className="home_details_active">
                            <Carousel autoPlay={true} showStatus={false} showIndicators={false} infiniteLoop={true} useKeyboardArrows={true} stopOnHover={true}>
                                {properties}
                            </Carousel>         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
    
}

export default PropertyHomeCarousel;