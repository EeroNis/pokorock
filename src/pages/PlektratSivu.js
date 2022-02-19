import React, { useLayoutEffect, useState } from 'react';
import { PlektraTuotteet } from '../Utils/Plektrat';
import PokoKortti from '../components/Kitarat/PokoKortti';

const PlektraSivu = () => {
  const [plektra, setPlektra] = useState(PlektraTuotteet);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {PlektraTuotteet.map((plektra) => {
        return (
          <PokoKortti
            key={plektra.id}
            kuva={plektra.kuva}
            teksti={plektra.teksti}
            hinta={plektra.hinta}
            otsikko={plektra.otsikko}
          />
        );
      })}
    </div>
  );
};

export default PlektraSivu;
