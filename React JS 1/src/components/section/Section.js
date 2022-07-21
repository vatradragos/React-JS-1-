import React, {useState} from "react";
import ReactDOM from "react-dom";
import './section.css';
import Button from "./Button.js";
import Select1 from "./Select1";
import Select2 from "./Select2";
import Select3 from "./Select3";
import Form from "./Form.js";
import Search from "./Search.js";

function Section (props) {

    return (
      
      <div className="container ml-auto mr-auto" id="container">

        <div id="order">

          <Select1 />

          <Select2 />

          <Select3 />

          <Button />

          <Form />

       </div>

       <div id="currency">
        
       <Search />

       </div>

      </div>
     
    );
  }

export default Section;