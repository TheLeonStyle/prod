import React from 'react';
import styles from './Video.module.scss';

const Video = () => {
  return (
    <section className={styles.video}>
      <div className={styles.video__container}>
        <iframe
          className={styles.video__iframe}
          src="https://www.youtube.com/embed/tRJTZ6RDElY?rel=0"
          title="Promo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
    </section>
  );
};

export default Video;
