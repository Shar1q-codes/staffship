import React, { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import logo from './Images/logo.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Header = () => {
  const navRef = useRef()

  const showNav = ()=>{
    navRef.current.classList.toggle('responsive-nav')
  }
  return (
    <div className='header-component'>
        
        <div className='header-container'>
            <div className='logo'>
                <img src={logo} alt="logo" className='logo-img'/>
            </div>
          <div className='toggle bar' onClick={showNav}>
            <FaBars />
          </div>
            <ul className='nav-bar' ref={navRef} onClick={showNav}>
                <Link to='/'><li className='noselect' >Home</li></Link> 
                <Link to='/AboutUs'><li className='noselect' >About Us</li></Link>
                <Link to='/OurServices'><li className='noselect'>Our Services</li></Link> 
                <Link to='/ContactUs'><li className='noselect'>Contact Us</li></Link>
                <div className='toggle bar'>
                  <FaTimes />
                </div>
            </ul>
       </div>
    </div>
  )
}

export default Header