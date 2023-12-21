import React from 'react';
import styles from './About.module.scss';

const About = ({ translationObj }) => {
  return (
    <div className={styles.about}>
      <div className={styles.about__container}>
        <p className={styles.about__text}>
          <strong>{translationObj.strong}</strong> {translationObj.text}
        </p>
      </div>
    </div>
  );
};

export default About;
