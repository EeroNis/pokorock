import React from 'react';
import './Valikko.css';
import { Link } from 'react-router-dom';

import kuva1 from '../../assets/guitar-gd4bfbb1c4_1920.jpg';
import kuva2 from '../../assets/marshall-g0022c3809_1920.jpg';
import kuva3 from '../../assets/guitar-pick-g027c520cc_1920.jpg';

const Valikko = () => {
  return (
    <div className='valikkodiv'>
      <h1>Tuotteet</h1>
      <div className='tuotevalikko'>
        <figure className='item'>
          <Link to='/kitarat'>
            <img src={kuva1} alt='kuva' />
          </Link>
          <Link to='/kitarat'>
            <h2 className='caption'>Kitarat</h2>
          </Link>
        </figure>
        <figure className='item'>
          <Link to='/vahvistimet'>
            <img src={kuva2} alt='kuva' />
            <h2 className='caption'>Vahvistimet</h2>
          </Link>
        </figure>
        <figure className='item'>
          <Link to='/plektrat'>
            <img src={kuva3} alt='kuva' />
            <h2 className='caption'>Plektrat</h2>
          </Link>
        </figure>
      </div>
    </div>
  );
};

export default Valikko;
