import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import styles from "../../styles/HomePage.module.css";

// Slideshow Photos
const photos = [
  "/LandingPagePhotos/GroomBride7Wedd.jpg",
  "/HomepagePhotos/home13.jpg",
  "/HomepagePhotos/home14.jpg",
  "/HomepagePhotos/home6.jpg",
  "/HomepagePhotos/homep3.jpg",
];

// Signature Work Photo Groups
const signatureImages = [
  "/LandingPagePhotos/GroomBride1.jpg",
  "/LandingPagePhotos/GroomBride2.jpg",
  "/LandingPagePhotos/GroomBride3.jpg",
  "/LandingPagePhotos/GroomBride15phere.jpg",
];
const centerImages = [
  "/LandingPagePhotos/GroomBride4.jpg",
  "/LandingPagePhotos/GroomBride5.jpg",
  "/LandingPagePhotos/GroomBride6.jpg",
  "/LandingPagePhotos/GroomBride10Wedd.jpg",
];
const bottomRightImages = [
  "/LandingPagePhotos/GroomBride7Wedd.jpg",
  "/LandingPagePhotos/GroomBride8Wedd.jpg",
  "/LandingPagePhotos/GroomBride9Wedd.jpg",
  "/LandingPagePhotos/GroomBride14Phere.jpg",
];

const films = [
  {
    img: "/HomepagePhotos/home12.jpg",
    link: "https://www.youtube.com/watch?v=video1",
  },
  {
    img: "/HomepagePhotos/home11.jpg",
    link: "https://www.youtube.com/watch?v=video2",
  },
  {
    img: "/HomepagePhotos/home13.jpg",
    link: "https://www.youtube.com/watch?v=video3",
  },
  {
    img: "/HomepagePhotos/home14.jpg",
    link: "https://www.youtube.com/watch?v=video4",
  },
];

const filmsLoop = [...films, ...films];

const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const [currentLeft, setCurrentLeft] = useState(0);
  const [currentCenter, setCurrentCenter] = useState(0);
  const [currentBottomRight, setCurrentBottomRight] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentLeft((prev) => (prev + 1) % signatureImages.length);
    }, 5000);
    const interval2 = setInterval(() => {
      setCurrentCenter((prev) => (prev + 1) % centerImages.length);
    }, 5000);
    const interval3 = setInterval(() => {
      setCurrentBottomRight((prev) => (prev + 1) % bottomRightImages.length);
    }, 5000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      {/* Homepage Hero Section with Background Slideshow */}
      <section className={styles.heroSection}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={photos[current]}
            alt="Slideshow"
            className={styles.slideshowImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </section>

      {/* Story Section */}
      <motion.section className={styles.storySection}>
        <motion.h2
          className={styles.storyTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          You Feel. I Focus. We Frame.
        </motion.h2>

        <motion.div
          className={styles.storyDivider}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
        />

        <motion.p
          className={styles.storyText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
        >
          Weddings aren’t just ceremonies — they’re delicate stories unfolding
          in real time. A glance, a touch, a quiet tear, the sound of laughter
          echoing in golden light — these are the moments that vanish in an
          instant... unless they’re held, forever.
          <br />
          <br />
          At Korakagaz Media, we don’t just photograph events — we craft soulful
          stories from your most vulnerable, radiant hours. Each frame is a
          piece of poetry, preserving emotions too deep for words and moments
          too precious to repeat.
          <br />
          <br />
          Because in the end, what’s remembered is not just how it looked — but
          how it felt.
        </motion.p>
      </motion.section>

      {/* Signature Work Section */}
      <section className={styles.signatureSection}>
        <motion.h2
          className={styles.signatureHeading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Signature Work
        </motion.h2>
        <p className={styles.portfolioText}>
          A curated gallery of our most evocative frames
        </p>
        <div className={styles.topLeftImageWrapper}>
          <img
            src={signatureImages[currentLeft]}
            alt="Top Left"
            className={styles.topLeftImage}
          />
        </div>
      </section>

      {/* Center Full Image Section */}
      <section className={styles.centerImageSection}>
        <img
          src={centerImages[currentCenter]}
          alt="Center Cover"
          className={styles.centerCoverImage}
        />
      </section>

      {/* Show More Button Section */}
      <section className={styles.showMoreSection}>
        <div className={styles.bottomRightImageWrapper}>
          <img
            src={bottomRightImages[currentBottomRight]}
            alt="Bottom Right"
            className={styles.bottomRightImage}
          />
        </div>
        <button
          className={styles.showMoreButton}
          onClick={() => navigate("/blogs")}
        >
          Browse Portfolio
        </button>
      </section>

      {/* Testimonials Section */}
      <motion.section
        className={styles.testimonialSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className={styles.testimonialText}>
          "From the first glance to the final goodbye, every emotion was
          captured with such soul. Looking back at our wedding album feels like
          stepping into a warm memory. We laughed, we cried — and now we relive
          it every time we see the photos. Truly magical!"
        </p>
        <p className={styles.testimonialName}>— Aarav & Meera</p>

        <button
          className={styles.testimonialButton}
          onClick={() => navigate("/testimonials")}
        >
          See More Testimonials
        </button>
      </motion.section>

      {/* Films Section */}
      <motion.section
        className={styles.filmsSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.filmsHeading}>
          Just like photos, our videos are also artistic.
        </h2>
        <p className={styles.filmsText}>
          We create cinematic, emotional, and timeless wedding films that tell
          your love story beautifully. Every frame is carefully crafted,
          blending artistry with heartfelt moments.
        </p>

        <div
          className={styles.filmsWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`${styles.filmsGallery} ${
              isPaused ? styles.paused : ""
            }`}
          >
            {filmsLoop.map((film, index) => (
              <div key={index} className={styles.filmBox}>
                <img src={film.img} alt={`Film ${index + 1}`} />
                <a
                  href={film.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.watchButton}
                >
                  Watch Film
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Instagram Gallery Section */}
      <motion.section
        className={styles.instagramSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.instagramHeading}>Our Moments on Instagram</h2>
        <div className={styles.instagramGrid}>
          {[
            { img: "/HomepagePhotos/home11.jpg", likes: 320, comments: 28 },
            { img: "/HomepagePhotos/home13.jpg", likes: 410, comments: 34 },
            { img: "/HomepagePhotos/home14.jpg", likes: 278, comments: 19 },
            { img: "/HomepagePhotos/home11.jpg", likes: 362, comments: 22 }, // Repeated image
          ].map((photo, index) => (
            <div key={index} className={styles.instagramPhoto}>
              <img src={photo.img} alt={`Instagram ${index + 1}`} />
              <div className={styles.overlay}>
                <p>
                  ❤️ {photo.likes} 💬 {photo.comments}
                </p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://www.instagram.com/korakagazmedia"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagramButton}
        >
          Browse Our Instagram
        </a>
      </motion.section>
      
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default HomePage;
