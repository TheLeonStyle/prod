import React from 'react';
import Title from '../Title/Title';
import styles from './Mission.module.scss';

import Image from '../../assets/img/mission/image.svg';

const Mission = ({ translationObj }) => {
  return (
    <section className={styles.mission}>
      <div className={styles.mission__container}>
        <div className={styles.mission__top}>
          <div className={styles.mission__title}>
            <Title title={translationObj.title} />
          </div>
          <div className={styles.mission__info}>
            <p className={styles.mission__suptitle}>{translationObj.firstSuptitle}</p>
            <p className={styles.mission__suptitle}>{translationObj.secondSuptitle}</p>
          </div>
        </div>
        <div className={styles.mission__wrapper}>
          <div className={styles.mission__image}>
            <img src={Image} alt="Фотография блока миссий" />
          </div>
          <div className={styles.mission__inner}>
            <h4 className={styles.mission__text}>{translationObj.text}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
