import React, {useState} from "react";
import ReactDOM from "react-dom";

class Select3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'dates'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      
        if((this.state.value == "01.2022") || (this.state.value == "02.2022") || (this.state.value == "03.2022") ||
        (this.state.value == "04.2022") || (this.state.value == "05.2022") || (this.state.value == "06.2022") || 
        (this.state.value == "07.2022")) {
          document.getElementById("error-1").style.display = "block";
          document.getElementById("error-1").innerHTML = "* Sorry! Your card is expired! Choose a valid card!";
          document.getElementById("button").style.display = "none";

        } else if((this.state.value == "08.2022") || (this.state.value == "09.2022") || 
        (this.state.value == "10.2022") || (this.state.value == "11.2022") || (this.state.value == "12.2022") || 
        (this.state.value == "01.2023") || (this.state.value == "02.2023") || (this.state.value == "03.2023") || 
        (this.state.value == "04.2023") || (this.state.value == "05.2023") || (this.state.value == "06.2023") || 
        (this.state.value == "07.2023") || (this.state.value == "08.2023") || (this.state.value == "09.2023") || 
        (this.state.value == "10.2023") || (this.state.value == "11.2023") || (this.state.value == "12.2023")) {
          document.getElementById("error-1").style.display = "none";
          document.getElementById("button").style.display = "block";
        } else {
          document.getElementById("error-1").style.display = "none";
          document.getElementById("button").style.display = "none";
        } 

    
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="row text-center select" id="select-3">
            <div className="col">
                <p className="h3 title">Select your card expiration date</p>
                <form className="form-group" onSubmit={this.handleSubmit}>
                <label>
                    <select className="text-center" value={this.state.value} onChange={this.handleChange}>
                    <option value="dates">Select expiration date card:</option>
                    <option value="01.2022">Juanuary 2022</option>
                    <option value="02.2022">February 2022</option>
                    <option value="03.2022">March 2022</option>
                    <option value="04.2022">April 2022</option>
                    <option value="05.2022">May 2022</option>
                    <option value="06.2022">June 2022</option>
                    <option value="07.2022">July 2022</option>
                    <option value="08.2022">August 2022</option>
                    <option value="09.2022">September 2022</option>
                    <option value="10.2022">October 2022</option>
                    <option value="11.2022">November 2022</option>
                    <option value="12.2022">December 2022</option>
                    <option value="01.2023">Juanuary 2023</option>
                    <option value="02.2023">February 2023</option>
                    <option value="03.2023">March 2023</option>
                    <option value="04.2023">April 2023</option>
                    <option value="05.2023">May 2023</option>
                    <option value="06.2023">June 2023</option>
                    <option value="07.2027">July 2023</option>
                    <option value="08.2023">August 2023</option>
                    <option value="09.2023">September 2023</option>
                    <option value="10.2023">October 2023</option>
                    <option value="11.2023">November 2023</option>
                    <option value="12.2023">December 2023</option>
                    </select>
                </label>
                <p className="h6 ml-auto mr-auto" id="error-1"></p>
                <br />
                <input className="btn btn-warning submit" type="submit" value="NEXT" />
                </form>
            </div>
        </div>
      );
    }
  }

  export default Select3;