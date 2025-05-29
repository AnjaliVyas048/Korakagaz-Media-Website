import React from 'react';
import styles from '../../styles/Films.module.css';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const films = [
  { img: '/HomepagePhotos/home11.jpg', link: 'https://www.youtube.com/watch?v=video1', couple: 'Riya and Arjun' },
  { img: '/HomepagePhotos/home12.jpg', link: 'https://www.youtube.com/watch?v=video2', couple: 'Megha and Aman' },
  { img: '/HomepagePhotos/home13.jpg', link: 'https://www.youtube.com/watch?v=video3', couple: 'Simran and Raj' },
  { img: '/HomepagePhotos/home14.jpg', link: 'https://www.youtube.com/watch?v=video4', couple: 'Pooja and Nikhil' },
  { img: '/HomepagePhotos/couple1.jpg', link: 'https://www.youtube.com/watch?v=video5', couple: 'Sneha and Kunal' },
  { img: '/HomepagePhotos/couple2.jpg', link: 'https://www.youtube.com/watch?v=video6', couple: 'Anjali and Rohan' },
];

const FilmsPage = () => {
  return (
    <>
      <section className={styles.filmsIntro}>
        <h2 className={styles.filmsHeading}>Artful Wedding Films</h2>
        <p className={styles.filmsDescription}>
          We don’t just document your wedding—we craft an emotional narrative that will transport you back to your most cherished moments. Our films are cinematic, heartfelt, and uniquely yours.
        </p>
      </section>

      <section className={styles.filmsGrid}>
        {films.map((film, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={styles.filmCard}
              initial={{ x: isEven ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <a href={film.link} target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
                <span className={styles.coupleName}>{film.couple}</span>
                <img src={film.img} alt={`Film - ${film.couple}`} />
                <div className={styles.playButton}>
                  <FaPlay size={14} />
                </div>
              </a>
            </motion.div>
          );
        })}
      </section>
      <Footer />
    </>
  );
};

export default FilmsPage;
