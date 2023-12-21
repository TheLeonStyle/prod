import React from 'react';
import Title from '../../Title/Title';

import Image1 from '../../../assets/img/ServicesPage/services/1.jpg';
import Image2 from '../../../assets/img/ServicesPage/services/2.jpg';
import Image3 from '../../../assets/img/ServicesPage/services/3.jpeg';
import Image4 from '../../../assets/img/ServicesPage/services/4.jpg';
import Image5 from '../../../assets/img/ServicesPage/services/5.jpg';
import Image6 from '../../../assets/img/ServicesPage/services/6.jpg';
import Image7 from '../../../assets/img/ServicesPage/services/7.jpeg';
import Image8 from '../../../assets/img/ServicesPage/services/8.jpg';
import Image9 from '../../../assets/img/ServicesPage/services/9.jpg';
import Image10 from '../../../assets/img/ServicesPage/services/10.jpg';
import Image11 from '../../../assets/img/ServicesPage/services/11.jpg';

import Image12 from '../../../assets/img/ServicesPage/services/12.jpg';
import Image13 from '../../../assets/img/ServicesPage/services/13.jpg';
import Image14 from '../../../assets/img/ServicesPage/services/14.jpg';
import Image15 from '../../../assets/img/ServicesPage/services/15.jpg';
import Image16 from '../../../assets/img/ServicesPage/services/16.jpg';
import Image17 from '../../../assets/img/ServicesPage/services/17.jpg';
import Image18 from '../../../assets/img/ServicesPage/services/18.jpg';
import Image19 from '../../../assets/img/ServicesPage/services/19.jpg';
import Image20 from '../../../assets/img/ServicesPage/services/20.jpg';
import Image21 from '../../../assets/img/ServicesPage/services/21.jpg';

import Image22 from '../../../assets/img/ServicesPage/services/22.jpg';
import Image23 from '../../../assets/img/ServicesPage/services/23.jpg';
import Image24 from '../../../assets/img/ServicesPage/services/24.jpg';
import Image25 from '../../../assets/img/ServicesPage/services/25.jpg';
import Image26 from '../../../assets/img/ServicesPage/services/26.jpg';
import Image27 from '../../../assets/img/ServicesPage/services/27.jpeg';
import Image28 from '../../../assets/img/ServicesPage/services/28.jpg';
import Image29 from '../../../assets/img/ServicesPage/services/29.jpg';
import Image30 from '../../../assets/img/ServicesPage/services/30.jpeg';
import Image31 from '../../../assets/img/ServicesPage/services/31.jpg';
import Image32 from '../../../assets/img/ServicesPage/services/32.jpg';
import Image33 from '../../../assets/img/ServicesPage/services/33.jpg';
import Image34 from '../../../assets/img/ServicesPage/services/34.jpg';
import Image35 from '../../../assets/img/ServicesPage/services/35.jpg';
import Image36 from '../../../assets/img/ServicesPage/services/36.jpg';
import Image37 from '../../../assets/img/ServicesPage/services/37.jpg';

import Image38 from '../../../assets/img/ServicesPage/services/38.jpg';
import Image39 from '../../../assets/img/ServicesPage/services/39.jpeg';
import Image40 from '../../../assets/img/ServicesPage/services/40.jpg';
import Image41 from '../../../assets/img/ServicesPage/services/41.jpg';
import Image42 from '../../../assets/img/ServicesPage/services/42.jpg';
import Image43 from '../../../assets/img/ServicesPage/services/43.jpeg';
import Image44 from '../../../assets/img/ServicesPage/services/44.jpg';
import Image45 from '../../../assets/img/ServicesPage/services/45.jpg';
import Image46 from '../../../assets/img/ServicesPage/services/46.jpg';
import Image47 from '../../../assets/img/ServicesPage/services/47.png';
import Image48 from '../../../assets/img/ServicesPage/services/48.jpg';
import Image49 from '../../../assets/img/ServicesPage/services/49.jpg';
import Image50 from '../../../assets/img/ServicesPage/services/50.jpeg';
import Image51 from '../../../assets/img/ServicesPage/services/51.jpg';
import Image52 from '../../../assets/img/ServicesPage/services/52.jpeg';
import Image53 from '../../../assets/img/ServicesPage/services/53.jpg';
import Image54 from '../../../assets/img/ServicesPage/services/54.jpg';
import Image55 from '../../../assets/img/ServicesPage/services/55.jpg';
import Image56 from '../../../assets/img/ServicesPage/services/56.jpg';
import Image57 from '../../../assets/img/ServicesPage/services/57.jpg';
import Image58 from '../../../assets/img/ServicesPage/services/58.jpg';

import styles from './Services.module.scss';

const images = {
  Image1: Image1,
  Image2: Image2,
  Image3: Image3,
  Image4: Image4,
  Image5: Image5,
  Image6: Image6,
  Image7: Image7,
  Image8: Image8,
  Image9: Image9,
  Image10: Image10,
  Image11: Image11,
  Image12: Image12,
  Image13: Image13,
  Image14: Image14,
  Image15: Image15,
  Image16: Image16,
  Image17: Image17,
  Image18: Image18,
  Image19: Image19,
  Image20: Image20,
  Image21: Image21,
  Image22: Image22,
  Image23: Image23,
  Image24: Image24,
  Image25: Image25,
  Image26: Image26,
  Image27: Image27,
  Image28: Image28,
  Image29: Image29,
  Image30: Image30,
  Image31: Image31,
  Image32: Image32,
  Image33: Image33,
  Image34: Image34,
  Image35: Image35,
  Image36: Image36,
  Image37: Image37,
  Image38: Image38,
  Image39: Image39,
  Image40: Image40,
  Image41: Image41,
  Image42: Image42,
  Image43: Image43,
  Image44: Image44,
  Image45: Image45,
  Image46: Image46,
  Image47: Image47,
  Image48: Image48,
  Image49: Image49,
  Image50: Image50,
  Image51: Image51,
  Image52: Image52,
  Image53: Image53,
  Image54: Image54,
  Image55: Image55,
  Image56: Image56,
  Image57: Image57,
  Image58: Image58,
};

const Services = ({ translationObj }) => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.services__title}>
        <Title title={translationObj.title} />
      </div>
      <div className={styles.services__wrapper}>
        {translationObj?.array?.map((obj, index) => (
          <div
            key={obj.title}
            className={`${styles.services__image} ${
              index == 0 ||
              index == 1 ||
              index == 6 ||
              obj.image == 22 ||
              obj.image == 23 ||
              obj.image == 34 ||
              obj.image == 37 ||
              obj.image == 38 ||
              obj.image == 39 ||
              obj.image == 44 ||
              obj.image == 51
                ? styles[`services__image_${obj.image}`]
                : ''
            }`}>
            <img src={images[`Image${obj.image}`]} alt="Изображение услуг" />
            <p className={styles.services__text}>{obj.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
