import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return <div>
        <nav className="bar navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <Link class="navbar-brand uname" href="/"><i>Venkatesh Bhushanam</i></Link>

                <div class="d-flex justify-content-end collapse navbar-collapse ml-auto" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/' class="text-white nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            <a className="text-white nav-link active" href="./Resume_Venkatesh Bhushanam_Edupoly2.pdf" target="_blank">About</a>
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