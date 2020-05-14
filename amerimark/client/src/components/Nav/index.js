import React from "react";
import "./style.css";

function Nav() {
  return (
<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container">
    <a className="navbar-brand" href="/">Ameri-Mark Inc</a>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">

                <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Services
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
            <a className="dropdown-item" href="/services/1">Appraisal and Valuation Services</a>
            <a className="dropdown-item" href="/services/2">Attorney and CPA Real Estate Services</a>
            <a className="dropdown-item" href="/services/3">Real Estate Consulting</a>
            <a className="dropdown-item" href="/services/4">Brokerage Services</a>
          </div>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/news">Newsletter</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>

      </ul>
    </div>
  </div>
</nav>

  );
}
export default Nav;
