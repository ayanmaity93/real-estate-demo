import React from 'react';
import PropertyTile from './propertytile.js';


function PropertiesList (props) {

    let properties = props.property.propertiesList.map((item)=>
        <PropertyTile key={item.id} propertydetails={item}></PropertyTile>
    ); 
    let listHeading;
    if(props.type==="all"){
        listHeading = <h4>240 Properties found</h4>;
    } else if(props.type==="popular"){
        listHeading = <h3>Popular Properties</h3>;
    }

    return(
        <div className="popular_property plus_padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section_title mb-40 text-center">
                            {listHeading}
                        </div>
                    </div>
                </div>
                <div className="row">
                    {properties}
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="more_property_btn text-center">
                            <a href="" className="boxed-btn3-line">More Properties</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertiesList;