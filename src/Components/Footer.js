import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {

  const scroll = ()=>{
    window.scrollTo(0 ,0)
  }

  return (
    <div className='footer-component'>
        <div className='footer-about'>
            <h3>About Us</h3>
            <p>Staff Ship - Sail for great journey We make work exciting, engaging and meaningful for our employees through our dedication to tackling some of the toughest technological challenges on the planet and by never losing sight of what matters.</p>
        </div>
        <div className='footer-links'>
          <h3>Quick Links</h3>
          
            <ul className='footer-links-nav'  >
                <Link to='/'><li className='noselect' onClick={scroll}>Home</li></Link> 
                <Link to='/OurServices'onClick={scroll}><li className='noselect'>Our Services</li></Link>
                <Link to='/AboutUs' onClick={scroll}><li className='noselect' >About Us</li></Link>
                <Link to='/ContactUs' onClick={scroll}><li className='noselect'>Contact Us</li></Link>
            </ul>
          
        
        </div>
        <div className='footer-services'>
          <h3>Servics</h3>
          <ul>
          <li className='noselect'><Link to='/OurServices' onClick={scroll}>Global Recruiting</Link></li>
          <li className='noselect'><Link to='/OurServices' onClick={scroll}>Staffing & Solutions</Link></li>
          <li className='noselect'><Link to='/OurServices' onClick={scroll}>Remote Teams</Link></li>
          <li className='noselect'><Link to='/OurServices' onClick={scroll}>Offshore Cost Centers</Link></li>
          <li className='noselect'><Link to='/OurServices' onClick={scroll}>Offshore Devlopment Centers</Link></li>
          <li className='noselect'><Link to='/OurServices' onClick={scroll}>Digital Marketing & SEO</Link></li>
          <li className='noselect'><Link to='/OurServices' onClick={scroll}>Lead Generation & Management</Link></li>
          </ul>
        </div>
        <div className='footer-contact'>
        <h3>Contact Us</h3>

        <p >Email : contactus@staffship.in</p>

        <p>Contact : India : +91 9700904807</p>

        <p >Contact : USA : +1 732 333 4566</p>
        </div>
    </div>
  )
}

export default Footer