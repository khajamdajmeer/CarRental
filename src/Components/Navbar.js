import React from 'react';
import { Link } from 'react-router-dom';
import carlogo from '../Images/carlog.png'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-success border text-light fw-bold  p-0">
                <div className="container-fluid d-flex ">
                    <Link className="navbar-brand" to="/">
                        <img src={carlogo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/' >Pricing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-brand ">
                        <button type='button' className='btn text-secondary fw-bold navbtn border border-2 border-secondary mx-2'>Sign in</button>
                        <button type='button' className='btn btn-secondary border-secondary fw-bold navbtn border border-2 navbtn'>Register</button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
