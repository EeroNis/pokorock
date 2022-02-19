import React, { useLayoutEffect, useState } from 'react';
import { VahvistinTuotteet } from '../Utils/Vahvistimet';
import PokoKortti from '../components/Kitarat/PokoKortti';

const VahvistimetSivu = () => {
  const [vahvistimet, setVahvistimet] = useState(VahvistinTuotteet);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {VahvistinTuotteet.map((vahvistin) => {
        return (
          <PokoKortti
            key={vahvistin.id}
            kuva={vahvistin.kuva}
            teksti={vahvistin.teksti}
            hinta={vahvistin.hinta}
            otsikko={vahvistin.otsikko}
          />
        );
      })}
    </div>
  );
};

export default VahvistimetSivu;
