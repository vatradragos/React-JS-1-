import React, {useState} from "react";
import ReactDOM from "react-dom";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      document.getElementById("transfer").style.display = "block";
      event.preventDefault();
    }
  
    render() {
      return (

        <div className="row text-center select" id="form">
            <div className="col">

                <p className="h3 title">Fill the field in the form</p>

                <form className="needs-validation ml-auto mr-auto" onSubmit={this.handleSubmit}>
                <div className="form-row text-center ml-auto mr-auto">

                    <div className="col-md-4 mb-3 text-center ml-auto mr-auto">
                    <label htmlFor="validationCustom01"></label>
                    <input type="text" className="form-control text-center" id="validationCustom01" placeholder="Full Name" value={this.state.value} onChange={this.handleChange} required />
                    <input className="btn btn-warning submit" type="submit" value="TRANSFER" id="btn-transfer" />
                    
                    </div>

                </div>
                
                </form>
                <p className="h3 title" id="transfer">Congratulations! The transfer was successful!</p>
            </div>
        </div>
      );
    }
  }

export default Form;