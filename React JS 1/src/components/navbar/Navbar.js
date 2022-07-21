import React, {useState} from "react";
import ReactDOM from "react-dom";
import './navbar.css';

function Navbar (props) {

  window.onscroll = function() {scrollFunction()};
 
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
      document.getElementById("navbar").style.background = "#040303";
    } else {
    
      document.getElementById("navbar").style.background = "transparent";
    }
  }

  function handleClick_transfer() {
    document.getElementById("order").style.display = "block";
    document.getElementById("currency").style.display = "none";
  }

  function handleClick_currency() {
    document.getElementById("order").style.display = "none";
    document.getElementById("currency").style.display = "block";
  }

  let logo = require('./img/logo.png')

  function handleMouseOver_logo(e) {
    e.target.style.transform = "rotate(360deg)";
    e.target.style.transition = "1s";
  }

  function handleMouseOut_logo(e) {
    e.target.style.transform = "none";
  }

  function handleMouseOver_span(e) {
    e.target.style.color = "#fff";
    e.target.style.transition = "all 0.2s ease";
  }

  function handleMouseOut_span(e) {
    e.target.style.color = "#fc8403";
    e.target.style.transition = "all 0.2s ease";
  }

  function handleMouseOver_link(e) {
    e.target.style.color = "#fc8403";
    e.target.style.transition = "all 0.2s ease";
    e.target.style.borderBottom = "1px solid #fff";
    e.target.style.paddingBottom = "3px";
  }

  function handleMouseOut_link(e) {
    e.target.style.color = "#fff";
    e.target.style.transition = "all 0.2s ease";
    e.target.style.borderBottom = "none";
    e.target.style.paddingBottom = "none";
  }

    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light" id="navbar">
        <a className="navbar-brand" href="#">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" onMouseOver={handleMouseOver_logo} onMouseOut={handleMouseOut_logo} id="logo"/><span onMouseOver={handleMouseOver_span} onMouseOut={handleMouseOut_span} id="span">by Crypto</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" id="toggle">
          <span className="navbar-toggler-icon" id="icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto mr-auto">
            <a className="nav-item nav-link active text-center" id="transfer-page" href="#" onMouseOver={handleMouseOver_link} onMouseOut={handleMouseOut_link} onClick={handleClick_transfer}>Transfer<span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link active text-center" id="currency-page" href="#" onMouseOver={handleMouseOver_link} onMouseOut={handleMouseOut_link} onClick={handleClick_currency}>Currency</a>
          </div>
          <form className="form-inline align-self-sm-center">
            <button className="btn btn-outline-success m-2" type="button" onClick={() => window.open("https://bitcoin.org/", "_blank")} id="btn-bitcoin">Bitcoin</button>
            <button className="btn btn-outline-success ml-auto mr-auto" type="button" onClick={() => window.open("https://dragosvatra.ro/", "_blank")} id="btn-portfolio">Portfolio</button>
          </form>
        </div>
      </nav>
    );
  }

export default Navbar;