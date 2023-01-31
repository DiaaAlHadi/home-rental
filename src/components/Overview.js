import React from 'react';
export default function Overview() {
    return (
        <>
            <div className='mb-2'>
                <span className='fw-bold main-color fs-6 ms-3'>3.000$ </span>
                <span className='main-color'>New Baghdad, Iraq</span>
            </div>
            <div className='d-flex ms-3'>
                <div className='me-3'>
                    <img src="images/bed.png" alt="bed" />
                    <span className='ms-1'>2 Beds</span>
                </div>
                <div>
                    <img src="images/bath.png" alt="bath" />
                    <span className='ms-1'>2 Baths</span>
                </div>
            </div>
        </>
    )
}