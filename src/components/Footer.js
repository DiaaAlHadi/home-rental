import React from 'react';
import ReactDOM from "react-dom/client";
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className="mt-5">
            <footer className="custom-rounded text-center text-lg-start text-white main-background-color position-relative">
                <div className="pb-0">
                    <div className="container position-absolute top-0 start-50 translate-middle">
                        <br />
                        <div className="row justify-content-center">
                            <div className=" col-md-7 col-lg-6">
                                <form className="bg-white rounded-4 shadow-lg">
                                    <div className="p-2 row no-gutters align-items-center">
                                        <div className="col-auto"></div>
                                        <div className="col">
                                            <input className="form-control search-custom form-control-lg form-control-borderless" type="search" placeholder="Subscribe to mail feed" />
                                        </div>

                                        <div className="col-auto">
                                            <button className="btn btn-lg main-background-color text-light" type="submit">Done <img src="./images/arrow-right.png" alt="arrow" /></button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <section className="pt-5">
                        <div className="mx-0 row">
                            <div className="col-lg-2 d-sm-none d-md-block"></div>
                            <div className="col-lg-8 pt-5 mt-md-5 d-md-flex">
                                <div className="col-lg-3 me-md-5">
                                    <div className='mt-3'>
                                        <img src="./images/logoWhite.png" alt="logo" />
                                        <span className="fs-4 fw-bold ms-1 text-light">swa</span>
                                        <span className="fs-4 fw-normal text-light">Tech</span>
                                        <hr className='custom-h w-25 d-lg-block d-none' />
                                        <p className=' custom-font-size text-light mt-3'>the most beautiful exclusive properties and luxury apartments</p>
                                        <div className='d-flex justify-content-around mb-3'>
                                            <a href="https://www.facebook.com   "><img src="./images/facebook.png" alt="facebook page link" className='social-media' /></a>
                                            <a href="https://twitter.com/"><img src="./images/twitter.png" alt="twitter page link" className='social-media' /></a>
                                            <a href="https://www.instagram.com/"><img src="./images/instagram.png" alt="instagram page link" className='social-media' /></a>
                                            <a href="https://telegram.org/"><img src="./images/telegram.png" alt="telegra link" className='social-media' /></a>
                                        </div>
                                        <hr className='custom-h w-100  d-sm-block d-md-none d-lg-none' />

                                    </div>
                                </div>
                                <div className="col-lg-5 text-light d-flex me-md-5">
                                    <div className="col-lg-5 col-6 me-md-auto">
                                        <p className='text-light fw-bold'>Useful Links</p>
                                        <hr className='custom-h w-25 d-lg-block d-none' />
                                        <p className='text-light custom-font-size'><Link to="/about" className='text-light text-decoration-none'>About</Link></p>
                                        <p className='text-light custom-font-size'><Link to="/partner" className='text-light text-decoration-none'>Partner</Link></p>
                                        <p className='text-light custom-font-size'><Link to="/contact" className='text-light text-decoration-none'>Contact</Link></p>


                                    </div>
                                    <div className="col-lg-6 col-6">
                                        <p className="text-light fw-bold">Help ?</p>
                                        <hr className='custom-h w-25 d-lg-block d-none' />
                                        <p className='text-light custom-font-size'><Link to="/FAQ" className='text-light text-decoration-none'>FAQ</Link></p>
                                        <p className='text-light custom-font-size'><Link to="/terms" className='text-light text-decoration-none'>Terms & condition</Link></p>
                                        <p className='text-light custom-font-size'><Link to="/policy" className='text-light text-decoration-none'>Policy</Link></p>
                                        <p className='text-light custom-font-size'><Link to="/privacy" className='text-light text-decoration-none'>Privacy</Link></p>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <p className="text-light fw-bold">Download the app</p>
                                    <hr className='custom-h w-25 d-lg-block d-none' />
                                    <hr className='custom-h w-100 d-none d-sm-block d-md-none d-lg-none' />
                                    <div className="flex mb-sm-3">
                                        <button className='btn btn-sm'><img src="./images/appstore.png" alt="app store download" /></button>
                                        <button className="btn btn-sm"><img src="./images/googleplay.png" alt="googleplay donwload" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 d-sm-none d-md-block"></div>
                        </div>
                    </section>

                    <div className="p-2 text-center footerBar d-flex ">
                        <div className="col-md-2 d-none d-md-block d-lg-block"></div>
                        <div className="col-md-8 col-12 d-flex justify-content-between">
                            <div className="col-md-6 d-md-flex">
                                <span className='footerBarText mt-1 text-light'>© Copyright 2021, IZAR.com</span>
                            </div>
                            <div className=" d-flex justify-content-end col-6">
                                <Link className="text-white text-decoration-none footerBarText mt-1" to="terms.js">Terms & Condition</Link>
                                <span className='mx-1 text-light'>|</span>
                                <Link className="text-white text-decoration-none footerBarText mt-1" to="privacy.js">Privacy Policy</Link>
                            </div>
                        </div>
                        <div className="col-md-2 d-none d-md-block d-lg-block"></div>
                    </div>
                </div>
            </footer>
        </div >
    )
}
export default Footer;