import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
// import NumberField from '../Common Components/number.js';
// import DropdownField from '../Common Components/dropdown.js';
import PopularProperties from './popularproperties.js';
import Factories from '../Common Components/factories.js';

function Home () {

  const [isAbout,setAbout] = useState(false);
  const [numberValue,setNumberValue] = useState(23);
  const [dropdownValue,setDropdownValue] = useState('');

  const onChangeNumberField = function(val){
    setNumberValue(val);
  };
  const onChangedropValue = function(val){
    setDropdownValue(val);
  };

  const numberField = {
    "label":"Enter Number",
    "type":'number',
    "min":25,
    "max":"",
    "maxlength":2,
    "value":numberValue,
    "onChangeValue":onChangeNumberField,
    "customValidation":function(val,thisContext) {
        if(val==50){
          thisContext.setState({"errorMessage":"This is 50!"});
        }
    }
  }

  const dropdownField = {
    "label":"Please select a value",
    "type":'dropdown',
    "value":dropdownValue,
    "onChangeValue":onChangedropValue,
    "dropDownList":[
      { value: 'flavor', label: 'flavor' },
      { value: 'yummy', label: 'yummy' },
      { value: 'red', label: 'red' },
      { value: 'green', label: 'green' },
      { value: 'yellow', label: 'yellow' }
    ],
    "customValidation":function(val) {
        
    }
  }

  const toAbout = function(){
    setAbout(true);
  }
  
  if(isAbout){
    return(
      <Redirect to="/about" />
    )
  } else {
    return(
      <div>
        <h1>Home Page</h1>
        <a onClick={toAbout}>Click Here to About Page</a>
        {/* <NumberField value={numberValue} properties={numberField}></NumberField>
        <DropdownField properties={dropdownField}></DropdownField>         */}
        <Factories control={numberField}></Factories>
        <Factories control={dropdownField}></Factories>
        <PopularProperties></PopularProperties>
      </div>
      
    ) 
  }
}

export default Home;