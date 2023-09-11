import './App.css';
import Navbar from './components/Navbar';
import CloseButton from './assets/CloseButton'; 
import Currently from './components/Currently';
import Footer from './components/Footer';
import Home from './components/Home';
import OurTeam from './components/OurTeam';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Component } from 'react';


function App() {

    return(
    <div className='App'>
      <Router>
          <Navbar/>
          	<Routes>
             <Route path ="/" element = {<Home />}/>
             <Route path ="/employee" element = {<OurTeam/>}/>
             <Route path ="/about" element = {<AboutUs/>}/>
             <Route path ="/contact" element = {<Contact/>}/>
             <Route path ="/art" element = {<Currently/>}/>
            </Routes>
            <Footer/>
            <CloseButton/>
      </Router>
    
     </div>
    
  );

}

export default App;