import React from "react";

function Contact() {
    return <div className="contactme-container w-100 p-4 ">
        <div>
            <b><h1 className="mb-3">Contact Me</h1></b>
        </div>
        <div className="d-flex  justify-content-center  align-items-center w-30">
            <div className="w-50">
                <img src="./Images/contact.png" className='contact-me-image' alt="contact me" />
            </div>
            <div>
                <div className="each-detail w-30">
                    <b><span>Email:</span></b>
                    <p>venkat7596@gmail.com</p>
                </div>
                <div className="each-detail w-30">
                    <b><span>Contact No:</span></b>
                    <p>7013706907</p>
                </div>
                <div className="each-detail w-30">
                    <b><span>Address:</span></b>
                    <p>SBH Colony,Saidabad,Hyderabad</p>
                </div>
            </div>

        </div>


    </div>
}

export default Contact