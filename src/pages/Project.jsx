import React from 'react'

const Project = () => {
    return (
        <>

            <div className='container-fluid project-section '>
                <h1>Project Section</h1>
                <div className='container project-box '>
                    <div className='row' >
                        <div className='col-md-6 col-lg-4  col-12 my-3 '>
                            <div className="card">
                                <img src="images/image_gallery-with_filtereffect.png" className="card-img-top img-fluid" width={300} height={300} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">ReactJs Image Gallery</h5>
                                    <p className="card-text">
                                        this image gallery is  the react JS project . in this project
                                        we  appling the filter functionality  which is in properly working
                                        condtion and this website is completely responsive for all devices.
                                    </p>
                                    <div className='project-buttons'>
                                        <button>
                                            <a href="https://github.com/Ankit23456789"  target="_blank" rel="noreferrer">Code</a>
                                        </button>
                                        <button>
                                            <a href="https://ankit-reactjs-gallery.netlify.app/"  target="_blank" rel="noreferrer">Demo</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4  col-12 my-3'>
                            <div className="card" >
                                <img src="images/image-gallery-simple-html-css.png" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Simple Image Gallery using  Html and CSS</h5>
                                    <p className="card-text">
                                        this image gallery is  the  simle project which is designed using
                                        Html and CSS only.this website is completely responsive for all devices.

                                    </p>
                                    <div className='project-buttons'>
                                        <button>
                                            <a href="https://github.com/Ankit23456789"  target="_blank" rel="noreferrer">Code</a>
                                        </button>
                                        <button>
                                            <a href="https://ankit23456789.github.io/Image_Gallery_html/" target="_blank" rel="noreferrer">Demo</a>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 col-sm-6 col-12 my-3'>
                            <div className="card" >
                                <img src="images/landing_page.png" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"> Landing  page website </h5>
                                    <p className="card-text">
                                      This  website project is created for practice using html, css and bootstrap .
                                       this completely responsive for all devices and this is fake company website landing page.

                                    </p>
                                    <div className='project-buttons'>
                                       
                                        <button>
                                            <a href="https://github.com/Ankit23456789"  target="_blank" rel="noreferrer">Code</a>
                                        </button>
                                        <button>
                                            <a href="https://ankit23456789.github.io/Landing_page_HourGlass/" target="_blank" rel="noreferrer">Demo</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 col-sm-6 col-12 my-3'>
                            <div className="card" >
                                <img src="images/portfolio_project.png" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"> Portfolio project using react JS</h5>
                                    <p className="card-text">
                                        This my Portfolio  React JS project which i designed and this is
                                        completely responsive website & it is proerly  working for all devices.
                                        In this project we used basic concepts of ReactJs like React-routing .

                                    </p>
                                    <div className='project-buttons'>
                                       
                                        <button>
                                            <a href="https://github.com/Ankit23456789"  target="_blank" rel="noreferrer">Code</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </>
    )
}

export default Project
