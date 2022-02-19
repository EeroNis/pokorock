import React, { useLayoutEffect, useState } from 'react';
import Esittely_yhteystiedot from '../components/Yhteystiedot/Esittely';
import Lomake from '../components/Yhteystiedot/Lomake';

const YhteystiedotSivu = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Esittely_yhteystiedot />
      <Lomake />
    </>
  );
};

export default YhteystiedotSivu;
