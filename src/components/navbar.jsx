import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return <div>
        <nav className="bar navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Venkatesh</a>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="d-flex justify-content-end collapse navbar-collapse ml-auto"  id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/' class="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            {/* <Link to='/about' class="nav-link" >About</Link> */}
                           
                                <a className="nav-link active" href="./Resume_Venkatesh Bhushanam_Edupoly2.pdf" target="_blank">About</a>
                        </li>
                        <li class="nav-item">
                        <Link to='/skills' class="nav-link" >Skills</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/work' class="nav-link" >Work</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/contact' class="nav-link" >Contact</Link>

                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
}

export default Navbar