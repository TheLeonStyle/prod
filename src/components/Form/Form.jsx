import React, { useState } from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import Title from '../Title/Title';
import styles from './Form.module.scss';
import bg from '../../assets/img/form/bg.jpg';
import { Link } from 'react-router-dom';

const Form = ({ translationObj }) => {
  const [placeholderIndex, setPlaceholderIndex] = useState(null);
  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');

  const handleLabelFocus = (index) => {
    setPlaceholderIndex(index);
  };

  const handleLabelBlur = () => {
    setPlaceholderIndex(null);
  };

  return (
    <section className={styles.form}>
      <div className={styles.form__container}>
        <div className={styles.form__text}>
          <Title title={translationObj.title} />
          <p className={styles.form__subtitle}>{translationObj.subtitle}</p>
        </div>
        <form className={styles.form__form}>
          <select name="services" className={`${styles.form__input} ${styles.form__select}`}>
            {translationObj.array &&
              translationObj.array.options.map((elem, index) =>
                index === 0 ? (
                  <option
                    selected
                    disabled
                    value={elem}
                    className={styles.form__option}
                    key={index}>
                    {elem}
                  </option>
                ) : (
                  <option value={elem} className={styles.form__option} key={elem}>
                    {elem}
                  </option>
                ),
              )}
          </select>
          <div className={styles.form__inner}>
            <label
              className={`${styles.form__placeholder} ${
                placeholderIndex === 0 || valueName ? styles.active : ''
              }`}>
              {translationObj?.array?.name}
            </label>
            <input
              onFocus={() => handleLabelFocus(0)}
              onBlur={handleLabelBlur}
              value={valueName}
              onChange={(event) => setValueName(event.target.value)}
              type="text"
              className={styles.form__input}
            />
          </div>
          <PhoneInput
            country={'ru'}
            className={`${styles.form__input} ${styles.form__input_phone}`}
          />
          <div className={styles.form__inner}>
            <label
              className={`${styles.form__placeholder} ${
                placeholderIndex === 1 || valueEmail ? styles.active : ''
              }`}>
              {translationObj?.array?.email}
            </label>
            <input
              onFocus={() => handleLabelFocus(1)}
              onBlur={handleLabelBlur}
              value={valueEmail}
              onChange={(event) => setValueEmail(event.target.value)}
              type="email"
              className={styles.form__input}
            />
          </div>
          <input
            type="submit"
            value={'Заказать бесплатную консультацию'}
            className={styles.form__submit}
          />
          <label className={styles.form__label}>
            {translationObj?.array?.policy?.text}{' '}
            <Link to="/policy" className={styles.form__policy}>
              {translationObj?.array?.policy?.privacy}
            </Link>
          </label>
        </form>
      </div>
    </section>
  );
};

export default Form;
