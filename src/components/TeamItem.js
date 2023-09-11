
import React, { useState } from 'react';



function TeamItem (props){
const {image, name, department, salary} = props;
const [isVisible, setIsVisible] = useState(false);

const toggleVisibility = () => {
  setIsVisible(!isVisible);
}
  return (
    <div className='teamItem' onClick = {toggleVisibility}>
      <div style={{backgroundImage: `url(${image})` }} ></div>
      {isVisible ? (
        <div>
      <h1>{name}</h1>
      <p>{department}</p>
      <p>{salary}</p>
    </div>
    ) : null}
    </div>
  );
}

export default TeamItem
