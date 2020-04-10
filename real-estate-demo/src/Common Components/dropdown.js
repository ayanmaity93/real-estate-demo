import React from 'react';

class DropdownField extends React.Component {
    handleChange = (e) => {
        this.props.control.onChangeValue(e.target);   
    }
    render(){
        return(
            <div className="single-field max_width">                                
                <label>{this.props.control.getLabel()}</label>
                <select value={this.props.control.value} className="nice-select wide" id={this.props.control.getLabel()} onChange={this.handleChange}>  
                    {this.props.control.dropDownList.map(({ value, label }, index) => <option 
                    style={{
                        "background":"transparent",
                        "color": "black"
                    }} 
                        key={index} value={value} >{label}</option>
                    )}                    
                </select>
            </div>
        )
    }
}

export default DropdownField;