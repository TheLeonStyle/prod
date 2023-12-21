import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../utils/Button/Button';

import styles from './Intro.module.scss';
import Canvas from '../../Canvas/Canvas';

const Intro = ({ translationObj }) => {
  return (
    <section
      className={`${styles.intro} ${translationObj.image === 'events' ? styles.intro_events : ''} ${
        translationObj.image === 'music' ? styles.intro_music : ''
      } ${translationObj.image === 'photo' ? styles.intro_photo : ''} ${
        translationObj.image === 'marketing' ? styles.intro_marketing : ''
      }`}>
      <div className={styles.intro__container}>
        <div className={styles.intro__text}>
          <h2 className={styles.intro__title}>{translationObj.title}</h2>
          <p className={styles.intro__subtitle}>{translationObj.subtitle}</p>

          {translationObj?.obj?.button && (
            <div className={styles.intro__bottom}>
              <Link to={`/${translationObj?.obj?.button?.link}`} className={styles.intro__link}>
                <Button title={translationObj?.obj?.button?.text} color="black" />
              </Link>
              <a href={`#${translationObj?.obj?.link?.link}`} className={styles.intro__link}>
                <Button title={translationObj?.obj?.link?.text} color="white" />
              </a>
            </div>
          )}
        </div>
      </div>
      <Canvas />
    </section>
  );
};

export default Intro;
