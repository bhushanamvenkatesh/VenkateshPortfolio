import React from "react";

function Contact() {
    return <div className="contactme-container w-100">
        <div>
            <h1>Contact Me</h1>
        </div>
        <div className="d-flex flex-column justify-content-center w-30">
            <div className="each-detail w-30">
                <span>Email:</span>
                <p>venkat@7596@gmail.com</p>
            </div>
            <div className="each-detail w-30">
                <span>Contact NO:</span>
                <p>7013706907</p>
            </div>
            <div className="each-detail w-30">
                <span>Address:</span>
                <p>SBH Colony,Saidabad,Hyderabad</p>
            </div>
        </div>


    </div>
}

export default Contact