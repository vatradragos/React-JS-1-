import React, {useState} from "react";
import ReactDOM from "react-dom";

class Select2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'cards'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      
        if((this.state.value == "american-express") || (this.state.value == "discover") || (this.state.value == "mastercard") ||
        (this.state.value == "visa") || (this.state.value == "revolut")) {
            document.getElementById("select-3").style.display = "block";
        } else {
            document.getElementById("select-3").style.display = "none";
        }
    
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="row text-center select" id="select-2">
            <div className="col">
                <p className="h3 title">Select your card details</p>
                <form className="form-group" onSubmit={this.handleSubmit}>
                <label>
                    <select className="text-center" value={this.state.value} onChange={this.handleChange}>
                    <option value="cards">Select your card type:</option>
                    <option value="american-express">American Express</option>
                    <option value="discover">Discover</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="visa">Visa</option>
                    <option value="revolut">Revolut</option>
                    </select>
                </label>
                <br />
                <input className="btn btn-warning submit" type="submit" value="NEXT" />
                </form>
            </div>
        </div>
      );
    }
  }

  export default Select2;