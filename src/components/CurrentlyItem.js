
import React, { useState } from 'react';



function CurrentlyItem (props){
const {artimage, artname, artdepartment, artsalary} = props;
const [isVisible, setIsVisible] = useState(false);

const toggleVisibility = () => {
  setIsVisible(!isVisible);
}
  return (
    <div className='currentlyItem' onClick = {toggleVisibility}>
      <div style={{backgroundImage: `url(${artimage})` }} ></div>
      {isVisible ? (
        <div>
      <h1>{artname}</h1>
      <p>{artdepartment}</p>
      <p>{artsalary}</p>
    </div>
    ) : null}
    </div>
  );
}

export default CurrentlyItem;