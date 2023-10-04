import React from 'react';
import homecar from '../Images/main-car.png';
import bgshape from '../Images/bgshape.png';
const Home = () => {
    return (
        <>
        <div className="container-fluid  d-flex flex-column-reverse flex-md-row cheight p-0  justify-content-center w-100 ">
            
            <div className="container-fluid bg-success px-0 ps-4 d-flex w-45 flex-column justify-content-center align-items-center ">
                <h2 className="container-fluid text-secondary  w-100 ">Plan Your Trip Now</h2>
                <h1 className="container-fluid text-light fw-bold py-3">Plan <span className='text-secondary'>Big</span>  on Our Rental Service</h1>
                <h4 className="container-fluid fs-6 text-info">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</h4>
                <div className="d-flex w-100  justify-content-start my-4">
                    <button className='btn btn-light text-success mx-4 my-2 fw-bold'>Book Now</button>
                    <button className='btn btn-secondary text-success mx-4 my-2 fw-bold'>Learn More</button>
                </div>
            </div>
            <div className="container-fluid bg-success text-light w-55 w-md-100 d-flex mh-lg-100 justify-content-center  position-relative align-items-center ">
            <img src={homecar} alt="" className='h-auto w-100' style={{ zIndex: 3 }} />

                <img src={bgshape} alt="" className='position-absolute top-0 end-0  h-100 '  />
            </div>
            
        </div>
          
        </>
    );
}

export default Home;
