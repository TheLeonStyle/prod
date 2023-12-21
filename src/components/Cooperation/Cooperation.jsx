import React from 'react';
import styles from './Cooperation.module.scss';

const Cooperation = ({ translationObj }) => {
  return (
    <section className={styles.cooperation}>
      <div className={styles.cooperation__container}>
        <div className={styles.cooperation__wrapper}>
          <div className={styles.cooperation__inner}>
            <h2 className={styles.cooperation__title}>{translationObj.title}</h2>
            <p className={styles.cooperation__subtitle}>{translationObj.subtitle}</p>
          </div>
          <div className={styles.cooperation__inner}>
            <p className={styles.cooperation__suptitle}>{translationObj.suptitle}</p>
            <a href="mailto:manager@am-prod.media" className={styles.cooperation__email}>
              manager@am-prod.media
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cooperation;
