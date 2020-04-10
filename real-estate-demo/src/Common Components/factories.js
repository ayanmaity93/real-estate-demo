import React from 'react';
import NumberField from '../Common Components/number.js';
import DropdownField from '../Common Components/dropdown.js';

class Factories extends React.Component {
    render(){
        if(this.props.control.type === "number"){
            return(
                <NumberField control={this.props.control}></NumberField>
            );
        } else if(this.props.control.type === "dropdown"){
            return(
                <DropdownField control={this.props.control}></DropdownField>        
            );
        }   
    }
}

export default Factories;

class CreateObject extends React.Component {
    create=(obj)=>{
        switch(obj.type){
            case 'number':  return this.numberFactory(obj);
            break;
            case 'dropdown':  return this.dropdownFactory(obj);
            break;
            default:break;

        }
    }
    commmonValueObj=(initObj) =>{
        let object={
            "label":initObj.label,
            "type":initObj.type,            
            "onChangeValue":initObj.onChangeValue,
            "customValidation":initObj.customValidation,
            "value":initObj.value,
            "errorMessage":''
        };
        object.setLabel=(label)=>{
            object.label=label;
        }
        object.getLabel=()=>{
            return object.label;
        }
        object.setValue=(value)=>{
            object.value=value;
        }
        object.getValue=()=>{
            return object.value;
        }
        object.setErrorMessage=(errorMessage)=>{
            object.errorMessage=errorMessage;
        }
        object.getErrorMessage=()=>{
            return object.errorMessage;
        }

        return object;
    }
    
    numberFactory=(obj)=>{
        let controlObject = this.commmonValueObj(obj);

        controlObject.min = obj.min;
        controlObject.max = obj.max;
        controlObject.maxlength = obj.maxlength;

        controlObject.validate=(val)=>{
            let errorMessage='';
            if(!val.value){ 
                errorMessage = "Field Cannot be Empty";
            } else if(isNaN(val.value)){
                errorMessage = "Enter a Number";
            } else if(val.min && val.value < val.min){
                errorMessage = "Enter Number More than "+val.min;
            } else if(val.max && val.value > val.max){
                errorMessage = "Enter Number Less than "+val.max;
            } else if(val.maxlength && val.value.toString().length > val.maxlength){
                errorMessage = "Number can only be "+val.maxlength+" digits";
            } else if(val.customValidation){
                errorMessage = val.customValidation(val);
            }
            return errorMessage;
        }

        return controlObject;
    }

    dropdownFactory=(obj)=>{
        let controlObject = this.commmonValueObj(obj);

        controlObject.dropDownList = obj.dropDownList;

        controlObject.validate=(obj)=>{       
            console.log(obj);
        }

        return controlObject;
    }
}
export {CreateObject};