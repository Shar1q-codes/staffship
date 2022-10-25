import React from 'react'
import { motion } from 'framer-motion'
const Services = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptates at, ipsam nemo ea modi nihil harum deserunt dicta necessitatibus error magni? Eos amet iure vel debitis labore dolore laborum placeat doloribus temporibus, quia sequi laudantium nesciunt, dolorum facilis tenetur officiis voluptatibus nobis a blanditiis quos repellat adipisci! Quia, modi?</p>
    </motion.div>
  )
}

export default Services