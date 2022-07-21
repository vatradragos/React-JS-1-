import React, {useState} from "react";
import ReactDOM from "react-dom";

function Button(props) {

    const [count, setCount] = useState(0);

    if(count < 0) {
      document.getElementById("error-2").style.display = "block";
      document.getElementById("error-2").innerHTML = "* The amount mast to be a positive number!";
      document.getElementById("form").style.display = "none";
    } else if(count > 0) {
      document.getElementById("error-2").style.display = "none";
      document.getElementById("form").style.display = "block";
    }

    return (
      <div className="row text-center" id="button">
        <div className="col">

          <div className="row text-center">
            <div className="col">
              <p className="h3 title">Select bitcoin units for transfer</p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col">
              <button type="button" className="btn submit" onClick={() => setCount(count + 1)}>+1</button>
              <button type="button" className="btn submit" onClick={() => setCount(count + 10)}>+10</button>
              <button type="button" className="btn submit" onClick={() => setCount(count + 50)}>+50</button>
              <button type="button" className="btn submit" onClick={() => setCount(count + 100)}>+100</button>
            </div>
          </div>

          <div className="row text-center">
            <div className="col">
              <p className="h1 ml-auto mr-auto" id="answer">{count}</p>
              <p className="h6 ml-auto mr-auto" id="error-2"></p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col">
              <button type="button" className="btn submit" onClick={() => setCount(count - 1)}>- 1</button>
              <button type="button" className="btn submit" onClick={() => setCount(count - 10)}>- 10</button>
              <button type="button" className="btn submit" onClick={() => setCount(count - 50)}>- 50</button>
              <button type="button" className="btn submit" onClick={() => setCount(count - 100)}>- 100</button>
            </div>
          </div> 

        </div>
      </div>
    );
  }

export default Button;