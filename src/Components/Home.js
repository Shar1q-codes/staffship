import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// 
import hero from './Images/hero.jpg'
import lead from './Images/lead-home.png'
import dmseo from './Images/Dmseo.png'
import off from './Images/offshore.png'
import global from './Images/g3.jpg'
import staff from './Images/staffing1.jpg'
import remote from './Images/remote2.jpg'
import amazon from './Images/amazon.png'
import qcon from './Images/qcon.png'
import regalix from './Images/regalix.jpg'
import cemex from './Images/Cemex.png'
import samsung from './Images/samsung.webp'
import vortal from './Images/vortal.png'
import nescafe from './Images/Nescafe-logo.jpg'
import sitel from './Images/sitel.jpg'
import sykes from './Images/sykes.png'
import hrh from './Images/hrh.jpg'
import twenty from './Images/tewnty.png'
import salesforce from './Images/salesforce-logo.webp'
import wipro from './Images/wipro.png'

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
                        <img src={amazon} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={qcon} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={regalix} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={cemex} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={samsung} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={vortal} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={nescafe} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={sitel} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={sykes} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={hrh} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={twenty} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={salesforce} alt='comp' className='trusted-img'/>
                    </div>
                    <div className='trusted-image'>
                        <img src={wipro} alt='comp' className='trusted-img'/>
                    </div>
                </div>
                
                </div>
                <div className='home-services-container'>
                    <div>
                        <img src={global} alt="img"/>
                        <h3>Global Recruitment</h3>
                        <p>Staff Ship is affiliated with other Direct Hire recruiting firms, Reliable Services & Associates and Data Resources. Our staff of talented professionals has a wealth of recruiting experience to help you staff core positions within your valued organization.</p>
                    </div>
                    <div>
                        <img src={staff} alt="img"/>
                        <h3>Staffing & Solutions</h3>
                        <p>The traditional models of staffing and solutions providers are under pressure as companies look for more efficient, effective ways to get work done. At the same time, new entrants to the market are shaking things up with innovative approaches to staffing and solution provision.</p>
                    </div>
                    <div>
                        <img src={remote} alt="img"/>
                        <h3>Remote Teams</h3>
                        <p>The internet has changed the way we work. It’s made it possible for us to connect with people all over the world and collaborate on projects, regardless of location. This new way of working has given rise to remote teams - groups of workers who are based in different geographical locations but who come together virtually to ,work on a common goal.</p>
                    </div>
                    <div>
                        <img src={hero} alt="img"/>
                        <h3>Offshore Cost Centers</h3>
                        <p><b>Coming Soon.....</b></p>
                    </div>
                    <div>
                        <img src={off} alt="img"/>
                        <h3>Offshore Development Centers</h3>
                        <p><b>Coming Soon.....</b></p>
                    </div>
                    <div>
                        <img src={dmseo} alt="img"/>
                        <h3>Digital Marketing & SEO</h3>
                        <p>Digital marketing is the process of using digital technologies to promote a product or service.We can help you to reach a wide audience through a variety of channels, including email, social media, search engines, and websites.</p>
                    </div>
                    <div>
                        <img src={lead} alt="img"/>
                        <h3>Lead Generation & Management</h3>
                        <p>If you're in the business world, then you know that generating leads and managing them effectively is essential to success. But what exactly is lead generation, and how can you ensure that your lead management system is effective? In our service, we'll explore the concept of lead generation and offer custom templates on how to create an effective lead management system.</p>
                    </div>
            </div>
        
    </motion.div>
  )
}

export default Home