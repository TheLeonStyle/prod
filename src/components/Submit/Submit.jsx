import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Submit.module.scss';
import PhoneInput from 'react-phone-input-2';

const Submit = ({ toggleIsVisibleSubmit, translationObj }) => {
  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valideError, setValideError] = useState(false);
  const [isCloseVisible, setIsCloseVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsCloseVisible(windowWidth < 991.98);
  }, [windowWidth]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (valueName && valueEmail) {
      setValideError(false);
    } else {
      setValideError(true);
    }
  };

  const handleToggleSubmit = (event) => {
    if (event.target.classList.contains(styles.submit)) {
      toggleIsVisibleSubmit(false);
    }
  };

  return (
    <section onClick={(event) => handleToggleSubmit(event)} className={styles.submit}>
      <div className={styles.submit__wrapper}>
        {isCloseVisible && (
          <header className={styles.submit__header}>
            <button
              onClick={() => toggleIsVisibleSubmit(false)}
              className={styles.submit__button}></button>
          </header>
        )}

        <div className={styles.submit__top}>
          <h5 className={styles.submit__title}>{translationObj.title}</h5>
          <p className={styles.submit__subtitle}>{translationObj.subtitle}</p>
        </div>
        <form className={styles.submit__form}>
          <select name="services" className={styles.submit__select}>
            {translationObj.option.map((elem, index) => (
              <option
                key={elem}
                value={elem}
                className={styles.submit__option}
                disabled={index === 0}
                selected={index === 0}>
                {elem}
              </option>
            ))}
          </select>
          <input
            onChange={(event) => setValueName(event.target.value)}
            value={valueName}
            type="text"
            placeholder={translationObj.name}
            className={`${styles.submit__input} ${
              valideError ? styles.submit__input_invalide : ''
            }`}
          />
          {valideError && (
            <p className={styles.submit__invalide_subtitle}>{translationObj.invalide.subtitle}</p>
          )}
          <label htmlFor="task" className={styles.submit__label}>
            {translationObj.textarea}
          </label>
          <textarea id="task" name="task" rows="5" className={styles.submit__textarea}></textarea>
          <PhoneInput
            country={'ru'}
            className={`${styles.submit__input} ${styles.submit__input_phone}`}
          />
          <input
            onChange={(event) => setValueEmail(event.target.value)}
            value={valueEmail}
            type="email"
            placeholder={translationObj.email}
            className={`${styles.submit__input}  ${
              valideError ? styles.submit__input_invalide : ''
            }`}
          />
          {valideError && (
            <p className={styles.submit__invalide_subtitle}>{translationObj.invalide.subtitle}</p>
          )}
          {valideError && (
            <h6 className={styles.submit__invalide}>{translationObj.invalide.title}</h6>
          )}
          <input
            onClick={(event) => handleSubmit(event)}
            type="submit"
            value={translationObj.button}
            className={styles.submit__submit}
          />
        </form>
        <p className={styles.submit__policy}>
          {`${translationObj.policy.text} `}
          <Link to="/policy">{translationObj.policy.link}</Link>
        </p>
      </div>
    </section>
  );
};

export default Submit;
