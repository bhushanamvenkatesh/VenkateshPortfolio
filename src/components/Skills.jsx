import React from "react";

function Skills() {
    return <div className="skills-container d-flex flex-column justify-content-center align-items-center">
        <h1>My SKills</h1>
        <p>I do all kind of neat stuff</p>
        <div className="d-flex flex-row flex-wrap justify-content-center">
            <div className="skill-div m-3">
                <h3>HTML</h3>
                <img className="skill-logo" src="./Images/HTML.png" alt="" />
            </div>
            <div className="skill-div m-3">
                <h3>CSS</h3>
                <img className="skill-logo" src="./Images/CSS.png" alt="" />
            </div>
            <div className="skill-div m-3">
                <h3>JavaScript</h3>
                <img className="skill-logo" src="./Images/JS.png" alt="" />
            </div>
            <div className="skill-div m-3">
                <h3>React JS</h3>
                <img className="skill-logo" src="./Images/ReactJS.png" alt="" />
            </div>
            <div className="skill-div m-3">
                <h3>Redux</h3>
                <img className="skill-logo" src="./Images/Redux.png" alt="" />
            </div>
            <div className="skill-div m-3">
                <h3>Git Hub</h3>
                <img className="skill-logo" src="./Images/GitHub.png" alt="" />
            </div>

        </div>



    </div>

}

export default Skills