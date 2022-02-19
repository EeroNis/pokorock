import React from 'react';
import './Lomake.css';

const Lomake = () => {
  return (
    <div className='lomakediv'>
      <div className='sisaltodiv'>
        <div className='teksti'>
          <h1>Ota yhteyttä</h1>
        </div>

        <div className='spostifield'>
          <h2>Sähköpostiosoite</h2>
          <input placeholder='joku@example.com' type='text' />
        </div>
        <div className='biginput'>
          <textarea
            placeholder='Tekstiä...'
            name=''
            id=''
            cols='57'
            rows='10'
          ></textarea>
        </div>
        <div className='button'>
          <button>Lähetä</button>
        </div>
      </div>
    </div>
  );
};

export default Lomake;
