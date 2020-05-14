import React from "react";
import "./style.css";
function Card(props) {
  return (
    <div className="container">
      <div id="service-card" className="card h-100">
        <h4 id="page-header" className="card-header">
          {props.header}
        </h4>
        <div className="card-body">
          <p className="card-text">{props.body}</p>
        </div>
        {/* <div className="card-footer">
          <a href="portfolio-1-col.html" className="btn btn-dark">
            Learn More
          </a>
        </div> */}
      </div>
    </div>
  );
}
export default Card;
