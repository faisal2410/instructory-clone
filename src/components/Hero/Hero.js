import React from "react";
import './Hero.css';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  return (
  <div className='hero-container container-fluid'>
  <div className="row">
  <div className="col-md-12"> 
  <Navbar/>
  <h3 className='text-center hero-h3'>ONLINE TEACHING MARKETPLACE & E-LEARNING PLATFORM</h3>
  <h1 className='text-center hero-h1'>TEACH ANYTHING, LEARN ANYTIME</h1>
  <p className='text-center hero-p'>Upload your course tutorial & become an online teacher. Earn as much as you can, it's FREE! Also, Browse our course categories where you can develop your skills anytime from the best professionals.</p>
  <div className='container'>
  <div className="row ">
  <div className="col-md-6 offset-md-3 d-flex justify-content-center">
  <button className="btn btn-st btn-primary fw-bold btn-lg">Start Teaching</button>
  <button className=" btn btn-sl btn-success fw-bold ms-5 btn-lg">Start Learning</button>
  </div>
  
  </div>
  </div> 
  </div>  
  </div> 
  </div>
  )
};

export default Hero;
