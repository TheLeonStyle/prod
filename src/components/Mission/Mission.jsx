import React from 'react';
import Title from '../Title/Title';
import styles from './Mission.module.scss';

import Image from '../../assets/img/mission/image.svg';

const Mission = () => {
  return (
    <section className={styles.mission}>
      <div className={styles.mission__container}>
        <div className={styles.mission__top}>
          <div className={styles.mission__title}>
            <Title title={'Миссия'} />
          </div>
          <div className={styles.mission__info}>
            <p className={styles.mission__suptitle}>
              К каждому проекту мы подходим с душой и настойчивым намерением найти лучшее решение.
              Наша миссия – создать прочный фундамент для лестницы, ведущей к вашему триумфу.
            </p>
            <p className={styles.mission__suptitle}>
              Команда АМР работает для вашего успеха. Не важно, сколько вам лет, где вы живёте и
              какие у вас связи. Мы раскроем ваш потенциал.
            </p>
          </div>
        </div>
        <div className={styles.mission__wrapper}>
          <div className={styles.mission__image}>
            <img src={Image} alt="Фотография блока миссий" />
          </div>
          <div className={styles.mission__inner}>
            <h4 className={styles.mission__text}>
              АМР – универсальный продюсерский центр. У нас есть все условия для проведения
              мероприятий, поддержки артистов и продвижения коммерческих брендов.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
