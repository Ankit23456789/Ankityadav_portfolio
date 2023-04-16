import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='container-fluid footer-box'>

        <p>
        <div className='icons'>
            <Link to={"https://www.instagram.com/ankit0006789/ "} target="_blank"> <i className="fa-brands fa-instagram icon" /></Link>
            <Link to={"https://www.linkedin.com/in/ankit-yadav-6287591b8/ "} target="_blank"> <i className="fa-brands fa-linkedin icon" /></Link>
            <Link to={"https://github.com/Ankit23456789"} target="_blank">  <i className="fa-brands fa-github icon" /></Link>
          </div>

          &copy; 2023 this website is designed by Ankit yadav and this is  my portfolio website
         
        </p>
      </div>
    </>
  )
}

export default Footer
