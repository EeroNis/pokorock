import React from 'react';
import './TuoteKortti.css';

const TuoteKortti = ({ kuva, teksti, hinta }) => {
  return (
    <div className='tuotekorttidiv'>
      <div className='tuotekortti'>
        <img src={kuva} alt='tuote kuva' />
        <div className='wrapperi'>
          <div className='tekstidiv'>
            <p>{teksti}</p>
          </div>
          <div className='buttondiv'>
            <button>Lisää ostokoriin</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuoteKortti;
