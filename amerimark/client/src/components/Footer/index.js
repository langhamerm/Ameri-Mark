import React from "react";
import "./style.css";
function Footer() {
  return (
    <div>
      <footer className="py-5 bg-dark">
        <div id="index-footer" className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-12">
              <p className="m-0 text-center text-white">
                Copyright © Ameri-Mark Inc 2019
              </p>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col col-lg-2"></div>
            <div className="col-md-auto">
              <a
                href="https://www.linkedin.com/in/mark-langhamer-55116761"
                className="fa fa-linkedin"
              />
              <a href="#" className="fa fa-facebook" />
              <a href="#" className="fa fa-google" />
            </div>
            <div className="col col-lg-2"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
