import React from 'react'
import { motion } from 'framer-motion'
import ServicesNav from './ServicesNav'

const Services = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='services-component'>
      <ServicesNav/>
      <div className='services-container'>
        <div id='global'>
          <h1>Global Recruiting</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quisquam nulla dignissimos soluta cupiditate temporibus tempore maxime a illo deleniti nostrum, maiores alias quia laboriosam magnam magni similique fugit reiciendis repellat perspiciatis asperiores odit ex? Fugiat dignissimos distinctio saepe officiis corrupti cumque itaque ea, facere alias beatae odit, aliquam aut!</p>
        </div>
        <div id="staffsol">
          <h1>Staffship & Solutions</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolor ipsa enim exercitationem mollitia cumque similique fugit dignissimos eos provident eligendi eaque, quaerat, commodi harum! Blanditiis saepe, quaerat fuga laudantium beatae dolorum voluptas architecto labore provident voluptatum quo delectus autem deleniti earum dolore magni nam libero consectetur consequuntur veniam amet?</p>
        </div>
        <div id="remote">
          <h1>Remote Teams</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore tempore neque nulla modi, officiis mollitia nam illum voluptas, perspiciatis ab ad, debitis velit sunt! Quia eius dolor architecto optio distinctio atque debitis rerum esse tempora in officia cum minus totam ipsum tempore, et maxime? Iure dolore possimus eveniet illo?</p>
        </div>
        <div id="occ">
          <h1>Offshore Cost Centers</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore tempore neque nulla modi, officiis mollitia nam illum voluptas, perspiciatis ab ad, debitis velit sunt! Quia eius dolor architecto optio distinctio atque debitis rerum esse tempora in officia cum minus totam ipsum tempore, et maxime? Iure dolore possimus eveniet illo?</p>
        </div>
        <div id="odc">
          <h1>Offshore Development Centers</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore tempore neque nulla modi, officiis mollitia nam illum voluptas, perspiciatis ab ad, debitis velit sunt! Quia eius dolor architecto optio distinctio atque debitis rerum esse tempora in officia cum minus totam ipsum tempore, et maxime? Iure dolore possimus eveniet illo?</p>
        </div>
        <div id="digital">
          <h1>Digital Marketing & SEO</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore tempore neque nulla modi, officiis mollitia nam illum voluptas, perspiciatis ab ad, debitis velit sunt! Quia eius dolor architecto optio distinctio atque debitis rerum esse tempora in officia cum minus totam ipsum tempore, et maxime? Iure dolore possimus eveniet illo?</p>
        </div>
        <div id="lead">
          <h1>Lead Generation & Management</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore tempore neque nulla modi, officiis mollitia nam illum voluptas, perspiciatis ab ad, debitis velit sunt! Quia eius dolor architecto optio distinctio atque debitis rerum esse tempora in officia cum minus totam ipsum tempore, et maxime? Iure dolore possimus eveniet illo?</p>
        </div>
      </div>
      
    </motion.div>
  )
}

export default Services