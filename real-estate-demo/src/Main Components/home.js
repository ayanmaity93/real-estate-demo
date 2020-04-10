import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Factories,  {CreateObject} from '../Common Components/factories.js';

function Home () {

  const [isAbout,setAbout] = useState(false);
  const [numberValue,setNumberValue] = useState(23);
  const [dropdownValue,setDropdownValue] = useState('');
  const instance= new CreateObject();

  const onChangeNumberField = function(val){
    setNumberValue(val);
  };
  const onChangedropValue = function(val){
    setDropdownValue(val);
  };

  const numberField = instance.create({
    "label":"Enter Number",
    "type":'number',
    "min":25,
    "max":"",
    "maxlength":2,
    "value":numberValue,
    "onChangeValue":onChangeNumberField,
    "customValidation":function(val) {
        if(val.value==50){
          return "This is 50!";
        }
    }
  });
  console.log(numberField);

  const dropdownField = instance.create({
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
  });
  console.log(dropdownField);



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
        <Factories control={numberField}></Factories>
        <Factories control={dropdownField}></Factories>
      </div>
      
    ) 
  }
}

export default Home;