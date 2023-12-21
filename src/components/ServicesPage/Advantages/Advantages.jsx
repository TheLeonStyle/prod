import React from 'react';
import styles from './Advantages.module.scss';

const Advantages = ({ translationObj }) => {
  return (
    <div className={styles.advantages}>
      <div className={styles.advantages__container}>
        <h3 className={styles.advantages__title}>
          <span>{translationObj?.title?.strong}</span> {translationObj?.title?.text}
        </h3>
        <p className={styles.advantages__subtitle}>{translationObj.subtitle}</p>
        <div className={styles.advantages__wrapper}>
          {translationObj?.array?.map((obj) => (
            <p className={styles.advantages__suptitle} key={obj.lastSuptitle}>
              {obj.firstSuptitle} <strong>{obj.strong}</strong> {obj.lastSuptitle}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
