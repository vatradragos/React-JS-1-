import React, {useState} from "react";
import ReactDOM from "react-dom";

class Select1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'continents'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      
        if((this.state.value == "africa") || (this.state.value == "north-america") || (this.state.value == "south-america") ||
        (this.state.value == "antarctica") || (this.state.value == "australia")  || (this.state.value == "europe")) {
            document.getElementById("select-2").style.display = "block";
        } else {
            document.getElementById("select-2").style.display = "none";
        }

      event.preventDefault();
    }
  
    render() {
      return (
        <div className="row text-center select" id="select-1">
            <div className="col">
                <p style={{marginTop: "10px"}} className="h5 text-center text-white">Please, complete this form section by section!</p>
                <p className="h3 title">Select the region you came from</p>
                <form className="form-group" onSubmit={this.handleSubmit}>
                <label>
                    <select className="text-center" value={this.state.value} onChange={this.handleChange}>
                    <option value="continents">Select your region:</option>
                    <option value="africa">Africa</option>
                    <option value="north-america">North America</option>
                    <option value="south-america">South America</option>
                    <option value="antarctica">Antarctica</option>
                    <option value="australia">Australia</option>
                    <option value="europe">Europe</option>
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

  export default Select1;