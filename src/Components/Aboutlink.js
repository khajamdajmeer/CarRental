import React from 'react';
import aboutman from '../Images/AboutMan.jpg';

const Aboutlink = () => {
  return (
    <>
      <div className="container-fluid px-5 py-5  bg-primary">
        <h2 className='text-light fw-bold'>About</h2>
        <h4 className='text-info'>Home / About</h4>
      </div>

<div className="container py-5">
        <div className="row h-auto "> 
        <div className="col col-xs-12 col-sm-12 col-md-5 d-flex align-items-center justify-content-center p-0">
            <img src={aboutman} alt="" className='mt-5' style={{maxWidth:'100vw'}} />
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-7 ">
            <h2 className=' fs-3 text-light'>About Company</h2>
            <h2 className='fs-1 fw-bold'>You start the engine and your <span className='text-light fw-bolder'>adventure </span>begins</h2>
            <p className='fs-4 '>At <span className='fw-bold text-secondary'> A K Car Rental</span>, we're all about making your journey remarkable. With a wide range of top-quality vehicles and a commitment to exceptional service, we're here to enhance your travel experience. Explore the world in comfort and style with us.</p>
            <div className="d-flex py-3 flex-wrap align-items-center  w-100 justify-content-center">
                <div className=' text-center'>   <span class="material-symbols-outlined fw-bold text-light" style={{fontSize:'50px'}}>directions_car</span>
                <div className="d-flex align-items-center">
                    <h2 className='px-2 fw-bold' style={{fontSize:'80px'}}>12</h2>
                    <h3>Car Types</h3>
                </div>

</div>
<div className=' text-center px-3'>   <span class="material-symbols-outlined fw-bold text-light" style={{fontSize:'50px'}}>garage</span>
                <div className="d-flex align-items-center">
                    <h2 className='px-2 fw-bold' style={{fontSize:'80px'}}>40</h2>
                    <h3>Rental Outlets</h3>
                </div>

</div>
                <div></div>
            </div>
         
        </div>
       </div>
       </div>
       <div className="container-fluid p-0 m-0 bg-onprimary w-100 py-5">
                <h2 className='text-center text-primary fs-1 d-flex align-items-center justify-content-center'>Book a car by getting in touch with us
            <span className='text-light fw-bold  d-flex align-items-center justify-content-center'>   <span class="material-symbols-outlined fw-bold ps-4 pe-2 fs-1"> call </span> (123)-456-789
            </span>
 </h2>
            </div>
    </>
  );
}

export default Aboutlink;
