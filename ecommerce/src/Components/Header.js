import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FaUserCircle,FaCartArrowDown } from 'react-icons/fa';
import Context from './Context';

function Header() {

  const {cart} = useContext(Context).state
  let numOfItems = cart.length

  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand text-primary fs-2 fw-bold" to="/">Emaani</Link>

    <div className='d-flex order-lg-1 align-items-center'> 

      <div className="">
        <Link className=" pe-3 text-dark fs-5" to="/sign-in"> <span className='text-primary fs-4'>sign in</span> <FaUserCircle /></Link>
        <Link to={'./cart'} className=" pe-3 text-dark fs-5" href="#"><FaCartArrowDown/>{numOfItems}</Link>
      </div>

      <button className="navbar-toggler border-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

    </div>
    <div className="collapse navbar-collapse menu" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
       <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Brands
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to={`/category/men's clothing `} className="dropdown-item">Men's Wear</Link></li>
            <li><Link to={"/category/women's clothing"} className="dropdown-item">women's Wear</Link></li>
            <li><Link to={"/category/jewelery"} className="dropdown-item">Jewelery</Link></li>
            <li><Link to={"/category/electronics"} className="dropdown-item">Electronics</Link></li>
          </ul>
        </li>
        
      </ul>

    </div>
    
  </div>
  
</nav>
  )
}

export default Header