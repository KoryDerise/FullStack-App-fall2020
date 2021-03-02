import React, { useState } from 'react';
import './homeOverlay.css';

const HomeOverlay = () => {
  const [pos, setPos] = useState('--right');
  const [overlayBtn, setOverlayBtn] = useState('Register');

  const handleToggleBtn = () => {
    if (pos === '--right') setPos('--left');
    if (pos === '--left') setPos('--right');

    if (overlayBtn === 'Register')  setOverlayBtn('Login');
    if (overlayBtn === 'Login')  setOverlayBtn('Register');
  };

  return ( 
    <div className={`home-overlay${pos}`}>
      <input className="home-overlay__btn" type="button" value={ overlayBtn } onClick={handleToggleBtn} />
    </div>
  );
};

export default HomeOverlay;