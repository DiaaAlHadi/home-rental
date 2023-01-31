import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Property from './Property';
import ReactPlayer from 'react-player';

export default function View() {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow() {
        setFullscreen(true);
        setShow(true);
    }
    return (
        <div className="continaer-fluie">
            <div className="d-lg-flex">
                <div className="col-11 mx-auto">
                    <div className='mt-5 fs-5'>
                        <p className="fw-bold  mb-0">
                            Kansas Rental Buildings - New Bahgdad
                        </p>
                        <p>
                            1434 E Kael St, Mesa, AZ 85203
                        </p>
                    </div>
                    <div className='col-12 d-lg-flex'>
                        <div className="col-lg-6">
                            <div className="col-12">
                                <img className="w-100 rounded-4 mb-5 pointer" src="images/property.jpg" alt="First slide" onClick={() => handleShow()} />
                            </div>
                            <div className="row justify-content-between p-0">
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <img className="w-100 rounded-3 mb-2 pointer" src="images/property.jpg" alt="First slide" onClick={() => handleShow()} />
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <img className="w-100 rounded-3 mb-2 pointer" src="images/property.jpg" alt="First slide" onClick={() => handleShow()} />
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3 bg-image more-images">
                                    <img className="w-100 rounded-3 p-0" src="images/property.jpg" alt="First slide" />
                                    <div className="mask pointer" onClick={() => handleShow()}>
                                        <div className="d-flex justify-content-center align-items-center h-100">
                                            <p className='text-white text-center p-0 m-0'>+5 Images</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ms-lg-4">
                            <div className="d-flex mb-3">
                                <div>
                                    <span className='fw-bold fs-3'>3,000$</span>
                                    <span className='fs-5 ms-2 border-right pe-3'>per month</span>
                                    <span className='ms-2'>
                                        <img className='mb-2 me-1' src="images/owned.png" alt="crown shape" />
                                        Owned By: IZAR
                                    </span>
                                </div>
                                <div className='ms-auto'>
                                    <button className='btn bg-white main-border p-2'>
                                        <img className='me-2' src="images/share.png" alt="share icone" />
                                        Share
                                    </button>
                                </div>
                            </div>
                            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                <Modal.Header closeButton>
                                </Modal.Header>
                                <Modal.Body>
                                    <Carousel>
                                        <Carousel.Item interval={1000}>
                                            <img
                                                className="d-block w-100"
                                                src="images/property.jpg"
                                                alt="1 slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item interval={500}>
                                            <img
                                                className="d-block w-100"
                                                src="images/property.jpg"
                                                alt="2 slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="images/property.jpg"
                                                alt="3 slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="images/property.jpg"
                                                alt="4 slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="images/property.jpg"
                                                alt="5 slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="images/property.jpg"
                                                alt="6 slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="images/property.jpg"
                                                alt="7 slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="images/property.jpg"
                                                alt="8 slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Modal.Body>
                            </Modal>
                            <div className='mb-4'>
                                <p className='mb-0'>$799,0004 bd3 ba-- sqft</p>
                                <p className='mb-0'>545 E Park Avenue, Long Beach, NY 11561</p>
                                <p className='mb-0'>For saleZestimate®: $786,700</p>
                                <p className='mb-0'>Est. payment: $5,324/mo</p>
                                <p className='mb-0'>Get pre-qualified</p>
                                <p className='mb-0'>For saleZestimate®: $786,700</p>
                                <p className='mb-0'>Get pre-qualified</p>
                            </div>
                            <div className='mb-3'>
                                <div className="row mb-4">
                                    <div className="col-4 d-flex align-items-center">
                                        <img className='property-icon' src="images/wifi.png" alt="wifi icon" />
                                        <span className='ms-2'>WIFI Enabled</span>
                                    </div>
                                    <div className="col-4 d-flex align-items-center">
                                        <img className='property-icon' src="images/view.png" alt="nice view icon" />
                                        <span className='ms-2'>Nice View</span>
                                    </div>
                                    <div className="col-4 d-flex align-items-center">
                                        <img className='property-icon' src="images/heater.png" alt="fire icon" />
                                        <span className='ms-2'>Heater</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4 d-flex align-items-center">
                                        <img className='property-icon' src="images/bed.png" alt="bed icon" />
                                        <span className='ms-2'>3 BEDS</span>
                                    </div>
                                    <div className="col-4 d-flex align-items-center">
                                        <img className='property-icon' src="images/bath.png" alt="bath icon" />
                                        <span className='ms-2'>2 Baths</span>
                                    </div>
                                    <div className="col-4 d-flex align-items-center">
                                        <img className='property-icon' src="images/window.png" alt="window icon" />
                                        <span className='ms-2'>3 Windows</span>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className="col-6 px-3 py-1 fw-bold">
                                    <button className='btn border px-3 w-100'>
                                        <img className='contact-icon me-3' src="images/seller.png" alt="contact icon" />
                                        seller details
                                    </button>
                                </div>
                                <div className="col-6 px-3 py-1 fw-bold">
                                    <button className='whatsapp-btn btn border px-3 w-100'>
                                        <img className='whatsapp-icon me-3' src="images/whatsapp.png" alt="whatsapp icon" />
                                        seller whatsapp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='fw-bold fs-5'>Location and near places:</p>
                        <div className="row justify-content-between">
                            <div className="col-md-3">
                                <div className='border px-2 py-2 text-center map-container rounded-3 shadow'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53381.271213309505!2d44.268860746445206!3d33.25786637565972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f67a0a74193%3A0x9deda9d2a3b16f2c!2sBaghdad%2C%20Iraq!5e0!3m2!1sen!2s!4v1669080957990!5m2!1sen!2s" allowFullScreen="" className='map-property' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    <p className='mb-0 '>House Location</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className='border px-2 py-2 text-center map-container-n rounded-3 shadow'>
                                    <a href="https://www.google.com/maps/search/restaurants/@33.3086416,44.3435801,14z/data=!4m8!2m7!3m6!1srestaurants!2sBaghdad,+Iraq!3s0x15577f67a0a74193:0x9deda9d2a3b16f2c!4m2!1d44.3660671!2d33.315241">
                                        <div className="bg-image">
                                            <img src="images/map.png" alt="" className='map-property w-100 rounded-2' />
                                            <div className="mask" >
                                                <div className="d-flex justify-content-center align-items-center h-100">
                                                    <img src="images/restaurant.png" alt="" className='themp-img' />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <p className='mb-0 '>Nearby Restaurants</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className='border px-2 py-2 text-center map-container-n rounded-3 shadow'>
                                    <a href="https://www.google.com/maps/search/hospital/@33.3086416,44.3435801,14z/data=!3m1!4b1!4m8!2m7!3m6!1shospital!2sBaghdad,+Iraq!3s0x15577f67a0a74193:0x9deda9d2a3b16f2c!4m2!1d44.3660671!2d33.315241">
                                        <div className="bg-image">
                                            <img src="images/map.png" alt="" className='map-property w-100 rounded-2' />
                                            <div className="mask" >
                                                <div className="d-flex justify-content-center align-items-center h-100">
                                                    <img src="images/hospital.png" alt="" className='themp-img' />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <p className='mb-0 '>Nearby hospitals</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className='border px-2 py-2 text-center map-container-n rounded-3 shadow'>
                                    <a href="https://www.google.com/maps/search/parking/@33.3085724,44.3435801,14z/data=!3m1!4b1!4m8!2m7!3m6!1sparking!2sBaghdad,+Iraq!3s0x15577f67a0a74193:0x9deda9d2a3b16f2c!4m2!1d44.3660671!2d33.315241">
                                        <div className="bg-image">
                                            <img src="images/map.png" alt="" className='map-property w-100 rounded-2' />
                                            <div className="mask" >
                                                <div className="d-flex justify-content-center align-items-center h-100">
                                                    <img src="images/parking.png" alt="" className='themp-img' />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <p className='mb-0 '>Nearby parks</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className='border px-2 py-2 text-center map-container-n rounded-3 shadow'>
                                    <a href="https://www.google.com/maps/search/school/@33.3085031,44.3435802,14z/data=!3m1!4b1!4m7!2m6!3m5!2sBaghdad,+Iraq!3s0x15577f67a0a74193:0x9deda9d2a3b16f2c!4m2!1d44.3660671!2d33.315241">
                                        <div className="bg-image">
                                            <img src="images/map.png" alt="" className='map-property w-100 rounded-2' />
                                            <div className="mask" >
                                                <div className="d-flex justify-content-center align-items-center h-100">
                                                    <img src="images/school.png" alt="" className='themp-img' />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <p className='mb-0 '>Nearby Schools</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className='fw-bold fs-5'>Features and services:</p>
                        <div className="row justify-content-evenly">
                            <div className="col-lg-2 col-md-3 col-sm-6 d-flex mb-2 justify-content-sm-between justify-content-md-start">
                                <img src="images/duplex.png" alt="duplex" className='feature-icons my-auto' />
                                <div className='my-auto ms-3'><span className='feature-text'>Duplex</span></div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 d-flex mb-2 justify-content-sm-between justify-content-md-start">
                                <img src="images/roms.png" alt="roms icon" className='feature-icons my-auto' />
                                <div className='my-auto ms-2'><span className='feature-text'>6 bedrooms</span></div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 d-flex mb-2 justify-content-sm-between justify-content-md-start">
                                <img src="images/baths.png" alt="bathtop" className='feature-icons my-auto' />
                                <div className='my-auto ms-2'><span className='feature-text'>4 bathrooms</span></div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 d-flex mb-2 justify-content-sm-between justify-content-md-start">
                                <img src="images/air.png" alt="air" className='feature-icons my-auto' />
                                <div className='my-auto ms-2'><span className='feature-text'>Forced air</span></div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 d-flex mb-2 justify-content-sm-between justify-content-md-start">
                                <img src="images/carag.png" alt="carag" className='feature-icons my-auto' />
                                <div className='my-auto ms-2'><span className='feature-text'>2 Attached garage spaces</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="fw-bold fs-5">Take a Tour in the house:</p>
                        <div className="col-11 mx-auto">
                            <ReactPlayer url={"https://www.youtube.com/embed/Gic_CtkJSjE"} controls={true} width={"100%"} />
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="fw-bold fs-5">More Homes for you:</p>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-11 mx-auto pe-0 mb-3">
                                <Property
                                    minhight="7rem"
                                    height="150px"
                                    showmore="none"
                                    tagshow="none"
                                    overview="block"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 col-11 mx-auto pe-0 mb-3">
                                <Property
                                    minhight="7rem"
                                    height="150px"
                                    showmore="none"
                                    tagshow="none"
                                    overview="block"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 col-11 mx-auto pe-0 mb-3">
                                <Property
                                    minhight="7rem"
                                    height="150px"
                                    showmore="none"
                                    tagshow="none"
                                    overview="block"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}