import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";


const Header = () => {
  return (
    <div>
  
   
  <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
    <div className="container-fluid">
      <button
              className="navbar-toggler ps-0"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
        <span
              className="navbar-toggler-icon d-flex justify-content-start align-items-center"
              >
          <i className="fas fa-bars"></i>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" aria-current="page" to="#intro">Home</NavLink>
          </li>
          
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Slides
            </NavLink>
            <ul className="dropdown-menu">
              <li><NavLink
               className="dropdown-item"   to="/admin/uploadslide" target="_blank" >Upload Slide</NavLink></li>
              <li><NavLink className="dropdown-item" to="/admin/manageslides" target="_blank">Manage Slides</NavLink></li>
              <li><NavLink className="dropdown-item" to="/admin/updateslide" target="_blank">Update Slide</NavLink></li>
              <li><hr className="dropdown-divider" /></li>
              <li><NavLink className="dropdown-item" to="#" target="_blank">Something else here</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Users
            </NavLink>
            <ul className="dropdown-menu">
              <li><NavLink
               className="dropdown-item"   to="/main/signup" target="_blank">Create User</NavLink></li>
              <li><NavLink className="dropdown-item" to="/admin/manageuser" target="_blank">Manage Users</NavLink></li>
              <li><NavLink className="dropdown-item" to="/admin/updateuser" target="_blank">Update User</NavLink></li>
              <li><hr className="dropdown-divider" /></li>
              <li><NavLink className="dropdown-item" to="#" target="_blank">Something else here</NavLink></li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink
               className="nav-link"
               to="#"
               target="_blank"
               >Admin Dashboard</NavLink>
          </li>
        </ul>

        <ul className="navbar-nav flex-row">
          
          <li className="nav-item">
            <NavLink
               className="nav-link pe-2"
               to="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
               rel="nofollow"
               target="_blank"
               >
              <i className="fab fa-youtube"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
               className="nav-link px-2"
               to="https://www.facebook.com/mdbootstrap"
               rel="nofollow"
               target="_blank"
               >
              <i className="fab fa-facebook-f"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
               className="nav-link px-2"
               to="https://twitter.com/MDBootstrap"
               rel="nofollow"
               target="_blank"
               >
              <i className="fab fa-twitter"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
               className="nav-link ps-2"
               to="https://github.com/mdbootstrap/mdb-ui-kit"
               rel="nofollow"
               target="_blank"
               >
              <i className="fab fa-github"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 
    
   <div
       id="intro"
       className="bg-image"
       style={{
              backgroundImage: 'url(./Dashboard-wavy-orange-background.png)', height: '30vh' }}
       >
    <div className="mask text-white" style={{backgroundColor: 'rgb(255,103,0)'}}>
      <div className="container d-flex align-items-center text-center h-100">
        <div>
          
        </div>
      </div>
    </div>
  </div>
 

  </div>
  )
  
}




export default Header;