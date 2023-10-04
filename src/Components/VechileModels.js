import React, { useState } from 'react';
import shift from '../Images/shift.jpeg';
import verna from '../Images/verna.jpeg';
import thar from '../Images/Thar.jpeg';
import ertiga from '../Images/ertiga.jpeg';
import fortuner from '../Images/fortuner.jpg'

const VechileModels = () => {

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




    const [carindex,setCarindex]=useState(0);


    const handleCarChange = (index)=>{
        setCarindex(index)
    }   



  return (
    <>
      <div className="container py-5">
        <h4 className="text-center text-light fw-bold">Vechile Models</h4>
        <h2 className='text-center text-secondary fw-bold'>Our rental fleet</h2>
        <p className='text-center text-info pb-4'>Choose from a variety of our amazing Vechile to rent for your next adventure</p>
        <div className="row">
            <div className="col-md-3 text-center p-0">
                {carsdata.map((ele,index)=>{
                    return(
                        <button className={`btn text-primary  w-100 mb-1 fw-bold py-3 ${index===carindex? 'btn-primary text-light border-light':'btn-light'}`} onClick={()=>handleCarChange(index)}>{ele.fullName}</button>
                    )

                })}
            </div>
            <div className="col text-center">
            {/* <img src={shift} alt="" className='w-100 h-auto'/> */}
            <img src={carsdata[carindex].modelimg} alt="" className='w-100 h-auto'/>
            </div>
            <div className="col-md-3 text-center p-0">
                <h3 className='py-2 bg-light text-primary my-2'> &#x20B9; {carsdata[carindex].price} / rent per day</h3>
                <div className="row border border-secondary py-2 m-0">
                    <div className="col fw-bold">Model</div>|
                    <div className="col ">{carsdata[carindex].model}</div>
                </div><div className="row  py-2  border border-secondary  m-0">
                    <div className="col  fw-bold">Segment</div>|
                    <div className="col ">{carsdata[carindex].segment}</div>
                </div><div className="row  py-2  border border-secondary  m-0">
                    <div className="col  fw-bold">Year</div>|
                    <div className="col ">{carsdata[carindex].year}</div>
                </div><div className="row  py-2  border border-secondary  m-0">
                    <div className="col  fw-bold">Doors</div>|
                    <div className="col ">{carsdata[carindex].doors}</div>
                </div><div className="row  py-2  border border-secondary  m-0">
                    <div className="col  fw-bold">Transmittion</div>|
                    <div className="col ">{carsdata[carindex].transmition}</div>
                </div><div className="row  py-2 border border-secondary  m-0">
                    <div className="col  fw-bold">Fuel</div>|
                    <div className="col ">{carsdata[carindex].Fuel}</div>
                </div>
                <button className="btn btn-light w-100 my-3 py-3 fw-bold shadow-lg">Reserve Now</button>
            </div>
        </div>
      </div>

    </>
  );
}

export default VechileModels;
