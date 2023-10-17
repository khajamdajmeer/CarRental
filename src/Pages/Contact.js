import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="container-fluid px-5 py-5  bg-primary">
        <h2 className='text-light fw-bold'>Contact</h2>
        <h4 className='text-info'>Home / Contact</h4>
      </div>
      <div className="container ">
        <div className="row py-2">
            <div className="col col-12 col-lg-5 p-5">
                <h2>Need additional Information?</h2>
                <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>

                <div className='d-flex py-2 fw-bold'>
                <span class="material-symbols-outlined fw-bold px-2 text-light">call</span> (123)-456-789
                </div>
                <div className='d-flex py-2 fw-bold'>
                <span class="material-symbols-outlined fw-bold px-2 text-light">Mail</span> rentacar@gmail.com
                </div>
                <div className='d-flex py-2 fw-bold'>
                <span class="material-symbols-outlined fw-bold px-2 text-light">location_on</span> Hyderabad
                </div>

            </div>
            <div className="col col-12 col-lg-7">
            <div className="container flex-column d-flex ">
                    <label className=' fw-bold fs-3 ' htmlFor="">Name <span className='text-light fs-1 fw-bold'>*</span></label>
                    <input type="text" className='border border-1 border-light rounded px-2 py-2'  placeholder='Enter Your Name'/>
                </div>
                <div className="container flex-column d-flex">
                    <label className=' fw-bold fs-3 ' htmlFor="">Email <span className='text-light fs-1 fw-bold'>*</span></label>
                    <input type="email" className='border border-1  py-2 border-light rounded px-2'  placeholder='Enter Your Name'/>
                </div>
                <div className="container flex-column d-flex ">
                    <label className=' fw-bold fs-3 ' htmlFor="">Tell Us About it <span className='text-light fs-1 fw-bold'>*</span></label>
                    <textarea type="text" className='border border-1 border-light rounded px-2'  style={{resize:'none',height:'8em'}}  placeholder='Write Here...'/>
                </div>
                <div className="container flex-column d-flex py-2">
                    <button className='btn border border-2 btn-light fw-bold py-2'>submit</button>
                </div>
            </div>
        </div>
      </div>
      <div className="container-fluid p-0 m-0 bg-onprimary w-100 py-5" style={{background:'black'}}>
                <h2 className='text-center text-primary fs-1 d-flex align-items-center justify-content-center'>Get in touch with us
            <span className='text-light fw-bold  d-flex align-items-center justify-content-center'>   <span class="material-symbols-outlined fw-bold ps-4 pe-2 fs-1"> call </span> (123)-456-789
            </span>
 </h2>
            </div>
      {/* <div className="container-fluid border-bottom"></div> */}
    </>
  );
}

export default Contact;
