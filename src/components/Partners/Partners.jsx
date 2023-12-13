import React from 'react';
import Title from '../Title/Title';

import styles from './Partners.module.scss';

import Image1 from '../../assets/img/partners/1.png';
import Image2 from '../../assets/img/partners/2.png';
import Image3 from '../../assets/img/partners/3.png';
import Image4 from '../../assets/img/partners/4.png';
import Image5 from '../../assets/img/partners/5.png';
import Image6 from '../../assets/img/partners/6.png';
import Image7 from '../../assets/img/partners/7.png';
import Image8 from '../../assets/img/partners/8.png';
import Image9 from '../../assets/img/partners/9.png';
import Image10 from '../../assets/img/partners/10.png';
import Image11 from '../../assets/img/partners/11.png';

const Partners = () => {
  return (
    <section className={styles.partners}>
      <div className={styles.partners__container}>
        <Title title="Партнёры" />
        <div className={styles.partners__wrapper}>
          <div className={styles.partners__link}>
            <img src={Image1} alt="Партнёр" />
          </div>
          <div className={styles.partners__link}>
            <img src={Image2} alt="Партнёр" />
          </div>
          <a href="https://artmoskovia.ru" target="_blank" className={styles.partners__link}>
            <img src={Image3} alt="Партнёр" />
          </a>
          <a href="https://musicboxtv.ru" target="_blank" className={styles.partners__link}>
            <img src={Image4} alt="Партнёр" />
          </a>
          <a href="https://mboxtv.ru" target="_blank" className={styles.partners__link}>
            <img src={Image5} alt="Партнёр" />
          </a>
          <a href="https://persontime.ru" target="_blank" className={styles.partners__link}>
            <img src={Image6} alt="Партнёр" />
          </a>
          <a href="https://musecube.org" target="_blank" className={styles.partners__link}>
            <img src={Image7} alt="Партнёр" />
          </a>
          <a href="https://musecube.org" target="_blank" className={styles.partners__link}>
            <img src={Image8} alt="Партнёр" />
          </a>
          <a href="https://sbertech.ru" target="_blank" className={styles.partners__link}>
            <img src={Image9} alt="Партнёр" />
          </a>
          <a
            href="https://www.alfastrah.ru/?utm_referrer=https%3A%2F%2Fam-prod.media%2F"
            target="_blank"
            className={styles.partners__link}>
            <img src={Image10} alt="Партнёр" />
          </a>
          <a
            href="https://kinoproducer.ru"
            target="_blank"
            className={`${styles.partners__link} ${styles.partners__link_cover}`}>
            <img src={Image11} alt="Партнёр" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
