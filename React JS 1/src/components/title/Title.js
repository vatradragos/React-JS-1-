import React, {useState} from "react";
import ReactDOM from "react-dom";

function Title (props) {

  const containerStyle = {
    backgroundColor: "#014421",
  }

  const titleStyle = {
    marginTop: "50px",
    marginBottom: "10px",
    color: "#fff",
    fontSize: "3em",
    fontFamily: "'Black Ops One', cursive",
  }

  const subtitleStyle = {
    marginBottom: "20px",
    color: "#fff",
  }

  const titleSpanStyle = {
    margin: "10px 10px 10px 10px",
    padding: "10px 10px 10px 10px",
    border: "1px solid #fff",
    borderTop: "none",
    borderBottom: "none",
  }

    return (
      <div style={containerStyle} className="container-fluid" id="title">
        <div className="row text-center" id="title-row">
          <div className="col" id="title-col">
            <p style={titleStyle} className="h1">Bitcoin Transfer</p>
            <p style={subtitleStyle} className="h6" id="subtitle"><span style={titleSpanStyle} className="title-span">simple</span><span style={titleSpanStyle} className="title-span">efficient</span><span style={titleSpanStyle} className="title-span">instant</span></p>
          </div>
        </div>
      </div>
    );
  }

export default Title;