import React from 'react';
import './Esittelyhteystiedot.css';
import kuva from '..//../assets/man-g4e715131d_1920.jpg';

const Esittely = () => {
  return (
    <div className='esittelyContainer2'>
      <div className='sisaltoContainer2'>
        <div className='tekstiContainer2'>
          <h1>Tietoa meistä</h1>
        </div>
        <div className='imgContainer2'>
          <img src={kuva} alt='kuva Pertsasta' />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            accusantium magnam obcaecati ut laborum commodi neque est illum
            dolore laboriosam odit doloremque officia sequi ad illo quibusdam
            saepe quam ratione. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Esse, accusantium magnam obcaecati ut laborum
            commodi neque est illum dolore laboriosam odit doloremque officia
            sequi ad illo quibusdam saepe quam ratione. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Esse, accusantium magnam
            obcaecati ut laborum commodi neque est illum dolore laboriosam odit
            doloremque officia sequi ad illo quibusdam saepe quam ratione. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Esse, accusantium
            magnam obcaecati ut laborum commodi neque est illum dolore
            laboriosam odit doloremque officia sequi ad illo quibusdam saepe
            quam ratione.
          </p>
        </div>
        <div className='yhteystiedot2'>
          <h1>Meihin voit ottaa yhteyttä</h1>
          <p>S.posti : info@Poko&Rock.com</p>
          <p>Osoite : Pokolantie 31</p>
          <p>59388 Pokola</p>
          <p>Puh. 050-1829106</p>
        </div>
      </div>
    </div>
  );
};

export default Esittely;
