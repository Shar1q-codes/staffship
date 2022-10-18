import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import logo from './Images/logo.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Header = () => {
  return (
    <div className='header-component'>
        <div className='bg-img'></div>
        <div className='header-container'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <ul className='header'>
                <Link to='/'><li>Home</li></Link> 
                <Link to='/AboutUs'><li>About Us</li></Link>
                <Link to='/OurServices'><li>Our Services</li></Link> 
                <Link to='/ContactUs'><li>Contact Us</li></Link>
            
            </ul>
        </div>
        <div className='carousel'>
            <Carousel  autoPlay infiniteLoop showStatus={false} interval={2000} showArrows={false} stopOnHover={false} transitionTime={1}>
                <div>
                    <h1>Khaleel</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, nesciunt.</p>
                </div>
                <div>
                    <h1>Shariq</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, nesciunt.</p>
                </div>
                <div>
                    <h1>Saad</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, nesciunt.</p>
                </div>
                <div>
                    <h1>Mahboob</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, nesciunt.</p>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Header