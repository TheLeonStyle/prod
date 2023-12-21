import React from 'react';
import Title from '../Title/Title';
import styles from './Services.module.scss';

import image01 from '../../assets/img/services/01.svg';
import image02 from '../../assets/img/services/02.svg';
import image03 from '../../assets/img/services/03.svg';
import image04 from '../../assets/img/services/04.svg';

const images = {
  image1: image01,
  image2: image02,
  image3: image03,
  image4: image04,
};

const Services = ({ translationObj }) => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.services__container}>
        <div className={styles.services__text}>
          <Title title={translationObj.title} />
        </div>
        <div className={styles.services__items}>
          {translationObj.array &&
            translationObj.array.map((obj) => (
              <div className={styles.services__item} key={obj.title}>
                <div className={styles.services__icon}>
                  <img src={images[`image${obj.image}`]} alt="Иконка услуг" />
                </div>
                <h6 className={styles.services__title}>{obj.title}</h6>
                <ul className={styles.services__lists}>
                  {obj.list.map((text) => (
                    <li className={styles.services__list} key={text}>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          {/* <a href="" className={styles.services__item}>
            <div className={styles.services__icon}>
              <img src={image01} alt="Иконка услуг" />
            </div>
            <h6 className={styles.services__title}>Music and dance</h6>
            <ul className={styles.services__lists}>
              <li className={styles.services__list}>Создание и запись музыки</li>
              <li className={styles.services__list}>Постановка голоса</li>
              <li className={styles.services__list}>Подтанцовка на концертах и мероприятиях</li>
              <li className={styles.services__list}>Создание танцевальных композиций</li>
            </ul>
          </a>
          <a href="" className={styles.services__item}>
            <div className={styles.services__icon}>
              <img src={image01} alt="Иконка услуг" />
            </div>
            <h6 className={styles.services__title}>Music and dance</h6>
            <ul className={styles.services__lists}>
              <li className={styles.services__list}>Создание и запись музыки</li>
              <li className={styles.services__list}>Постановка голоса</li>
              <li className={styles.services__list}>Подтанцовка на концертах и мероприятиях</li>
              <li className={styles.services__list}>Создание танцевальных композиций</li>
            </ul>
          </a>
          <a href="" className={styles.services__item}>
            <div className={styles.services__icon}>
              <img src={image01} alt="Иконка услуг" />
            </div>
            <h6 className={styles.services__title}>Music and dance</h6>
            <ul className={styles.services__lists}>
              <li className={styles.services__list}>Создание и запись музыки</li>
              <li className={styles.services__list}>Постановка голоса</li>
              <li className={styles.services__list}>Подтанцовка на концертах и мероприятиях</li>
              <li className={styles.services__list}>Создание танцевальных композиций</li>
            </ul>
          </a>
          <a href="" className={styles.services__item}>
            <div className={styles.services__icon}>
              <img src={image01} alt="Иконка услуг" />
            </div>
            <h6 className={styles.services__title}>Music and dance</h6>
            <ul className={styles.services__lists}>
              <li className={styles.services__list}>Создание и запись музыки</li>
              <li className={styles.services__list}>Постановка голоса</li>
              <li className={styles.services__list}>Подтанцовка на концертах и мероприятиях</li>
              <li className={styles.services__list}>Создание танцевальных композиций</li>
            </ul>
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
