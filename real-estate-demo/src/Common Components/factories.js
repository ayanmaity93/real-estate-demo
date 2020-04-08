import React from 'react';
import NumberField from '../Common Components/number.js';
import DropdownField from '../Common Components/dropdown.js';

class Factories extends React.Component {
    constructor(props){
        super(props);
        this.state={
            "label":this.props.control.label,
            "type":this.props.control.type,
            "min":this.props.control.min,
            "max":this.props.control.max,
            "maxlength":this.props.control.maxlength,            
            "onChangeValue":this.props.control.onChangeValue,
            "customValidation":this.props.control.customValidation,
            "value":this.props.control.value,
            "dropDownList":this.props.control.dropDownList,
            "onUpdate":this.onUpdate
        };
    }
    onUpdate = (value) => {   
        this.setState({"value":value})     
        this.state.onChangeValue(value);
    }


    render(){
        if(this.state.type == "number"){
            return(
                <NumberField control={this.state}></NumberField>
            );
        } else {
            return(
                <DropdownField control={this.state}></DropdownField>        
            );
        }
        
        
    }
}

export default Factories;