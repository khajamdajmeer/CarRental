import React from 'react';
import { Link } from 'react-router-dom';
import carlogo from '../Images/carlog.png'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-success border text-light fw-bold  p-0">
                <div className="container-fluid d-flex  ">
                    <Link className="navbar-brand" to="/">
                        <img src={carlogo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item text-center">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item   text-center">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item  text-center">
                                <Link className="nav-link " to='/vechilemodels' >Vechile Models</Link>
                            </li>
                            <li className="nav-item  text-center">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className='nav-item  text-center'>
                            <button type='button' className='btn text-secondary fw-bold navbtn my-2 border-secondary mx-2'>Sign in</button>
                            </li>
                            <li className='nav-item  text-center'>
                        <button type='button' className='btn btn-secondary border-secondary fw-bold my-2 navbtn'>Register</button>
                            </li>
                        </ul>
                    </div>
                 
                </div>
            </nav>
        </>
    );
}

export default Navbar;
