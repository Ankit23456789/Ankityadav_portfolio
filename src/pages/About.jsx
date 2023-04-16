import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
     
      <div className='AboutSection  container'>
      
        <h3 className='text-center'>About Me</h3>

        <div className='row'>
          <div className='col-12 col-md-6 col-lg-6 heroimage-box'>
            <img src="images/contactimage.JPG" alt=" profile" className='img-fluid rounded hero-img' />
          </div>
          <div className=' col-12  col-md-6 col-lg-6  aboutsection-textbox '>

            <p>
              Hey , My name is Ankit yadav . I  am website  Developer . I am  from  Rewari  Haryana India.
              I love  designing and  photograpy  that why i love creating new website. I always ready to
              learn the new Technology which  helps to improve my  tehnical skills
              In future I see myself the Full Stack Developer


            </p>
           

            <div className='icons'>
            <Link to={"https://www.instagram.com/ankit0006789/ "} target="_blank"> <i className="fa-brands fa-instagram icon" /></Link>
            <Link to={"https://www.linkedin.com/in/ankit-yadav-6287591b8/ "} target="_blank"> <i className="fa-brands fa-linkedin icon" /></Link>
            <Link to={"https://github.com/Ankit23456789"} target="_blank">  <i className="fa-brands fa-github icon" /></Link>
          </div>
          <div className='buttons container'>
            <a href="https://drive.google.com/file/d/1hrltBCXPphDiNAzrvGf0KHY0SkYzS_Is/view?usp=sharing" target="_blank" rel="noreferrer">
              <button className='Talk-button  mx-4' >  Download CV</button>
            </a>
          </div>
          </div>
        </div>


      </div>
      <div className='container Aboutme_eduaction_section'>
        <div className='row'>
          
          <div className=' col-md-12 col-lg-12 col-12 Education-Details'>
           <p className='text-center education-paragraph'>Education  Qualification</p>

            <ul className='Education_list' >
              <li>
                <i class="fa-solid fa-graduation-cap" />
                <h3> Post Graduation</h3>
                <h4> Master of Computer Applications (MCA)</h4>
                <p>
                JC BOSE UNIVERSITY OF SCIENCE AND TECHNOLOGY (YMCA) FARIDABAD ,HARYANA IN (2019- 2022)
                </p>
                
              </li>
              <li>
                <i class="fa-solid fa-graduation-cap" />
                <h3> Graduation</h3> 
                <h4> Bachelor of Computer Applications (BCA)</h4>
                <p>
                MAHARSHI DAYANAND UNIVERSITY ROHTAK ,HARYANA IN (2016-2019)
                </p>
                
              </li>
              <li>
                <i class="fa-solid fa-school" />
                <h3>Higher Secondary</h3>
                <h4>12th</h4>
                <p>
                EURO INTL SCHOOL BALIYAR KHURD REWARI, HARYANA (CBSE) in 2016
                </p>
                  
              </li>
              <li>
                <i class="fa-solid fa-school" />
                <h3> Matriculation</h3>
                <h4>10th</h4>
                <p>
                ADARASH SR SEC SCHOOL KHALETA REWARI (HBSE) in 2014
                </p>
                
              </li>
            </ul>




          </div>
          
        </div>
      </div>


    </>
  )
}

export default About
