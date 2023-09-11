import React from 'react';
import '../styles/CloseButton.css';

function CloseButton() {
  const handleClose = () => {
   
    const confirmationMessage = 'Are you sure that you want to close this tab?';
    if (window.confirm(confirmationMessage)) {
      window.close();
    }
  };

  return (
    <button className='close-button' onClick={handleClose}>X</button>
  );
}

export default CloseButton;