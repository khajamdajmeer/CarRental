import React from 'react';

const Footer = () => {
  return (
    <>
    <div className="container py-5  ">
        <div className="row">
            <div className="col col-lg-3 col-md-6 col-12 px-2 py-3">
                <h2><strong>Car</strong> Rental</h2>
                <p>We offers a bigh range of vehicles for all your driving needs.We have the perfect car to meet your needs</p>
                <div className="d-flex">
                    <span class="material-symbols-outlined px-2">
phone_in_talk
</span><h5>(123)-456-789</h5>
                </div>
                <div className="d-flex">
                <span class="material-symbols-outlined px-2">
mail</span><h5>rentacar@gmail.com</h5>
                </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-12 px-2 py-3">
                <h2 className='fw-bold'>Company</h2>
                <p>Hyderabad</p>
                <p>Carrers</p>
                <p>Mobile</p>
                <p>Blog</p>
                <p>How we work</p>
            </div>
            <div className="col col-lg-3 col-md-6 col-12 px-2 py-3">
                <h2     className='fw-bold'>    WORKING HOURS</h2>
                <p>Mon - Fri: 9:00AM - 9:00PM</p>
                <p>Sat: 9:00AM - 19:00PM</p>
                <p>Sun: Closed</p>
            </div>
            <div className="col col-lg-3 col-md-6 col-12 px-2 py-3">
                <h2 className='fw-bold'>SUBSCRIPTION</h2>
                <p>Subscribe your Email address for latest news & updates</p>
                <input type="text" placeholder='Enter Email' className='w-100  p-2 border border-light border-3 rounded-2' />
                <button className='btn btn-light shadow w-100 my-2 fw-bold '>Submit</button>
            </div>
        </div>
    </div>
      
    </>
  );
}

export default Footer;
