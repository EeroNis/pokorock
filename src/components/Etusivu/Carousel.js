import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import kuva1 from '../../assets/guitar-g6227cd99c_1920.jpg';
import kuva2 from '../../assets/marshall-gffbc286c5_1920.jpg';
import kuva3 from '../../assets/guitar-pick-g027c520cc_1920.jpg';

const kuvatArr = [{ polku: kuva1 }, { polku: kuva2 }, { polku: kuva3 }];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [imgPosition, setImgPosition] = useState({});
  const [kuvat, setKuvat] = useState(kuvatArr);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef) return;
    const mLeft = imgRef.current.offsetWidth * current;
    return setImgPosition({ marginLeft: `-${mLeft}px` });
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === kuvatArr.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? kuvatArr.length - 1 : current - 1);
  };

  if (!Array.isArray(kuvat) || kuvat.length <= 0) {
    return null;
  }
  return (
    <div className='carouselContainer'>
      <h1>Suosituimmat tuotteemme</h1>
      <div className='kuvatContainer'>
        <div className='arrowLeft hover'>
          <FaArrowAltCircleLeft color='red' size={60} onClick={prevSlide} />
        </div>
        <div style={imgPosition} className='kuva'>
          {kuvat.map((kuva, index) => {
            return (
              <img
                // className={index !== current ? 'image displayNone' : 'image'}
                ref={imgRef}
                key={index}
                src={kuva.polku}
                alt='sdfdsf'
              />
            );
          })}
        </div>
        <div className='arrowRight hover'>
          <FaArrowAltCircleRight color='red' size={60} onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
