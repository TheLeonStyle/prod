import React from 'react';
import styles from './HeaderPopup.module.scss';

const HeaderPopup = ({ navigationArray, handleLanguageChanges }) => {
  return (
    <div className={styles.header_popup}>
      <nav className={styles.header_popup__nav}>
        <ul className={styles.header_popup__items}>
          {navigationArray.map((obj) => (
            <li className={styles.header_popup__item} key={obj.title}>
              <a href="" className={styles.header_popup__link}>
                {obj.title}
              </a>
            </li>
          ))}
        </ul>
        <footer className={styles.header_popup__footer}>
          <button onClick={() => handleLanguageChanges('en')} className={styles.header_popup__lang}>
            en
          </button>
          <button onClick={() => handleLanguageChanges('ru')} className={styles.header_popup__lang}>
            ru
          </button>
        </footer>
      </nav>
    </div>
  );
};

export default HeaderPopup;
