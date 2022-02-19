import React from 'react';
import './Esittely.css';

import kuva from '../../assets/store-gc47c7675c_1920.jpg';

const Esittely = () => {
  return (
    <div className='esittelydiv'>
      <h1>Rakkaudesta musiikkiin jo vuodesta 1997</h1>
      <div className='kuvaContainer'>
        <div className='kuva'>
          <img src={kuva} alt='Esittely kuva' />
        </div>
      </div>
      <p>
        Poko&Rock on Savon sydämessä Kuopiossa sijaitseva kitaroihin
        erikoistunut erikoisliike. Tarjoamme edullisia soittovälineitä makuun
        kuin makuun. Henkilökunnalta löytyy rautaista tuntemusta niin
        moderneista kuin klassikko soittovälineistä. Ota rohkeasti yhteyttä tai
        tule vaikka paikan päällä käymään testaamassa välineitä.{' '}
      </p>
    </div>
  );
};

export default Esittely;
