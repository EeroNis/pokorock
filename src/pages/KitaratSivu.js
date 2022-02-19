import React, { useLayoutEffect, useState } from 'react';
import { Kitaratuotteet } from '../Utils/Kitarat';
import PokoKortti from '../components/Kitarat/PokoKortti';

const KitaratSivu = () => {
  const [kitarat, setKitarat] = useState(Kitaratuotteet);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {Kitaratuotteet.map((kitara) => {
        return (
          <PokoKortti
            key={kitara.id}
            kuva={kitara.kuva}
            teksti={kitara.teksti}
            hinta={kitara.hinta}
            otsikko={kitara.otsikko}
          />
        );
      })}
    </div>
  );
};

export default KitaratSivu;
