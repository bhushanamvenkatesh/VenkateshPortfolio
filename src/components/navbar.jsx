import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return <div>
             <nav class="navbar bar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid ">
                <Link class="navbar-brand uname" to="/"><i>Venkatesh Bhushanam</i></Link>
                <button class="navbar-toggler h-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="text-white nav-link active" href="./Resume_Venkatesh Bhushanam_Edupoly2.pdf" target="_blank">About</a>
                        <Link to='/' class="text-white nav-link active" aria-current="page">Home</Link>
                        <Link to='/skills' class="nav-link" >Skills</Link>
                        <Link to='/work' class="nav-link" >Work</Link>
                        <Link to='/contact' class="nav-link" >Contact</Link>

                    </div>
                </div>
            </div>
        </nav>

    </div>
}

export default Navbar