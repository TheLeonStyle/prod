import React, { useEffect, useRef, useState } from 'react';

import styles from './Intro.module.scss';
import Canvas from '../Canvas/Canvas.jsx';

const Intro = ({ translationArray, toggleIsVisibleSubmit }) => {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__container}>
        <div className={styles.intro__wrapper}>
          <h1 className={styles.intro__title}>
            <span>A</span>rkadi <span>M</span>edia <span>P</span>roduction
          </h1>

          {translationArray.map((object) => (
            <React.Fragment key={object.subtitle}>
              <p className={styles.intro__subtitle}>{object.subtitle}</p>
              <div className={styles.intro__footer}>
                <button onClick={toggleIsVisibleSubmit} className={styles.intro__button}>
                  {object.button}
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <Canvas />
    </section>
  );
};

export default Intro;
