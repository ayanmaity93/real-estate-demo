import React from 'react';

class NumberField extends React.Component {
    constructor(props){
        super(props);
        this.onChangeEvent = this.onChangeEvent.bind(this);
        this.validate = this.validate.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.props.properties.customValidation = (this.props.properties.customValidation)?this.props.properties.customValidation.bind(this):"";
        this.state={"errorMessage":""};
    }

    onChangeEvent(e){
        this.props.onChangeValue(e.target.value);       
    }

    onFocus(){
        this.setState({"errorMessage":""});
        if(this.props.properties.onFocus){
            this.props.properties.onFocus();
        }
    }

    onBlur(e){
        this.validate(e.target.value);
        if(this.props.properties.onBlur){
            this.props.properties.onBlur();
        }
    }

    validate(val){       
        if(!val){
            this.setState({"errorMessage":"Field Cannot be Empty"});
        } else if(isNaN(val)){
            this.setState({"errorMessage":"Enter a Number"});
        } else if(this.props.properties.min && val < this.props.properties.min){
            this.setState({"errorMessage":"Enter Number More than "+this.props.properties.min});
        } else if(this.props.properties.max && val > this.props.properties.max){
            this.setState({"errorMessage":"Enter Number Less than "+this.props.properties.max});
        } else if(this.props.properties.maxlength && val.toString().length > this.props.properties.maxlength){
            this.setState({"errorMessage":"Number can only be "+this.props.properties.maxlength+" digits"});
        } else if(this.props.properties.customValidation){
            this.props.properties.customValidation(val,this);
        }
    }

    render(){
        let errorBlock;
        if(this.state.errorMessage){
            errorBlock = <p className="alert alert-danger">{this.state.errorMessage}</p>;
        } else {
            errorBlock = <p/>;
        }
        return(
            <div class="form-group">
                <p>{this.props.properties.label}</p>
                <input class="form-control" type="tel" id={this.props.properties.label} value={this.props.value} onChange={this.onChangeEvent} onFocus={this.onFocus} onBlur={this.onBlur}></input>
                {errorBlock}
            </div>
        )
    }
}

export default NumberField;