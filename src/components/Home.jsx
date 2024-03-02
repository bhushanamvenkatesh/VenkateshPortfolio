import React from "react";

function Home() {
    return <div className="home-container">
        <div className="d-flex flex-row" style={{ height: "90vh" }}>
            <div className=" w-50 d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
                <h1 className="name p-4">Hi,<br />
                    I' am <span style={{ color: "blue" }}>Venkatesh</span> <br />
                    Frontend Developer
                    <br />

                </h1>
                <div className="w-50" style={{ float: 'left' }}>
                    <button className="btn btn-primary">About</button>

                </div>
                <div className="icons-container">
                    <a href=""><i class="bi bi-linkedin"></i></a>
                    <a href=""><i class="bi bi-github"></i></a>

                </div>



            </div>
            <div className="w-50 d-flex flex-row justify-content-center align-items-center" style={{ height: '100%' }}>
             
                <img className="frontend-image" src="https://miro.medium.com/v2/resize:fit:679/1*E1AshoVNJG4fuX1O_Ygn4g.jpeg" alt="" />
            
            </div>





        </div>

    </div>
}

export default Home