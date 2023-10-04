import React from 'react';
import img1 from '../Images/plan1.png';
import img2 from '../Images/plan2.png';
import img3 from '../Images/plan3.png';

const PlanTrip = () => {
  return (
    <>
       
      <div className="container-fluid py-5"> 

      <h4 className='text-center text-secondary'>Plan your trip now</h4>
      <h2 className='text-center'> Quick & easy car rental</h2>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 text-center p-4">
            <img src={img1} alt="" />
            <h4>Select Car</h4>
            <p className='text-center px-4'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center p-4">
        <img src={img2} alt="" />
            <h4>Contact Operator</h4>
            <p className='text-center px-4'>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center p-4"><img src={img3} alt="" />
            <h4>Let's Drive</h4>
            <p className='text-center px-5'>Whether you're hitting the open road, we've got you covered with our wide range of cars</p></div>
      </div>
    </div>
      
      </div>
    </>
  );
}

export default PlanTrip;
