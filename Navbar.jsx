import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <>
    
    <div class="container-fluid">
   <div class="row">

   <div class="col-sm-6" id='top'>
<Link to="/">

    <img src='https://www.themealdb.com/images/logo-small.png'/>
    </Link>
     </div>
      <div className='col-sm-6' id='top'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">API</a>
        </li>
    
    
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
  
  </div>
</nav>
</div>
</div>
    </div><br/>


  </>
  )
}

export default Nav