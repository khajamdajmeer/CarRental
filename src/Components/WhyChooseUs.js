import React from 'react';
import cargroup from '../Images/cargroup.png';
import why1 from '../Images/whyus1.png';
import why2 from '../Images/whyus2.png';
import why3 from '../Images/whyus3.png';
const WhyChooseUs = () => {
    return (
        <>
            <div className="container-fluid p-0 m-0 bg-onprimary w-100 py-5">
                <h2 className='text-center text-primary fs-1 '>Save big with our cheap car rental!</h2>
                <h4 className='text-center text-primary'>Top Airports. Local Suppliers. <span className='text-light'>24/7</span> Support.</h4>
            </div>
            <div className="container-fluid w-100 ">
                <img src={cargroup} alt="" className='w-100 h-auto' />
            </div>
            <div className="container d-flex flex-column  flex-lg-row py-4">
                <div className="container px-lg-5 py-5 ">
                    <h5 className='py-1 fw-bold'>Why Choose Us</h5>
                    <h2 className='py-1 fw-bold fs-1'>Best valued deals you will ever find</h2>
                    <p className='py-1'>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                    <button className="btn btn-light px-5 shadow-light">Find Details</button>
                </div>
                <div className="container py-5">
                    <div className="container-fluid d-flex flex-lg-row flex-column px-lg-5  py-2 ">
                        <img src={why1} alt="" className='h-auto w-25' />
                        <div className="container-fluid w-100">
                            <h2>Cross Country Drive</h2>
                            <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                        </div>
                    </div>
                    <div className="container-fluid d-flex flex-lg-row flex-column  px-lg-5 py-2">
                        <img src={why3} alt="" className='w-25'/>
                        <div className="container-fluid ">
                            <h2>All Inclusive Pricing</h2>
                            <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                        </div>
                    </div>
                    <div className="container-fluid d-flex flex-lg-row flex-column  px-lg-5 py-2">
                        <img src={why2} alt="" className='w-25' />
                        <div className="container-fluid ">
                            <h2>No hidden Charges</h2>
                            <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyChooseUs;
