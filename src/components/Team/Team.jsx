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

import Title from '../Title/Title';
import styles from './Team.module.scss';

const Team = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <section className={styles.team}>
      <div className={styles.team__container}>
        <Title title={'Команда'} />

        <div className={styles.team__wrapper}>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
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
              600: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}>
            <SwiperSlide>
              <div className={styles.team__item}>
                <div className={styles.team__image}>
                  <img src={Image1} alt="Фотография участника команды" />
                </div>
                <div className={styles.team__content}>
                  <h6 className={styles.team__title}>Юлия Чорна</h6>
                  <strong className={styles.team__role}>Event-продюсер</strong>
                  <p className={styles.team__subtitle}>
                    Эксперт в организации мероприятий. Выпускница Event Education PRO. С 2021 года
                    принимает участие в организации форумов, конференций, конгрессов, стратегических
                    сессий, семинаров, мастер-классов, бизнес-клубов, свадеб, иммерсивных шоу, дней
                    рождений. Имеет большую актёрскую базу. Организовала более 50 мероприятий, среди
                    которых «Фарма-Бал 2022», «Премия лидеров онлайн-образования», «Медицинская
                    конференция» и другие.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.team__item}>
                <div className={styles.team__image}>
                  <img src={Image1} alt="Фотография участника команды" />
                </div>
                <div className={styles.team__content}>
                  <h6 className={styles.team__title}>Юлия Чорна</h6>
                  <strong className={styles.team__role}>Event-продюсер</strong>
                  <p className={styles.team__subtitle}>
                    Эксперт в организации мероприятий. Выпускница Event Education PRO. С 2021 года
                    принимает участие в организации форумов, конференций, конгрессов, стратегических
                    сессий, семинаров, мастер-классов, бизнес-клубов, свадеб, иммерсивных шоу, дней
                    рождений. Имеет большую актёрскую базу. Организовала более 50 мероприятий, среди
                    которых «Фарма-Бал 2022», «Премия лидеров онлайн-образования», «Медицинская
                    конференция» и другие.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.team__item}>
                <div className={styles.team__image}>
                  <img src={Image1} alt="Фотография участника команды" />
                </div>
                <div className={styles.team__content}>
                  <h6 className={styles.team__title}>Юлия Чорна</h6>
                  <strong className={styles.team__role}>Event-продюсер</strong>
                  <p className={styles.team__subtitle}>
                    Эксперт в организации мероприятий. Выпускница Event Education PRO. С 2021 года
                    принимает участие в организации форумов, конференций, конгрессов, стратегических
                    сессий, семинаров, мастер-классов, бизнес-клубов, свадеб, иммерсивных шоу, дней
                    рождений. Имеет большую актёрскую базу. Организовала более 50 мероприятий, среди
                    которых «Фарма-Бал 2022», «Премия лидеров онлайн-образования», «Медицинская
                    конференция» и другие.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.team__item}>
                <div className={styles.team__image}>
                  <img src={Image1} alt="Фотография участника команды" />
                </div>
                <div className={styles.team__content}>
                  <h6 className={styles.team__title}>Юлия Чорна</h6>
                  <strong className={styles.team__role}>Event-продюсер</strong>
                  <p className={styles.team__subtitle}>
                    Эксперт в организации мероприятий. Выпускница Event Education PRO. С 2021 года
                    принимает участие в организации форумов, конференций, конгрессов, стратегических
                    сессий, семинаров, мастер-классов, бизнес-клубов, свадеб, иммерсивных шоу, дней
                    рождений. Имеет большую актёрскую базу. Организовала более 50 мероприятий, среди
                    которых «Фарма-Бал 2022», «Премия лидеров онлайн-образования», «Медицинская
                    конференция» и другие.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.team__item}>
                <div className={styles.team__image}>
                  <img src={Image1} alt="Фотография участника команды" />
                </div>
                <div className={styles.team__content}>
                  <h6 className={styles.team__title}>Юлия Чорна</h6>
                  <strong className={styles.team__role}>Event-продюсер</strong>
                  <p className={styles.team__subtitle}>
                    Эксперт в организации мероприятий. Выпускница Event Education PRO. С 2021 года
                    принимает участие в организации форумов, конференций, конгрессов, стратегических
                    сессий, семинаров, мастер-классов, бизнес-клубов, свадеб, иммерсивных шоу, дней
                    рождений. Имеет большую актёрскую базу. Организовала более 50 мероприятий, среди
                    которых «Фарма-Бал 2022», «Премия лидеров онлайн-образования», «Медицинская
                    конференция» и другие.
                  </p>
                </div>
              </div>
            </SwiperSlide>
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
