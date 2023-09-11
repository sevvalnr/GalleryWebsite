import React from 'react';
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Contact from './Contact';

function Footer() {
  return (
    <div className="main-footer"> 


<div className="info">
        <p className='footer one'>Location : Istanbul/Turkey</p>
        <p className='footer two'>Phone Number : 0(123) 456 78 90</p>
        <p className ='footer three'>nur.artgall@example.com </p>
      </div>



      <div className="socialMedia">
          <InstagramIcon /> <TwitterIcon /> <LinkedInIcon />
          <p> &copy; 2023 nurartgallery.com </p>
      </div>

      
    
    </div>




  )
}

export default Footer
