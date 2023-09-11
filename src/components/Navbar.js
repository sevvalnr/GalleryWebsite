import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(true);
  };
  
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"} >
        <img src={Logo} />
        <div className="hiddenLinks">
      <Link to = "/">Home</Link>
      <Link to = "/employee">OurTeam</Link>
      <Link to = "/about">About</Link>
      <Link to = "/contact">Contact</Link>
      <Link to = "/art">Currently</Link>
        </div>
      </div>
      <div className="rightSide">
      <Link to = "/">Home</Link>
      <Link to = "/employee">Our Team</Link>
      <Link to = "/about">About</Link>
      <Link to = "/contact">Contact</Link>
      <Link to = "/art">Currently</Link>
      
      <button onClink={toggleNavbar}>
        <ReorderIcon/>
      </button >
   </div>
   </div>
  );
}

export default Navbar;