import React,{useState} from 'react';
import shift from '../Images/shift.jpeg';
import verna from '../Images/verna.jpeg';
import thar from '../Images/Thar.jpeg';
import ertiga from '../Images/ertiga.jpeg';
import fortuner from '../Images/fortuner.jpg';

const Booking = () => {


  const carsdata = [{
    fullName:'Maruti Suzuki Swift',
    modelimg:shift,
    price:'2500',
    model:"shift",
    segment:"B",
    year:'2020',
    doors:'4 / 5',
    transmition:'Manual',
    Fuel:'Petrol'

},
{
    fullName:'Hundai Verna',
    modelimg:verna,
    price:'3200',
    model:"Verna",
    segment:"C2",
    year:'2018',
    doors:'4 / 5',
    transmition:'Manual',
    Fuel:'Petrol'

},{
    fullName:'Maruthi Suzuki Ertiga',
    modelimg:ertiga,
    price:'4000',
    model:"Ertiga",
    segment:"7 seater MUV",
    year:'2022',
    doors:'4 / 5',
    transmition:'Manual',
    Fuel:'Petrol'

},{
    fullName:'Toyoto Fortuner',
    modelimg:fortuner,
    price:'4500',
    model:"Fortuner",
    segment:"D2 SUV",
    year:'2015',
    doors:'4 / 5',
    transmition:'Manual',
    Fuel:'Petrol'

},
{
    fullName:'Mahindra Thar 4x4',
    modelimg:thar,
    price:'4000',
    model:"Thar",
    segment:"Compact SUV",
    year:'2022',
    doors:'3 / 5',
    transmition:'Manual 4x4',
    Fuel:'Petrol'

},
{
    fullName:'Mahindra Thar 4x4',
    modelimg:thar,
    price:'4000',
    model:"Thar",
    segment:"Compact SUV",
    year:'2022',
    doors:'3 / 5',
    transmition:'Manual 4x4',
    Fuel:'Petrol'

},


]

const mindate = ()=>{
  const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
}
const [minDate, setMinDate] = useState(mindate());
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
        <select type="text" className="form-control border-secondary rounded py-2" placeholder='Select Your Ride'>
          <option value="">Select Your Ride</option>
{carsdata.map((ele,index)=>{
  return(
    <option className='fw-bold'>{ele.fullName}</option>
  )
})}
        </select>
      </div>
      <div className="col-12 col-md-6 col-lg-4 py-2">
        <label htmlFor="" className="text-secondary fw-bold py-2 d-flex">
          <span className="material-symbols-outlined mx-1 p-0">location_on</span>Pick-up<span className="text-light">*</span>
        </label>
        <input type="text" className="form-control border-secondary rounded py-2" placeholder='Select' />
      </div>
      <div className="col-12 col-md-6 col-lg-4 py-2">
        <label htmlFor="" className="text-secondary fw-bold py-2 d-flex">
          <span className="material-symbols-outlined mx-1">where_to_vote</span>Drop-off<span className="text-light">*</span>
        </label>
        <input type="text" className="form-control border-secondary rounded py-2" placeholder='Select' />
      </div>
      <div className="col-12 col-md-6 col-lg-4 py-2">
        <label htmlFor="" className="text-secondary fw-bold py-2 d-flex">
          <span className="material-symbols-outlined mx-1 ">today</span>Pick-up<span className="text-light">*</span>
        </label>
        <input type="date" className="form-control border-secondary rounded py-2" placeholder='Select'  min={minDate} />
      </div>
      <div className="col-12 col-md-6 col-lg-4 py-2">
        <label htmlFor="" className="text-secondary fw-bold py-2 d-flex">
          <span className="material-symbols-outlined mx-1 text-light">Event</span>Drop-off<span className="text-light">*</span>
        </label>
        <input type="date" className="form-control border-secondary rounded py-2" placeholder='Select' min={minDate} />
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
