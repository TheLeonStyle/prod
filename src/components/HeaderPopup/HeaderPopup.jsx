import React, { useState } from 'react';
import styles from './HeaderPopup.module.scss';

const HeaderPopup = ({ navigationArray, handleLanguageChanges }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleServices = (event) => {
    event.preventDefault();
    setServicesOpen((prev) => !prev);
    console.log(servicesOpen);
  };

  return (
    <div className={styles.header_popup}>
      <nav className={styles.header_popup__nav}>
        <ul className={styles.header_popup__items}>
          {navigationArray.map((obj, index) => (
            <li className={styles.header_popup__item} key={obj.title}>
              <a
                onClick={(event) => (index === 1 ? toggleServices(event) : undefined)}
                href=""
                className={styles.header_popup__link}>
                {obj.title}
              </a>
              {obj.array && servicesOpen && (
                <ul className={styles.header_popup__lists}>
                  {obj.array.map((elem) => (
                    <li className={styles.header_popup__list} key={elem}>
                      <a href="" className={styles.header_popup__link}>
                        {elem}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
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
