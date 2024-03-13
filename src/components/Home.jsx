import React from "react";
import {Link} from 'react-router-dom'

function Home() {
    return <div className="home-container">
        <div className="d-flex flex-row" style={{ height: "90vh" }}>
            <div className=" w-50 d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
                <h1 className="name p-4">Hi,<br />
                    I' am <span style={{ color: "orange" }}>Venkatesh</span> <br />
                    Frontend Developer
                    <br />

                </h1>
                <div className="w-50 " style={{ float: 'left' }}>
                    <button className="about-button">
                        <a href="./Resume_Venkatesh Bhushanam_Edupoly2.pdf" target="_blank">About</a>
                        </button>

                </div>
                <div className="icons-container">
                    <a className="bi bi-linkedin" href="https://www.linkedin.com/in/bhushanam-venkatesh/" target="_blank"></a>
                    <a className="bi bi-github" href="https://github.com/dashboard" target="_blank"></a>

                </div>



            </div>
            <div className="w-50 d-flex flex-row justify-content-center align-items-center" style={{ height: '100%' }}>
             
                {/* <img className="frontend-image" src="https://miro.medium.com/v2/resize:fit:679/1*E1AshoVNJG4fuX1O_Ygn4g.jpeg" alt="" /> */}
                <img className="frontend-image" src="/Images/developer.png" alt="" />

            
            </div>





        </div>

    </div>
}

export default Home