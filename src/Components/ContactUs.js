import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
const ContactUs = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='contact-component'>
      <div className="contact-container">

        <h1 className='contact-info-heading'>Contact Us</h1>

        <p className='contact-info'>Email : contactus@staffship.in</p>

        <p className='contact-info'>Contact : India : +91 9700904807</p>

        <p className='contact-info'>Contact : USA : +1 732 333 4566</p>
      </div>

      <div className="social-container">
        <h1 className="social-info-head">Our Socials</h1>
        <a href="https://www.linkedin.com/company/staff-ship/" target="_blank" rel='noopener noreferrer'>

        <FaLinkedin className='linkedin'/>
        </a>
      </div>
    </motion.div>
  )
}

export default ContactUs