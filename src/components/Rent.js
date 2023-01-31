import React from 'react';
import Property from './Property';
import { Link } from 'react-router-dom';
import Overview from './Overview';
export default function Rent() {
    // let dumydata=[
    //     {}
    // ]
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center main-color fw-bold fs-5 my-4">
                        Rent Your Perfect Property
                    </div>
                    <div className="d-lg-flex col-11 shadow mx-auto py-2 rounded-3 bg-light">
                        <form className="bg-white rounded-3 main-border me-1 mb-2">
                            <div className="px-1 row align-items-center">
                                <div className="col ">
                                    <input
                                        className="form-control search-custom fw-bold form-control-borderless ps-0 search-placeholder"
                                        type="search"
                                        placeholder="Baghdad, Iraq"
                                    />
                                </div>
                                <div className="col-auto">
                                    <img src="./images/search.png" alt="search" className="search-icon" />
                                </div>
                            </div>
                        </form>
                        <div>
                            <button
                                className="btn main-border bg-white me-1 mb-2 dropdown-toggle filter-buttons-rent"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img src="./images/rent-sign.png" alt="rent-sign" className='me-1 mb-1' />
                                For Rent
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
                        <div>
                            <button
                                className="btn main-border bg-white me-1 mb-2 dropdown-toggle filter-buttons-rent"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img src="./images/price.png" alt="price" className='me-1 mb-1' />
                                Price
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
                        <div>
                            <button
                                className="btn main-border bg-white me-1 mb-2 dropdown-toggle filter-buttons-rent"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img src="./images/price.png" alt="price" className='me-1 mb-1' />
                                Price
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
                        <div>
                            <button
                                className="btn main-border bg-white me-1 mb-2 dropdown-toggle filter-buttons-rent"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img src="./images/price.png" alt="price" className='me-1 mb-1' />
                                Price
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
                        <div>
                            <button
                                className="btn main-border bg-white me-1 mb-2 dropdown-toggle filter-buttons-rent"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                More
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
                        <button className="btn main-border main-background-color text-light ms-auto mb-2 search-rent">
                            Search
                        </button>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-12 px-0 mx-0 overflow-auto mt-5 shadow d-md-flex view">
                        <div className="col-md-4 h-100">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42342.115105913006!2d44.35942169407257!3d33.31273437595766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f67a0a74193%3A0x9deda9d2a3b16f2c!2sBaghdad%2C%20Iraq!5e0!3m2!1sen!2s!4v1668992589001!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-md-8  bg-light results custom-height custom-overflow">
                            <div className="rent-title m-2 p-2 d-flex">
                                <div>
                                    <p className='fw-bold main-color mb-0'>Kansas Rental Buildings</p>
                                    <p className='main-color mt-0'>112 results</p>
                                </div>
                                <div className='ms-auto'>
                                    <span className='me-2 mb-3'>sort by:</span>
                                    <button
                                        className="btn main-border bg-white me-1 mb-2 dropdown-toggle filter-buttons-rent"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Name
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
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-11 mx-auto pe-0 mb-3">
                                    <Link to="/properties/1" className="text-decoration-none">
                                        <Property
                                            minhight="7rem" 
                                            height="150px" 
                                            showmore="none" 
                                            tagshow="block" 
                                            tag="Rent" 
                                            more="none"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-11 mx-auto pe-0 mb-3">
                                    <Link to="/properties/2" className="text-decoration-none">
                                        <Property 
                                            minhight="7rem" 
                                            height="150px" 
                                            showmore="none" 
                                            tagshow="block" 
                                            tag="Rent" 
                                            more="none" 
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-11 mx-auto pe-0 mb-3">
                                    <Link to="/properties/3" className="text-decoration-none">
                                        <Property 
                                            minhight="7rem" 
                                            height="150px" 
                                            showmore="none" 
                                            tagshow="block" 
                                            tag="Rent" 
                                            more="none" 
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-11 mx-auto pe-0 mb-3">
                                    <Link to="/properties/4" className="text-decoration-none">
                                        <Property 
                                            minhight="7rem" 
                                            height="150px" 
                                            showmore="none" 
                                            tagshow="block" 
                                            tag="Rent" 
                                            more="none"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-11 mx-auto pe-0 mb-3">
                                    <Link to="/properties/5" className="text-decoration-none">
                                        <Property 
                                            minhight="7rem" 
                                            height="150px" 
                                            showmore="none" 
                                            tagshow="block" 
                                            tag="Rent"
                                            more="none" 
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-11 mx-auto pe-0 mb-3">
                                    <Link to="/properties/6" className="text-decoration-none">
                                        <Property 
                                            minhight="7rem" 
                                            height="150px" 
                                            showmore="none" 
                                            tagshow="block" 
                                            tag="Rent" 
                                            more="none"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-11 mx-auto pe-0 mb-3">
                                    <Link to="/properties/7" className="text-decoration-none">
                                        <Property 
                                            minhight="7rem" 
                                            height="150px" 
                                            showmore="none" 
                                            tagshow="block" 
                                            tag="Rent" 
                                            more="none"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-11 mx-auto pe-0 mb-3">
                                    <Link to="/properties/8" className="text-decoration-none">
                                        <Property 
                                            minhight="7rem" 
                                            height="150px" 
                                            showmore="none" 
                                            tagshow="block" 
                                            tag="Rent" 
                                            more="none"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-11 mx-auto pe-0 mb-3">
                                    <Link to="/properties/9" className="text-decoration-none">
                                        <Property 
                                            minhight="7rem" 
                                            height="150px" 
                                            showmore="none" 
                                            tagshow="block" 
                                            tag="Rent" 
                                            more="none"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height:"10vh" }}></div>
        </>
    )
}