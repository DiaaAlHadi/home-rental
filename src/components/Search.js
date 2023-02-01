import search from '../accesst/images/search.png'
import React, { Component, useState } from "react";
export default function Search() {
  const [state, setState] = useState(0);
  return (
    <div className=" search-window  mb-5 rounded-2 bg-white p-4 custome-shadow col-12 col-md-8">
      <br />
      <div className="row justify-content-center px-5">
        <div className="col-10">
          <div className="d-flex justify-content-center position-relative">
            <button
              className={
                state === 0
                  ? "d-flex mb-5 main-border justify-content-center align-items-center selecter sale-border active-filter"
                  : "non-active-filter d-flex mb-5 main-border justify-content-center sale-border align-items-center selecter"
              }
              onClick={() => setState(0)}
            >
              For Sale<span className={state === 0 ? "drop" : "d-none"}></span>
            </button>
            <button
              className={
                state === 1
                  ? "d-flex mb-5 main-border justify-content-center align-items-center selecter active-filter"
                  : "non-active-filter d-flex mb-5 main-border justify-content-center align-items-center selecter"
              }
              onClick={() => setState(1)}
            >
              For Rent<span className={state === 1 ? "drop" : "d-none"}></span>
            </button>
            <button
              className={
                state === 2
                  ? "d-flex mb-5 main-border justify-content-center align-items-center selecter invest-border active-filter"
                  : "non-active-filter d-flex mb-5 main-border justify-content-center align-items-center invest-border selecter"
              }
              onClick={() => setState(2)}
            >
              For Invest
              <span className={state === 2 ? "drop" : "d-none"}></span>
            </button>
          </div>
          <form className="bg-white rounded-3  main-border ">
            <div className="p-2 row no-gutters align-items-center">
              <div className="col-auto">
                <img src={search} alt="search" className="ms-2" />
              </div>
              <div className="col ps-0">
                <input
                  className="form-control search-custom  form-control-borderless ps-0 search-placeholder"
                  type="search"
                  placeholder="Location..."
                />
              </div>
            </div>
          </form>
          <div className="d-lg-flex mt-4 justify-content-between">
            <div className="dropdown col-sm-12 col-md-auto">
              <button
                className="btn btn-white btn-sm main-color main-border main-color dropdown-toggle p-2 filter-buttons mb-2"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PROPERTY TYPE
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown col-sm-12 col-md-auto">
              <button
                className="btn btn-white btn-sm main-color main-border main-color dropdown-toggle p-2 filter-buttons mb-2"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PRICE RANGE
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown col-sm-12 col-md-auto">
              <button
                className="btn btn-white btn-sm main-color main-border main-color dropdown-toggle p-2 filter-buttons mb-2"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Rooms
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown col-sm-12 col-md-auto">
              <button
                className="btn btn-white btn-sm main-color main-border main-color dropdown-toggle p-2 text-center filter-buttons mb-2"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Beds
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center h-25">
            <button className="btn main-background-color text-white px-5 py-0 result-btn mt-2 position-absolute">Reselts</button>
          </div>
        </div>
      </div>
    </div>
  );
}
