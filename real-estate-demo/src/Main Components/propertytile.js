import React from 'react';
import NavigationTo from './../Common Components/navigationService.js';
import { useHistory } from 'react-router-dom';


const PropertyTile = (propertydetails) => {
    let propertyType;
    let history = useHistory();
    let propertyDetail = propertydetails.propertydetails;
    if(propertyDetail.type==='sale'){
        propertyType = (
            <div className="property_tag">
                    For Sale
            </div>
        );
    } else if(propertyDetail.type==='rent'){
        propertyType = (
            <div className="property_tag red">
                    For Rent
            </div>
        );
    }

    return(
        <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_property" onClick={()=>{NavigationTo("propertyDetail", history)}}>
                <div className="property_thumb">
                    {propertyType}
                    <img src={require("./../assets/images/property/"+propertyDetail.propertyImage)} alt="" />
                </div>
                <div className="property_content">
                    <div className="main_pro">
                            <h3><a href="" onClick={(e)=>{e.preventDefault()}}>{propertyDetail.name}</a></h3>
                            <div className="mark_pro">
                                <img src={require("./../assets/images/svg_icon/location.svg")} alt="" />
                                <span>{propertyDetail.tag}</span>
                            </div>
                            <span className="amount">{propertyDetail.fee}</span>
                    </div>
                </div>
                <div className="footer_pro">
                    <ul>
                        <li>
                            <div className="single_info_doc">
                                <img src={require("./../assets/images/svg_icon/square.svg")} alt="" />
                                <span>{propertyDetail.size}</span>
                            </div>
                        </li>
                        <li>
                            <div className="single_info_doc">
                                <img src={require("./../assets/images/svg_icon/bed.svg")} alt=""/>
                                <span>{propertyDetail.propertyBeds}</span>
                            </div>
                        </li>
                        <li>
                            <div className="single_info_doc">
                                <img src={require("./../assets/images/svg_icon/bath.svg")} alt="" />
                                <span>{propertyDetail.propertyBath}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PropertyTile;