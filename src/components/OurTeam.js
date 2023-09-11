import React from 'react';
import { TeamList } from "./TeamList.js";
import '../styles/Team.css';
import TeamItem from './TeamItem.js';
import BackTwo from '../assets/back2.jpg';

function OurTeam() {
  return (
    <div className='team'> 
    <h1 className='TeamTitle'> Our Team</h1>
    <div className='TeamList'>
        {TeamList.map((teamItem, key) => {
            return(
            
               <TeamItem 
                image={teamItem.image}
                name ={teamItem.name}
                department ={teamItem.department}
                salary ={teamItem.salary}
                /> 
            );
        })}
        </div>
    </div >
  );
}

export default OurTeam;
