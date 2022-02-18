import React from "react";

const Navbar = () => {
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
  <button className="navbar-toggler custom-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon custom-icon"></span>
    </button>
    <a className="navbar-brand" href="/">
        <img src="https://instructory.net/assets/images/logo-new-white.png" width="200" className="img-fluid" alt="" />
    </a>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">      
        <li className="nav-item">
          <a className="nav-link text-white text-center cc fw-bold" href="/">Course Categories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white text-center ba fw-bold" href="/">Become an Affiliator</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white text-center fw-bold" href="/">Sign In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-center  " href="/"> <button className="text-white fw-bold gs">Get Started</button> </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  

  </div>
  )
};

export default Navbar;
