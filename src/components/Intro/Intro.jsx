import React from 'react';

import styles from './Intro.module.scss';

const Intro = ({ array }) => {
  return (
    <div className={styles.intro}>
      <div className={styles.intro__container}>
        <div className={styles.intro__wrapper}>
          <h1 className={styles.intro__title}>
            <span>A</span>rkadi <span>M</span>edia <span>P</span>roduction
          </h1>

          {array.map((obj) => (
            <>
              <p className={styles.intro__subtitle}>{obj.subtitle}</p>
              <div className={styles.intro__footer}>
                <button className={styles.intro__button}>{obj.button}</button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
