import React, { useState } from 'react';
import styles from './HeaderPopup.module.scss';
import { Link } from 'react-router-dom';

const HeaderPopup = ({ navigationArray, handleLanguageChanges, setBurgerActive }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleServices = (event) => {
    event.preventDefault();
    setServicesOpen((prev) => !prev);
  };

  const handleLink = (event, index) => {
    if (window.location.pathname === '/' && index === 1) {
      toggleServices(event);
    } else if (window.location.pathname !== '/' && index === 0) {
      toggleServices(event);
    } else {
      setBurgerActive((prev) => !prev);
    }
  };

  const handleNestedLink = () => {
    window.scrollTo(0, 0);
    setBurgerActive((prev) => !prev);
  };

  return (
    <div className={styles.header_popup}>
      <nav className={styles.header_popup__nav}>
        <ul className={styles.header_popup__items}>
          {navigationArray.map((obj, index) => (
            <li className={styles.header_popup__item} key={obj.title}>
              <a
                onClick={(event) => handleLink(event, index)}
                href={`#${obj.link}`}
                className={styles.header_popup__link}>
                {obj.title}
              </a>

              {obj.array && servicesOpen && (
                <ul className={styles.header_popup__lists}>
                  {obj.array.map((object) => (
                    <li className={styles.header_popup__list} key={object.text}>
                      <Link
                        to={`/${object.link}`}
                        onClick={handleNestedLink}
                        className={styles.header_popup__link}>
                        {object.text}
                      </Link>
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
