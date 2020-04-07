import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import NumberField from '../Common Components/number.js';

function Home () {

  const [isAbout,setAbout] = useState(false);
  const [numberValue,setNumberValue] = useState(23);

  const numberField = {
    "label":"Enter Number",
    "min":25,
    "max":"",
    "maxlength":2,
    "customValidation":function(val,thisContext) {
        if(val==50){
          thisContext.setState({"errorMessage":"This is 50!"});
        }
    }
  }


  const toAbout = function(){
    setAbout(true);
  }

  const onChangeNumberField = function(val){
    setNumberValue(val);
  };

  if(isAbout){
    return(
      <Redirect to="/about" />
    )
  } else {
    return(
      <div>
        <h1>Home Page</h1>
        <a onClick={toAbout}>Click Here to About Page</a>
        <NumberField onChangeValue={onChangeNumberField} value={numberValue} properties={numberField}></NumberField>
      </div>
    ) 
  }
}

export default Home;