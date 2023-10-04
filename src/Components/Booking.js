import React from 'react';

const Booking = () => {
    return (
        <>
            <div className="container-fluid bg-success pb-5">
  <div className="shadow container border bg-danger p-4">
    <h2 className="text-secondary fw-bold">BOOK A CAR</h2>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4 py-2">
        <label htmlFor="" className="text-secondary fw-bold py-2">
          <span className="material-symbols-outlined text-light mx-1">no_crash</span>Select Your Car Type<span className="text-light">*</span>
        </label>
        <input type="text" className="form-control border-secondary rounded py-2" />
      </div>
      <div className="col-12 col-md-6 col-lg-4 py-2">
        <label htmlFor="" className="text-secondary fw-bold py-2 d-flex">
          <span className="material-symbols-outlined mx-1 p-0">location_on</span>Pick-up<span className="text-light">*</span>
        </label>
        <input type="text" className="form-control border-secondary rounded py-2" />
      </div>
      <div className="col-12 col-md-6 col-lg-4 py-2">
        <label htmlFor="" className="text-secondary fw-bold py-2 d-flex">
          <span className="material-symbols-outlined mx-1">where_to_vote</span>Drop-off<span className="text-light">*</span>
        </label>
        <input type="text" className="form-control border-secondary rounded py-2" />
      </div>
      <div className="col-12 col-md-6 col-lg-4 py-2">
        <label htmlFor="" className="text-secondary fw-bold py-2 d-flex">
          <span className="material-symbols-outlined mx-1">today</span>Pick-up<span className="text-light">*</span>
        </label>
        <input type="text" className="form-control border-secondary rounded py-2" />
      </div>
      <div className="col-12 col-md-6 col-lg-4 py-2">
        <label htmlFor="" className="text-secondary fw-bold py-2 d-flex">
          <span className="material-symbols-outlined mx-1">Event</span>Drop-off<span className="text-light">*</span>
        </label>
        <input type="text" className="form-control border-secondary rounded py-2" />
      </div>
      <div className="col-12 col-md-6 col-lg-4 py-2">
        <label htmlFor="" className="text-primary fw-bold py-2 d-flex">a</label>
        <button className="btn btn-light text-primary py-2 border-light fw-bold w-100">Book</button>
      </div>
    </div>
  </div>
</div>

        </>
    );
}

export default Booking;
