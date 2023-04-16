import React from 'react'

const Skills = () => {
    return (
        <>
            <div className='container-fluid skill-container'>
                <div className='container skill-box'>
                    <p className='text-center skill-paragraph'>
                        Programming Skills
                    </p>
                    
                        
                            <ul className='Skills-list'>
                                <li>
                                    <p>
                                        <i className="fa-brands fa-html5" /><br />
                                        HTML</p>

                                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
                                        <div className="progress-bar " style={{ width: "95%" }}> 95%</div>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa-brands fa-css3" /><br />
                                    CSS
                                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar " style={{ width: "90%" }}> 90%</div>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa-brands fa-square-js" /> <br />
                                    JAVASCRIPT
                                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar " style={{ width: "70%" }}> 70%</div>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa-brands fa-bootstrap"></i>
                                    <br /> BOOTSTRAP


                                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar " style={{ width: "90%"}}> 90%</div>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa-brands fa-react"></i>
                                    <br />REACT JS
                                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar  " style={{ width: "65%" }}> 65%</div>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa-brands fa-python"></i>
                                    <br /> Python


                                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar  " style={{ width: "80%"}}> 80%</div>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa-brands fa-java"></i>
                                    <br /> Java


                                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar  " style={{ width: "80%" }}> 80%</div>
                                    </div>
                                </li>

                            </ul>
                        

                    

                </div>
            </div>

        </>
    )
}

export default Skills
