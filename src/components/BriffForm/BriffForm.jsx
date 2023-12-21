import React, { useState } from 'react';
import styles from './BriffForm.module.scss';
import { Link } from 'react-router-dom';

const BriffForm = ({ translationObj }) => {
  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePhone, setValuePhone] = useState('');
  const [valideError, setValideError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (valueName && valueEmail && valuePhone) {
      setValideError(false);
    } else {
      setValideError(true);
    }
  };

  return (
    <section className={styles.briff}>
      <form className={styles.briff__container}>
        {translationObj.array?.map((obj) => (
          <div className={styles.briff__inner} key={obj.title}>
            <label htmlFor={obj.id} className={styles.briff__label}>
              {obj.title}
            </label>

            {obj.checkbox ? (
              <div className={styles.briff__wrapper}>
                {obj.array.map((obj) => (
                  <div className={styles.briff__wrapper_checkbox} key={obj.title}>
                    <input
                      id={obj.id}
                      value={obj.id}
                      type="checkbox"
                      className={styles.briff__input_checkbox}
                    />
                    <label htmlFor={obj.id} className={styles.briff__label_checkbox}>
                      {obj.title}
                    </label>
                  </div>
                ))}
              </div>
            ) : (
              <input
                onChange={(event) =>
                  obj.id === 'name'
                    ? setValueName(event.target.value)
                    : obj.id === 'email'
                    ? setValueEmail(event.target.value)
                    : obj.id === 'phone'
                    ? setValuePhone(event.target.value)
                    : ''
                }
                value={
                  obj.id === 'name'
                    ? valueName
                    : obj.id === 'email'
                    ? valueEmail
                    : obj.id === 'phone'
                    ? valuePhone
                    : undefined
                }
                id={obj.id}
                type={obj.type}
                placeholder={obj.placeholder}
                className={`${styles.briff__input} ${
                  (obj.id === 'name' || obj.id === 'email' || obj.id === 'phone') && valideError
                    ? styles.briff__input_invalide
                    : ''
                }`}
              />
            )}

            {(obj.id === 'name' || obj.id === 'email' || obj.id === 'phone') && valideError && (
              <label htmlFor="name" className={styles.briff__label_invalide}>
                {translationObj.errorValideSubtitle}
              </label>
            )}
          </div>
        ))}
        {valideError && (
          <label className={styles.briff__invalide}>{translationObj.errorValide}</label>
        )}
        <input
          onClick={(event) => handleSubmit(event)}
          type="submit"
          value={translationObj.button}
          className={styles.briff__submit}
        />
        <p className={styles.briff__policy}>
          {translationObj.policy?.text} <Link to="/policy">{translationObj.policy?.link}</Link>
        </p>
      </form>
    </section>
  );
};

export default BriffForm;
