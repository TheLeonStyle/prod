import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.svg';
import styles from './Header.module.scss';

const Header = ({
  burgerActive,
  setBurgerActive,
  navigationArray,
  handleLanguageChanges,
  headerNested,
}) => {
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

  const handleLink = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`${styles.header} ${scrolled || burgerActive ? styles.active : ''} ${
        headerNested ? styles.nested : ''
      }`}>
      <div className={styles.header__container}>
        <Link to="/" onClick={handleLink} className={styles.header__logo}>
          <img src={Logo} alt="Логотип" />
        </Link>

        <nav className={styles.header__nav}>
          <ul className={styles.header__menu}>
            {navigationArray.map((obj) => (
              <li className={styles.header__list} key={obj.title}>
                <a href={`#${obj.link}`} className={styles.header__link}>
                  {obj.title}
                </a>

                {obj.array && (
                  <div className={styles.header__popup}>
                    {obj.array.map((object) => (
                      <Link
                        to={`/${object.link}`}
                        onClick={handleLink}
                        className={styles.header__popup_link}
                        key={object.text}>
                        {object.text}
                      </Link>
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
