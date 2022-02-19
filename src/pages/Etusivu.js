import React from 'react';
import Carousel from '../components/Etusivu/Carousel';
import Esittely from '../components/Etusivu/Esittely';
import Valikko from '../components/Etusivu/Valikko';

function Etusivu() {
  return (
    <>
      <Esittely />
      <Carousel />
      <Valikko />
    </>
  );
}

export default Etusivu;
