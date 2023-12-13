import React from 'react';
import styles from './Title.module.scss';

const Title = ({ title, subtitle }) => {
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
    </>
  );
};

export default Title;
