import React from "react";
import ReactDOM from "react-dom/client";
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div className="conatiner-fluid langBar  ps-md-5 ps-sm-2">
        <img src="./images/Path149.png" alt="" className="ms-lg-5 ms-md-3" />
        <button className="btn langBtn langText ms-2 text-light p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="d-inline-block me-1 text-light">Language
            <br />
            <i className="langOption me-3 text-light">(ENGLISH)</i>
          </span>
          <i className="arrow down mb-3"></i>
        </button>
        <ul className="dropdown-menu options">
          <li>
            <button className="dropdown-item" type="button">ENGLISH</button>
          </li>
          <li>
            <button className="dropdown-item" type="button">ARABIC</button>
          </li>
        </ul>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm bg-white rounded">
        <div className="container-fluid mx-md-5">
          <Link className="navbar-brand ms-lg-4" to="/">
            <img src="./images/logo.png" alt="logo" />
            <span className="fw-bold ms-1">swa</span>
            <span className="fw-normal">Tech</span>
          </Link>
          <div className="d-none d-lg-inline-block d-xl-block">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item border-right px-md-3">
                <Link
                  className="nav-link nav-link-custom"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item border-right px-md-3">
                <Link
                  className="nav-link nav-link-custom"
                  aria-current="page"
                  to="/buy"
                >
                  Buy
                </Link>
              </li>
              <li className="nav-item border-right px-md-3">
                <Link
                  className="nav-link nav-link-custom"
                  aria-current="page"
                  to="/rent"
                >
                  Rent
                </Link>
              </li>
            </ul>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-1">
              <li className="nav-item d-md-block d-lg-none">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item d-md-block d-lg-none">
                <Link className="nav-link" aria-current="page" to="/buy">
                  Buy
                </Link>
              </li>
              <li className="nav-item d-md-block d-lg-none">
                <Link className="nav-link" aria-current="page" to="/rent">
                  Rent
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item pe-lg-3 border-right custom-border-bottom">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item px-lg-3">
                <Link className="nav-link active" to="/login">
                  LOG IN
                </Link>
              </li>
              <li className="nav-item px-lg-3">
                <Link className="nav-link rounded-3 signup-border signup-hover " to="/signup">
                  SIGN UP
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
