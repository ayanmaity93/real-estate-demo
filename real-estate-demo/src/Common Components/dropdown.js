import React from 'react';

class DropdownField extends React.Component {
    constructor(props){
        super(props);
        this.state={"value":this.props.control.value || this.props.control.dropDownList[0]};
    }
    handleChange = ({ target }) => {
        this.setState({"value":target.value})
        this.props.control.setValue(target.value);
    }

    render(){
        return(
            <div className="form-group">                                
                <label>{this.props.control.getLabel()}</label>
                <select value={this.state.value} className="wide" id={this.props.control.getLabel()} onChange={this.handleChange}>  
                    {this.props.control.dropDownList.map(({ value, label }, index) => <option key={index} value={value} >{label}</option>)}                    
                </select>
            </div>
        )
    }
}

export default DropdownField;