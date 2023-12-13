import React from 'react';
import styles from './Quote.module.scss';

const Quote = () => {
  return (
    <section className={styles.quote}>
      <div className={styles.quote__container}>
        <blockquote className={styles.quote__blockquote}>
          <p className={styles.quote__quote}>
            «В отличие от пресловутых мотивационных ораторов, мы знаем что такое «сложно», и в этом
            сложном являемся экспертами»
          </p>
          <footer className={styles.quote__footer}>
            <p className={styles.quote__author}>
              <cite>Аркади Маилян</cite> генеральный продюсер
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;
