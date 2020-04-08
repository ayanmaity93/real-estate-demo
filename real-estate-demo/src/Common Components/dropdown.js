import React from 'react';

class DropdownField extends React.Component {
    constructor(props){
        super(props);
    }
    
    handleChange = ({ target }) => {        
        this.props.control.onUpdate(target.value);
    }

    render(){
        return(
            <div className="form-group">                                
                <label>{this.props.control.label}</label>
                <select value={this.props.control.value} className="wide" id={this.props.control.label} onChange={this.handleChange}>  
                    {this.props.control.dropDownList.map(({ value, label }, index) => <option key={index} value={value} >{label}</option>)}                    
                </select>
            </div>
        )
    }
}

export default DropdownField;