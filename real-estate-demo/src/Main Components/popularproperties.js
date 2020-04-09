import React, { useState, useEffect } from 'react';
import PropertyTile from './propertytile.js';


function PopularProperties () {

    const [popularPropertyLoaded,setPopularProperty] = useState(false);
    const [proprtyList,setPropertyList] = useState('');

  useEffect(() => {
    fetch("http://localhost:3000/properties.json",{
      method: "GET"})
    .then(res => res.json())
    .then(
        (result) => {
            let properties = result.propertiesList.map((item)=>
                <PropertyTile key={item.id} propertydetails={item}></PropertyTile>
            );
            setPropertyList(properties);
            setPopularProperty(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            console.log(error);
        }
    )
  },[]);

  if(popularPropertyLoaded){
    return(
      
    <div className="popular_property plus_padding">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="section_title mb-40 text-center">
                        <h3>Popular Properties</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                {proprtyList}
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="more_property_btn text-center">
                        <a href="#" className="boxed-btn3-line">More Properties</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
  } else {
    return(
      <p>Loading Popular Properties..</p>
    ) 
  }
}

export default PopularProperties;