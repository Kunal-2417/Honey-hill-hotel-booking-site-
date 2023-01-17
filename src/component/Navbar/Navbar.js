import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-5-strong ftco_navbar ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Honey Hills</a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="social-media order-lg-last">
                        <p className="mb-0 d-flex">
                            <a href="/" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                            <a href="/" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                            <a href="/" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                            
                        </p>
                    </div>
                    
                    <div className="collapse navbar-collapse" id="ftco-nav navbar navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-md-3">
                            <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">Contact</a></li>
                            <li className='nav-item my-2 mx-2'><button className="btn my-2 mb-3 mr-3 btn-deep-orange">Login</button></li>
                            <li className='nav-item my-2 mx-2'><button className="btn my-2 mb-3 mr-3 btn-deep-orange">Register</button></li>


                        </ul>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar
