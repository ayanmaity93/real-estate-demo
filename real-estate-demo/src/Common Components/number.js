import React from 'react';

class NumberField extends React.Component {
    constructor(props){
        super(props);
        this.onChangeEvent = this.onChangeEvent.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.props.control.customValidation = (this.props.control.customValidation)?this.props.control.customValidation.bind(this):"";
        //this.state={"value":this.props.control.value};
    }

    onChangeEvent(e){
        this.props.control.onChangeValue(e.target.value)      
    }

    onFocus(){
        this.props.control.setErrorMessage("");
        if(this.props.control.onFocus){
            this.props.control.onFocus();
        }
    }

    onBlur(e){
        let flag= this.props.control.validate(this.props.control);
        if(flag)
        this.props.control.errorMessage= flag;

        if(this.props.control.onBlur){
            this.props.control.onBlur();
        }
    }

    // validate(val){       
    //     if(!val){
    //         this.setState({"errorMessage":"Field Cannot be Empty"});
    //     } else if(isNaN(val)){
    //         this.setState({"errorMessage":"Enter a Number"});
    //     } else if(this.props.control.min && val < this.props.control.min){
    //         this.setState({"errorMessage":"Enter Number More than "+this.props.control.min});
    //     } else if(this.props.control.max && val > this.props.control.max){
    //         this.setState({"errorMessage":"Enter Number Less than "+this.props.control.max});
    //     } else if(this.props.control.maxlength && val.toString().length > this.props.control.maxlength){
    //         this.setState({"errorMessage":"Number can only be "+this.props.control.maxlength+" digits"});
    //     } else if(this.props.control.customValidation){
    //         this.props.control.customValidation(val,this);
    //     }
    // }

    render(){
        let errorBlock;
        if(this.props.control.getErrorMessage()){
            errorBlock = <p className="alert alert-danger">{this.props.control.getErrorMessage()}</p>;
        } else {
            errorBlock = <p/>;
        }
        return(
            <div className="form-group">
                <p>{this.props.control.getLabel()}</p>
                <input className="form-control" type="tel" id={this.props.control.getLabel()} value={this.props.control.value} onChange={this.onChangeEvent} onFocus={this.onFocus} onBlur={this.onBlur}></input>
                {errorBlock}
            </div>
        )
    }
}

export default NumberField;