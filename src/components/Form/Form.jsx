import React, { useState } from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import Title from '../Title/Title';
import styles from './Form.module.scss';
import bg from '../../assets/img/form/bg.jpg';

const Form = () => {
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
          <Title title={'Узнайте стоимость проекта'} />
          <p className={styles.form__subtitle}>
            Напишите нам о вашем проекте, и мы свяжемся с вами в ближайшее время, чтобы обсудить
            детали
          </p>
        </div>
        <form className={styles.form__form}>
          <select name="services" className={`${styles.form__input} ${styles.form__select}`}>
            <option
              selected
              disabled
              value="Выберите интересующую услугу"
              className={styles.form__option}>
              Выберите интересующую услугу
            </option>
            <option value="Music and dance" className={styles.form__option}>
              Music and dance
            </option>
            <option value="Photo and video" className={styles.form__option}>
              Photo and video
            </option>
            <option value="Events" className={styles.form__option}>
              Events
            </option>
            <option value="Branding / Marketing" className={styles.form__option}>
              Branding / Marketing
            </option>
            <option value="Другое" className={styles.form__option}>
              Другое
            </option>
          </select>
          <div className={styles.form__inner}>
            <label
              className={`${styles.form__placeholder} ${
                placeholderIndex === 0 || valueName ? styles.active : ''
              }`}>
              Имя
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
          {/* <input type="number" className={styles.form__input} /> */}
          <PhoneInput
            country={'ru'}
            className={`${styles.form__input} ${styles.form__input_phone}`}
          />
          <div className={styles.form__inner}>
            <label
              className={`${styles.form__placeholder} ${
                placeholderIndex === 1 || valueEmail ? styles.active : ''
              }`}>
              Е-mail или ссылка на соц.сеть
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
            Оставляя заявку вы принимаете правила{' '}
            <a href="" className={styles.form__policy}>
              политики конфиденциальности
            </a>
          </label>
        </form>
      </div>
    </section>
  );
};

export default Form;
