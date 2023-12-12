import React, { useEffect, useState } from 'react';

import Logo from '../../assets/img/logo.svg';
import styles from './Header.module.scss';

const Header = ({ burgerActive, setBurgerActive, navigationArray, handleLanguageChanges }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Скролл страницы на 30px
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBurger = () => {
    setBurgerActive((prev) => !prev);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.active : ''}`}>
      <div className={styles.header__container}>
        <a href="" className={styles.header__logo}>
          <img src={Logo} alt="Логотип" />
        </a>

        <nav className={styles.header__nav}>
          <ul className={styles.header__menu}>
            {navigationArray.map((obj) => (
              <li className={styles.header__list} key={obj.title}>
                <a href={obj.link} className={styles.header__link}>
                  {obj.title}
                </a>

                {obj.array && (
                  <div className={styles.header__popup}>
                    {obj.array.map((elem) => (
                      <a href="" className={styles.header__popup_link} key={elem}>
                        {elem}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}

            <li onClick={() => handleLanguageChanges('en')} className={styles.header__list}>
              <span className={styles.header__lang}>En</span>
            </li>
            <li onClick={() => handleLanguageChanges('ru')} className={styles.header__list}>
              <span className={styles.header__lang}>ru</span>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => handleBurger()}
          className={`${styles.header__burger} ${burgerActive ? styles.active : ''}`}>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
