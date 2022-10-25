import React from 'react'
import { Routes, Route, useLocation} from 'react-router-dom'
// import Home from './Components/Home';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';
import { AnimatePresence } from 'framer-motion';

const Navigations = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element=""/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/OurServices' element={<Services/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default Navigations
