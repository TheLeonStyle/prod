import React from 'react';
import styles from './Cooperation.module.scss';

const Cooperation = () => {
  return (
    <section className={styles.cooperation}>
      <div className={styles.cooperation__container}>
        <div className={styles.cooperation__wrapper}>
          <div className={styles.cooperation__inner}>
            <h2 className={styles.cooperation__title}>Сотрудничество</h2>
            <p className={styles.cooperation__subtitle}>
              Команда АМР видит смысл своей деятельности шире, чем просто бизнес. Поэтому, если вы
              развиваете социальные проекты и хотите сотрудничать с нами, просто отправьте ваш
              запрос нам на почту
            </p>
          </div>
          <div className={styles.cooperation__inner}>
            <p className={styles.cooperation__suptitle}>
              Мы готовы сотрудничать с НКО, благотворительными и социальными организациями.
            </p>
            <a href="mailto:manager@am-prod.media" className={styles.cooperation__email}>
              manager@am-prod.media
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cooperation;
