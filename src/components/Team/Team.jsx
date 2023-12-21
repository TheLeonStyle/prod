import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import ArrowPrev from '../../assets/img/team/arrow_prev.svg';
import ArrowNext from '../../assets/img/team/arrow_next.svg';

import Image1 from '../../assets/img/team/1.png';
import Image2 from '../../assets/img/team/2.jpg';
import Image3 from '../../assets/img/team/3.jpg';
import Image4 from '../../assets/img/team/4.jpg';
import Image5 from '../../assets/img/team/5.jpg';
import Image6 from '../../assets/img/team/6.jpg';
import Image7 from '../../assets/img/team/7.png';
import Image8 from '../../assets/img/team/8.jpg';
import Image9 from '../../assets/img/team/9.png';
import Image10 from '../../assets/img/team/10.jpeg';
import Image11 from '../../assets/img/team/11.png';
import Image12 from '../../assets/img/team/12.jpg';
import Image13 from '../../assets/img/team/13.jpg';
import Image14 from '../../assets/img/team/14.jpg';
import Image15 from '../../assets/img/team/15.jpeg';
import Image16 from '../../assets/img/team/16.jpg';
import Image17 from '../../assets/img/team/17.png';
import Image18 from '../../assets/img/team/18.png';
import Image19 from '../../assets/img/team/19.jpg';

import Title from '../Title/Title';
import styles from './Team.module.scss';

const images = {
  image1: Image1,
  image2: Image2,
  image3: Image3,
  image4: Image4,
  image5: Image5,
  image6: Image6,
  image7: Image7,
  image8: Image8,
  image9: Image9,
  image10: Image10,
  image11: Image11,
  image12: Image12,
  image13: Image13,
  image14: Image14,
  image15: Image15,
  image16: Image16,
  image17: Image17,
  image18: Image18,
  image19: Image19,
};

const Team = ({ translationObj }) => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <section id="team" className={styles.team}>
      <div className={styles.team__container}>
        <Title title={translationObj.title} />

        <div className={styles.team__wrapper}>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              1160: {
                slidesPerView: 4,
              },
              900: {
                slidesPerView: 3,
              },
              620: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}>
            {translationObj?.array?.map((obj) => (
              <SwiperSlide key={obj.name}>
                <div className={styles.team__item}>
                  <div className={styles.team__image}>
                    <img src={images[`image${obj.image}`]} alt="Фотография участника команды" />
                  </div>
                  <div className={styles.team__content}>
                    <h6 className={styles.team__title}>{obj.name}</h6>
                    <strong className={styles.team__role}>{obj.role}</strong>
                    <p className={styles.team__subtitle}>{obj.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className={styles.team__prev} ref={prevRef}>
            <img src={ArrowPrev} alt="Иконка стрелки" />
          </button>
          <button className={styles.team__next} ref={nextRef}>
            <img src={ArrowNext} alt="Иконка стрелки" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
