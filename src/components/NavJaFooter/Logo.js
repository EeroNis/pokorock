import React from 'react';
import './Logo.css';
import logo from '../../assets/logo.jpg';

const Logo = () => {
  return (
    <div className='logodiv'>
      <h1>Poko&Rock</h1>
      <img src={logo} />
    </div>
  );
};

export default Logo;
