import React from 'react';
import Logo from '../../assets/img/logo.svg';
import Youtube from '../../assets/img/footer/youtube.png';
import Telegram from '../../assets/img/footer/telegram.png';
import Whatsapp from '../../assets/img/footer/whatsapp.png';

import styles from './Footer.module.scss';

const Footer = ({ translationObj }) => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          <div className={styles.footer__logo}>
            <img src={Logo} alt="Логотип" />
          </div>
          <div className={styles.footer__socials}>
            <a
              href="https://www.youtube.com/channel/UCjJsmrmgpODZFaQHAEIs3sw/featured"
              className={styles.footer__social}>
              <img src={Youtube} alt="Социальная иконка" />
            </a>
            <a href="https://t.me/amprodmedia" className={styles.footer__social}>
              <img src={Telegram} alt="Социальная иконка" />
            </a>
            <a href="https://wa.me/message/ILNXYKAS2ZBQJ1" className={styles.footer__social}>
              <img src={Whatsapp} alt="Социальная иконка" />
            </a>
          </div>
        </div>
        <div className={styles.footer__contacts}>
          <div className={styles.footer__contact}>
            <h6 className={styles.footer__title}>{translationObj.item}</h6>
            <a href="mailto:manager@am-prod.media" className={styles.footer__link}>
              manager@am-prod.media
            </a>
            <a href="tel:89207001155" className={styles.footer__link}>
              +7 920 700-11-55
            </a>
          </div>
          <div className={styles.footer__contact}>
            <h6 className={styles.footer__title}>{translationObj.item2?.name}</h6>
            <h6 className={styles.footer__title}>{translationObj.item2?.role}</h6>
            <a href="mailto:manager@am-prod.media" className={styles.footer__link}>
              manager@am-prod.media
            </a>
          </div>
          <div className={styles.footer__contact}>
            <h6 className={styles.footer__title}>{translationObj.item3?.name}</h6>
            <h6 className={styles.footer__title}>{translationObj.item3?.role}</h6>
            <a href="mailto:manager@am-prod.media" className={styles.footer__link}>
              manager@am-prod.media
            </a>
          </div>
          <div className={styles.footer__contact}>
            <h6 className={styles.footer__title}>{translationObj.item4?.name}</h6>
            <h6 className={styles.footer__title}>{translationObj.item4?.role}</h6>
            <a href="mailto:manager@am-prod.media" className={styles.footer__link}>
              manager@am-prod.media
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footer__container_big}>
        <div className={styles.footer__bottom}>
          <div className={styles.footer__copy}>
            <p>© 2020 am-prod.media</p>
            <p>project by Arkadi Media Production</p>
          </div>
          <p className={styles.footer__owner}>Owned by a Georgian company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
