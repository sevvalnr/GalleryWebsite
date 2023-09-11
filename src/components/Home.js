import React from 'react';
import {Link} from "react-router-dom";
import backgI from '../assets/background.jpg';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${backgI})` }}>
      <div className="headerContainer" >
        <h1>Nur Company</h1>
        <p>Welcome to our company Website</p>
        <Link to = "/employee">
          <button >See Our Employees Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
