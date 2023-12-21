import React from 'react';

import styles from './Button.module.scss';

const Button = ({ title, color = 'transparent' }) => {
  return (
    <button
      className={`${styles.button} ${
        color == 'white' ? styles.white : color == 'black' ? styles.black : styles.transparent
      }`}>
      {title}
    </button>
  );
};

export default Button;
