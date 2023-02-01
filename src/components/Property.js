import React from 'react';
import bath from '../accesst/images/bath.png'
import bed from '../accesst/images/bed.png'
import arrowLeftDark from '../accesst/images/arrow-left-dark.png'
import { Link } from 'react-router-dom';
export default function Property(props) {
    
    return (
        <>
            <div className="col-12 mb-2 px-2 ">
                <div className="card text-light card-bg-image" style={{ minHeight: props.minheight, height: props.height, backgroundImage: props.img }}>
                    <div className=" d-flex flex-column">
                        <div className="card-body">
                            <h4 className="card-title mt-0 "><a className="text-white text-decoration-none" herf="#">{props.name}</a></h4>
                            <button className='btn btn-sm bg-white main-color rounded-3 py-2 px-3 tagshow ms-auto fw-bold' style={{ display: props.tagshow }}>{props.tag}</button>
                        </div>
                        <div className="card-footer footer-postion" style={{ display: props.showmore }}>
                            <div className="media">
                                <Link to="/properties/:id">
                                    <button className="btn bg-light main-color pe-3 opacity-custom">
                                        View Home <img src={arrowLeftDark} alt="arrow" className='mb-1 ms-3 d-inline' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: props.overview }}>
                <div className='mb-2'>
                    <span className='fw-bold main-color fs-6 ms-3'>3.000$ </span>
                    <span className='main-color'>New Baghdad, Iraq</span>
                </div>
                <div className='d-flex ms-3'>
                    <Link to="/properties/:props.id" style={{display:props.more}}>
                        <button className="btn btn-sm bg-white main-color me-2 shadow" >
                            <span className='view-text'>View Home <img src={arrowLeftDark} alt="arrow" className='mb-1 ms-1 view-arrow d-inline' /></span>
                        </button>
                    </Link>
                    <div className='me-3 d-flex my-auto'>
                        <img className="property-icon-bottom" src={bed} alt="bed" />
                        <div><span className='ms-1 '>2 Beds</span></div>
                    </div>
                    <div className='d-flex my-auto'>
                        <img className="property-icon-bottom" src={bath} alt="bath" />
                        <div><span className='ms-1'>2 Baths</span></div>
                    </div>
                </div>
            </div>
        </>
    );
}