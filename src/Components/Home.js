import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import comp from './Images/comp-logo.png'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div className='home-component' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        
            <div className='bg-img'></div>
            <div className='carousel'>
                <Carousel  autoPlay infiniteLoop showStatus={false} interval={3000} showArrows={false} stopOnHover={false} transitionTime={1} showThumbs={false}>
                    <div>
                        <h1>Legend 1</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, nesciunt.</p>
                    </div>
                    <div>
                        <h1>Legend 2</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, nesciunt.</p>
                    </div>
                    <div>
                        <h1>Legend 3</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, nesciunt.</p>
                    </div>
                    <div>
                        <h1>Legend 4</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, nesciunt.</p>
                    </div>
                </Carousel>
            </div>
            <div className="hire-buttons">
                <button className='hire-btn'>Hire Staffship</button>
                <button className='join-btn'>Join Staffship</button>
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
        
    </motion.div>
  )
}

export default Home