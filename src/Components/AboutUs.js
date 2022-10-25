import React from 'react'
import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='about-component'>
      <div className='aboutus-container'>
        <p className='about-info'>Since our inception in 2021, Staff Ship IT Solutions and Services has grown steadily in the recruitment services space in India to become one of the preferred Talent Acquisition partners to organizations across different industries in their growth journey, whether they are a greenfield setup or large conglomerates.</p>

        <p className='about-info'>Anchored on the values of integrity, transparency and growth, Staff Ship IT Solutions and Services believes in keeping its promise in every initiative that it undertakes.</p>

        <p className='about-info'>We partner with clients in all sectors and regions to identify their high value opportunities, address their most critical challenges, and enable their business transformation through high quality talent.</p>

        <p className='about-info'>With our decade long knowledge expertise in the domain, we have been able to deliver solutions for all kinds of global and local business industry specific demands consistently and successfully.</p>

        <p className='about-info'>At Staff Ship, we are able to align diversified and intricate HR needs of our clients by providing reliable and strategic staffing solutions. By understanding the significance of aligning talent strategy with business strategy, we are adept at offering workforce solutions that drive businesses forward. Our capability in fast delivery has gained us the reputation of being a reliable and efficient talent acquisition firm across entry level to executive level talent.</p>
      </div>
    </motion.div>
  )
}

export default AboutUs