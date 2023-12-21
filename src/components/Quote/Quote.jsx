import React from 'react';
import styles from './Quote.module.scss';

const Quote = ({ translationObj }) => {
  return (
    <section className={styles.quote}>
      <div className={styles.quote__container}>
        <blockquote className={styles.quote__blockquote}>
          <p className={styles.quote__quote}>{translationObj.quote}</p>
          <footer className={styles.quote__footer}>
            <p className={styles.quote__author}>
              <cite>{translationObj.author}</cite> {translationObj.role}
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;
