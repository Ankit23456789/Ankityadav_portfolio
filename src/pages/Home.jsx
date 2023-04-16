import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container Home '>

      <div className='row '>
        
        <div className='col-12 col-md-6 col-lg-6 heroimage-box'>
          <img src="images/contactimage.JPG" alt="Ankit yadav" className='img-fluid rounded hero-img' />
        </div>
        <div className=' col-12 col-md-6 col-lg-6 hero-textbox text-center'>
          <h2> 
              Hello , my  name is Ankit yadav
          </h2>
          <h4> I'm  a Web Developer</h4>

          <p  className=' Home_textbox'> A web Developer with a passion for learning and creating.
           This is my  offical portfolio website  to show's all details and work in web  development</p>
          <div className='buttons container'>
          <Link to={"./contactMe"}>  <button className='   Talk-button ' > Let's Connect</button></Link>
          
          
          </div>
        </div>
      </div>



    
    </div>
   
  )
}

export default Home
