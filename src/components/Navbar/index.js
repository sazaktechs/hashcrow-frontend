import React from "react";
import "./Navbar.css";
const Navbar = () => {
    return (
        
        <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/archivepage">New Page</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/showpage">Page Info</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/checkpage">Check Page</a>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
        </div>

        
    );
};

export default Navbar;

