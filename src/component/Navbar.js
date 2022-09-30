import React from 'react'
import { Link } from "react-router-dom";
import './MyCss.css'

 const Navbar =()=>{
 
    return (
      <>
        <nav style={{background:' linear-gradient(181deg, #71769f, transparent)'}} className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Home</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                               
                                <li className="nav-item">
                                    <Link className="nav-link" to='/login'>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/registration'>Registration</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </>
    )

}
export default Navbar;
