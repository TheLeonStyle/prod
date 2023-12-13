import React from 'react';

import Title from '../Title/Title';

import styles from './About.module.scss';

const About = ({ translationObj }) => {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__top}>
          <Title title={translationObj.title} subtitle={translationObj.subtitle} />
        </div>
        <div className={styles.about__wrapper}>
          {translationObj.array &&
            translationObj.array.map((obj) => (
              <p className={styles.about__text} key={obj.text}>
                <strong>{obj.strong}</strong> {obj.text}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;
