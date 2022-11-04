import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router} from 'react-router-dom'
// import Navigations from './Components/Navigations';
import Footer from './Components/Footer';


import { Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';

function App() {
  
  return (
    <div className="App">
      <Router >
        <Header/>
        
        <Routes >
            <Route path='/' element={<Home/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/OurServices' element={<Services/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
        </Routes>
      
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
