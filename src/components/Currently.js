import React from 'react';
import { CurrentlyList } from "./CurrentlyList.js";
import CurrentlyItem from './CurrentlyItem.js';
import '../styles/Currently.css';



function Currently() {
  return (
    <div className="currently"> 
    <h1 className='currentlyTitle'> Currently Available</h1>
    <div className='currentlyList'>
        {CurrentlyList.map((currentlyItem, key) => {
            return(
            
               <CurrentlyItem 
               
                artimage={currentlyItem.artimage}
                artname ={currentlyItem.artname}
                artdepartment ={currentlyItem.artdepartment}
                artsalary ={currentlyItem.artsalary}
                /> 
            );
        })}
        </div>
    </div >
  );
}

export default Currently;
