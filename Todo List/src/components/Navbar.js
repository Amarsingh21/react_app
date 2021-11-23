import React from "react";
import "./style.css";
export default function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid divflex">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div classNameName="collapse navbar-collapse divflex" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Toggle button</button>
          </ul>
        </div>
      </div>
    </nav>
  )
}