import React from 'react'

function Work() {
    return (
        <div className='p-5'>
            <h1>Projects</h1>
            <div className='d-flex flex-row flex-wrap'>
               
                <div className='project-container'  >
                    <h3>Users Data In a Table</h3>
                    <p>Handling Login form using formik and displaying the data in a table using React useState hook.</p>
                </div>
                <div className='project-container'>
                    <h3>Todos List Application</h3>
                    <p>Developed Todo's List application concepts like React-Redux and implemented delete,done and undo funtionality
                    Implemented Filtering like completed, pending and all using Redux state management and React useState hook</p>
                </div>
            </div>

        </div>
    )
}

export default Work