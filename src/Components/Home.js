import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import comp from './Images/comp-logo.png'
import hero from './Images/hero.jpg'

const Home = () => {
  return (
    <motion.div className='home-component' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        
            <div className='bg-img'></div>
            <div className='carousel'>
                <Carousel  autoPlay infiniteLoop showStatus={false} interval={3000} showArrows={false} stopOnHover={false} transitionTime={1} showThumbs={false}  className='carousel-main'>
                    <div>
                        <h1>Global Hiring, Staffing and Recruiting Solutions</h1>
                        
                    </div>
                    <div>
                        <h1>From hi to apply and everything in between.</h1>
                        
                    </div>
                    <div>
                        <h1>Transform your talent acquisition with our unified platform, data and expertise.</h1>
                        
                    </div>
                    <div>
                        <h1>Customer and Technology Solutions</h1>
                        
                    </div>
                    <div>
                        <h1>Information Technology, Non - IT and Executive Hiring</h1>
                        
                    </div>
                </Carousel>
            </div>
            <div className="hire-buttons">
            <a href='https://us9.list-manage.com/contact-form?u=67bdb6c1de36a91d772aaedf0&form_id=256d1b86ad1816ddf1237848784ea6ac' target='_blank' rel="noopener noreferrer"><button className='hire-btn'>Hire Staffship</button></a>
                <a href='https://www.surveymonkey.com/r/3ZFVY6L' target='_blank' rel="noopener noreferrer"><button className='hire-btn'>Join Staffship</button></a>
            </div>
            <div className="trusted-by-container">
                <p>TRUSTED BY</p>
                <div className='trusted-images'>
                    <div className='trusted-image'>
                        <img src={comp} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={comp} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={comp} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={comp} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={comp} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={comp} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={comp} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={comp} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={comp} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={comp} alt='comp' className='trusted-img'/>
                    </div>
                </div>
                
                </div>
                <div className='home-services-container'>
                    <div>
                        <img src={hero} alt="img"/>
                        <h3>Global Recruitment</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ad rem asperiores dolor? Nisi molestiae dolorem quaerat magnam delectus soluta eos doloremque, recusandae ea eius.</p>
                    </div>
                    <div>
                        <img src={hero} alt="img"/>
                        <h3>Global Recruitment</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ad rem asperiores dolor? Nisi molestiae dolorem quaerat magnam delectus soluta eos doloremque, recusandae ea eius.</p>
                    </div>
                    <div>
                        <img src={hero} alt="img"/>
                        <h3>Global Recruitment</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ad rem asperiores dolor? Nisi molestiae dolorem quaerat magnam delectus soluta eos doloremque, recusandae ea eius.</p>
                    </div>
                    <div>
                        <img src={hero} alt="img"/>
                        <h3>Global Recruitment</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ad rem asperiores dolor? Nisi molestiae dolorem quaerat magnam delectus soluta eos doloremque, recusandae ea eius.</p>
                    </div>
                    <div>
                        <img src={hero} alt="img"/>
                        <h3>Global Recruitment</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ad rem asperiores dolor? Nisi molestiae dolorem quaerat magnam delectus soluta eos doloremque, recusandae ea eius.</p>
                    </div>
                    <div>
                        <img src={hero} alt="img"/>
                        <h3>Global Recruitment</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ad rem asperiores dolor? Nisi molestiae dolorem quaerat magnam delectus soluta eos doloremque, recusandae ea eius.</p>
                    </div>
                    <div>
                        <img src={hero} alt="img"/>
                        <h3>Global Recruitment</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ad rem asperiores dolor? Nisi molestiae dolorem quaerat magnam delectus soluta eos doloremque, recusandae ea eius.</p>
                    </div>
            </div>
        
    </motion.div>
  )
}

export default Home