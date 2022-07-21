import React, {useState} from "react";
import ReactDOM from "react-dom";

function Footer (props) {

  const footerDivStyle = {
    backgroundColor: "#040303",
  }

  const hStyle = {
    color: "#fc8403",
  }

  function handleClick_subscribe() {
    document.getElementById("thankyou").style.display = "block";
    document.getElementById("thankyou").style.transition = "all 3s ease";
  }

    return (
      <div style={footerDivStyle} className="text-center" id="footer">
        <footer className="w-100 py-4 flex-shrink-0">
          <div className="container py-4">
              <div className="row gy-4 gx-5">
                  <div className="col-lg-4 col-md-6">
                      <h5 style={hStyle} className="h1">PORTFOLIO</h5>
                      <p className="small text-muted">These are the links to all the websites I had created so far since 2020.</p>
                      <a style={{ textDecoration: 'none'}} href="https://dragosvatra.ro/" target="_blank"><p className="small text-muted mb-0">Dragoș Vatră &copy; All rights reserved</p></a>
                  </div>
                  <div className="col-lg-2 col-md-6">
                      <h5 className="text-white mb-3">Quick links</h5>
                      <ul className="list-unstyled text-muted">
                          <li><a style={{ textDecoration: 'none', color: '#fff' }} href="https://dragosvatra.ro/jslibs/loader.html" target="_blank">JavaScript Libraries</a></li>
                          <li><a style={{ textDecoration: 'none', color: '#fff' }} href="https://dragosvatra.ro/python/loader.html" target="_blank">Python</a></li>
                          <li><a style={{ textDecoration: 'none', color: '#fff' }} href="https://dragosvatra.ro/phpapp/loader.html" target="_blank">PHP Application</a></li>
                          <li><a style={{ textDecoration: 'none', color: '#fff' }} href="https://dragosvatra.ro/php/loader.html" target="_blank">PHP and Vue JS</a></li>
                          <li><a style={{ textDecoration: 'none', color: '#fff' }} href="https://dragosvatra.ro/vue/loader.html" target="_blank">Bootstrap Vue</a></li>
                          <li><a style={{ textDecoration: 'none', color: '#fff' }} href="https://dragosvatra.ro/bootstrap/loader.html" target="_blank">Bootstrap</a></li>
                      </ul>
                  </div>
                  <div className="col-lg-2 col-md-6">
                      <h5 className="text-white mb-3">Quick links</h5>
                      <ul className="list-unstyled text-muted">
                        <li><a style={{ textDecoration: 'none', color: '#fff' }} href="https://dragosvatra.ro/vanilla/loader.html" target="_blank">Vanilla JS</a></li>
                        <li><a style={{ textDecoration: 'none', color: '#fff' }} href="https://dragosvatra.ro/wp/" target="_blank">Wordpress Presentation</a></li>
                        <li><a style={{ textDecoration: 'none', color: '#fff' }} href="https://nikadesign.online/" target="_blank">Wordpress Shop</a></li>
                        <li><a style={{ textDecoration: 'none', color: '#fff' }} href="https://dragosvatra.ro/mediaqueries/loader.html" target="_blank">Media Queries</a></li>
                        <li><a style={{ textDecoration: 'none', color: '#fff' }} href="https://dragosvatra.ro/flexbox/loader.html" target="_blank">Flex Box</a></li>
                        <li><a style={{ textDecoration: 'none', color: '#fff' }} href="https://dragosvatra.ro/grid/loader.html" target="_blank">Grid System</a></li>
                      </ul>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <h5 className="text-white mb-3">Keep in touch</h5>
                      <form action="#">
                          <div className="input-group mb-3">
                              <input className="form-control" type="text" placeholder="Your e-mail adresse" aria-label="Your e-mail adresse" aria-describedby="button-addon2" />
                              <button type="button" className="btn btn-light" onClick={handleClick_subscribe}>Subscribe</button>
                              <br />
                          </div>
                      </form>
                      <p className="h3" style={{ color: '#fc8403', display: 'none' }} id="thankyou">Thank you!</p>
                  </div>
              </div>
          </div>
      </footer>
  </div>
    )
  }

export default Footer;