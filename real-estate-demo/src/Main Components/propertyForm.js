import React, { useState } from 'react';
import Factories, {CreateObject} from '../Common Components/factories.js';

function PropertyForm (properties){
    //const [numberValue,setNumberValue] = useState('');
    // const onChangeNumberField = function(val){
    //   setNumberValue(val);
    // };  

    // const numberField = instance.create({
    //   "label":"Enter Number",
    //   "type":'number',
    //   "min":25,
    //   "max":"",
    //   "maxlength":2,
    //   "value":numberValue,
    //   "onChangeValue":onChangeNumberField,
    //   "customValidation":function(val) {
    //       if(val.value==50){
    //         return "This is 50!";
    //       }
    //   }
    // });
    let props=properties.properties;
    let heading ={
        "pageId":props.pageId,
        "mainHeading":props.mainHeading,
        "subHeading":props.subHeading,
        "imageClass":"single_slider d-flex align-items-center " +props.imageClass
    };
    const [locationDropdownValue,setLocation] = useState('');
    const [propertyDropdownValue,setProperty] = useState('');
    const [bedDropdownValue,setBed] = useState('');
    const [bathDropdownValue,setBath] = useState('');
    const instance= new CreateObject();
  
    const onChangedropValue = function(obj){
        if(obj.id=="Location")
            setLocation(obj.value);
        else if(obj.id=="Property Type")
            setProperty(obj.value);
        else if(obj.id=="Bed Room")
            setBed(obj.value);
        else if(obj.id=="Bath Type")
            setBath(obj.value);
        
    };
  
    const locationDropdown = instance.create({
      "label":"Location",
      "type":'dropdown',
      "value":locationDropdownValue,
      "onChangeValue":onChangedropValue,
      "dropDownList":[
        { value: 'New York', label: 'New York' },
        { value: 'India', label: 'India' },
        { value: 'Pakistan', label: 'Pakistan' },
        { value: 'Russia', label: 'Russia' },
        { value: 'Nepal', label: 'Nepal' }
      ],
      "customValidation":function(val) {
          
      }
    });
    const propertyField = instance.create({
        "label":"Property Type",
        "type":'dropdown',
        "value":propertyDropdownValue,
        "onChangeValue":onChangedropValue,
        "dropDownList":[
          { value: 'Apartment1', label: 'Apartment1' },
          { value: 'Apartment2', label: 'Apartment2' },
          { value: 'Apartment3', label: 'Apartment3' },
          { value: 'Apartment4', label: 'Apartment4' }
        ],
        "customValidation":function(val) {
            
        }
      });
    const bedField = instance.create({
    "label":"Bed Room",
    "type":'dropdown',
    "value":bedDropdownValue,
    "onChangeValue":onChangedropValue,
    "dropDownList":[
        { value: '01', label: '01' },
        { value: '02', label: '02' },
        { value: '03', label: '03' }
    ],
    "customValidation":function(val) {
        
    }
    });
    const bathField = instance.create({
    "label":"Bath Type",
    "type":'dropdown',
    "value":bathDropdownValue,
    "onChangeValue":onChangedropValue,
    "dropDownList":[
        { value: '01', label: '01' },
        { value: '02', label: '02' },
        { value: '03', label: '03' }
    ],
    "customValidation":function(val) {
        
    }
    });
    function formData(){
        if(heading.pageId=="home" || heading.pageId=="property"){
            return(
                <div className="property_form">
                    <form onSubmit={()=>{}}>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="form_wrap d-flex">
                                    {/* <Factories control={numberField}></Factories> */}
                                    <Factories control={locationDropdown}></Factories>
                                    <Factories control={propertyField}></Factories>
                                    <Factories control={bedField}></Factories>
                                    <Factories control={bathField}></Factories>
                                    <div className="serach_icon">
                                        <button type='submit'>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>  
                            {/* <div className="row col-xl-12" style={{"margin-top":"10px"}}>
                            <button type='submit'>Search</button>
                        </div>                     */}                  
                    </form>
                </div>
            );
        }
    }

    return(
        <div className="slider_area">
            <div className={heading.imageClass}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="slider_text text-center justify-content-center">
                                <h3>{heading.mainHeading}</h3>
                                <p>{heading.subHeading}</p>
                            </div>
                            {formData()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default PropertyForm;