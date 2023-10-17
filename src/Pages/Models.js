import React from 'react';
import VechileModels from '../Components/VechileModels';

const Models = () => {
  return (
    <>
       <div className="container-fluid px-5 py-5  bg-primary">
        <h2 className='text-light fw-bold'>Vechiles Models</h2>
        <h4 className='text-info'>Home / Vechile Models</h4>
      </div>
      <VechileModels/>
      <div className="container-fluid p-0 m-0 bg-onprimary w-100 py-5">
                <h2 className='text-center text-primary fs-1 d-flex align-items-center justify-content-center'>Book a car by getting in touch with us
            <span className='text-light fw-bold  d-flex align-items-center justify-content-center'>   <span class="material-symbols-outlined fw-bold ps-4 pe-2 fs-1"> call </span> (123)-456-789
            </span>
 </h2>
            </div>

    </>
  );
}

export default Models;
