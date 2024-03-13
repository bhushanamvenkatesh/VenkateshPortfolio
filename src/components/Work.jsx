import React from 'react'

function Work() {
    return (
        <div className='p-3'>
            <h1 className='text-center p-3 text-white'>Projects</h1>
            <div className='d-flex flex-row flex-wrap align-items-center justify-content-center'>

                <div className='project-container'>
                    <img src="./Images/chatbot.png" className="project-image" alt="table" />
                    <h5 className='m-2'>Chat bot application</h5>
                    <p>Developed a mini Chatbot Application which initially wishes user and responds to a user if user input matches to list of answers that chatbot maintains. </p>
                    <div className='d-flex flex-row justify-content-around links-container'>
                        <a className="bi bi-github" href="https://github.com/bhushanamvenkatesh/Chatbot" target="_blank"></a>
                        <a href="https://chatbot-wheat-chi.vercel.app/" className='bi bi-link' target="_blank"></a>
                    </div>
                </div>

                <div className='project-container'>
                    <img src="./Images/ekar.png" className="project-image" alt="table" />
                    <h5>Mini Ekar Application</h5>
                    <p>Develped mini Ekart application with navbar,login form, cartItems using React router and React-Redux</p>
                    <div className='d-flex flex-row justify-content-around'>
                        <a className="bi bi-github" href="https://github.com/bhushanamvenkatesh/myapp/tree/productsandcart" target="_blank"></a>
                        <a href="https://vercel.com/bhushanamvenkatesh/https-github-com-bhushanamvenkatesh-myapp-tree-productsandcart/DbqMpQseY8FE279XKrfNPADTfnHf" className='bi bi-link' target="_blank"></a>
                    </div>

                </div>

                <div className='project-container'>
                    <img src="./Images/FormHandling.png" className="project-image" alt="table" />
                    <h5>Login form hadling</h5>
                    <p>Handling Login form using formik and displaying the data in a table using React useState hook.</p>
                    <div className='d-flex flex-row justify-content-around'>
                        <a className="bi bi-github" href="https://github.com/bhushanamvenkatesh/myapp/tree/productsandcart" target="_blank"></a>
                        <a href="https://vercel.com/bhushanamvenkatesh/https-github-com-bhushanamvenkatesh-myapp-tree-productsandcart/DbqMpQseY8FE279XKrfNPADTfnHf" className='bi bi-link' target="_blank"></a>
                    </div>
                </div>

                <div className='project-container'>
                    <img src="./Images/Todos.png" className="project-image" alt="table" />
                    <h5 className='m-2'>Todo's List</h5>
                    <p>Developed a todos application and added features like add new todo, delete,edit and implemented 
                        filterting funtionality using React-Redux </p>
                    <div className='d-flex flex-row justify-content-around'>
                        <a className="bi bi-github" href="https://github.com/bhushanamvenkatesh/Chatbot" target="_blank"></a>
                        <a href="https://chatbot-wheat-chi.vercel.app/" className='bi bi-link' target="_blank"></a>
                    </div>
                </div>
                
                <div className='project-container'>
                    <img src="./Images/restaurent.png" className="project-image" alt="table" />
                    <h5 className='m-2'>Todo's List</h5>
                    <p>Designed static website for restaurents with navbar. we can navigat to each section on clicking on nav items. </p>
                    <div className='d-flex flex-row justify-content-around'>
                        <a className="bi bi-github" href="https://github.com/bhushanamvenkatesh/Chatbot" target="_blank"></a>
                        <a href="https://chatbot-wheat-chi.vercel.app/" className='bi bi-link' target="_blank"></a>
                    </div>
                </div>
                
                <div className='project-container'>
                    <img src="./Images/iplserver.png" className="project-image" alt="table" />
                    <h5 className='m-2'>IPL Data</h5>
                    <p>Basic IPL Server implemented using node js and express js. on clicking on each button it get response from the server and presents data in JSON format. </p>
                    <div className='d-flex flex-row justify-content-around'>
                        <a className="bi bi-github" href="https://github.com/bhushanamvenkatesh/Chatbot" target="_blank"></a>
                        <a href="https://chatbot-wheat-chi.vercel.app/" className='bi bi-link' target="_blank"></a>
                    </div>
                </div>
            

           

              
            </div>

        </div>
    )
}

export default Work