import React from 'react';
import styles from '../../styles/Testimonials.module.css';
import Footer from '../../Components/Footer/Footer';

const Testimonials = () => {
  return (
    <div className={styles.testimonialsPage}>
      {/* Section 1 - Cover Image with testimonial on top */}
      <section className={styles.coverSection}>
        <img src="/LandingPagePhotos/GroomBride7Wedd.jpg" alt="Happy Couple" className={styles.coverImage} />
        <div className={styles.coverText}>
          <p>
            "From the moment we met the team, we knew our memories were in safe hands.
            They captured every emotion, every smile, and every tear so beautifully.
            Watching our wedding film still brings tears of joy to our eyes."
          </p>
          <h3 className={styles.coupleName}>Rhea & Aman</h3>
        </div>
      </section>

      {/* Section 2 - Text Right, Image Left */}
      <section className={styles.sideBySideSection}>
        <div className={styles.leftImage}>
          <img src="/LandingPagePhotos/GroomBride4.jpg" alt="Couple" />
        </div>
        <div className={styles.rightText}>
          <p>
            "Korakagaz Media turned our love into a timeless film. Every detail, every glance,
            was woven with such care. Their dedication and creativity exceeded all expectations."
          </p>
          <h3 className={styles.coupleName}>Meera & Raj</h3>
        </div>
      </section>

      {/* Section 3 - Cover Image with text over image */}
      <section className={styles.coverSection}>
        <img src="/HomepagePhotos/home12.jpg" alt="Wedding Moment" className={styles.coverImage} />
        <div className={styles.overlayText}>
          <p>
            "The entire experience with Korakagaz Media felt like reliving our wedding. The edits,
            the emotions, and the raw beauty of the moments—they preserved our story so elegantly."
          </p>
          <h3 className={styles.coupleName}>Isha & Aditya</h3>
        </div>
      </section>

      {/* Section 4 - Text Left, Image Right */}
      <section className={styles.sideBySideSectionAlt}>
        <div className={styles.leftText}>
          <p>
            "Working with the Korakagaz team was a dream. Their understanding of aesthetics and
            storytelling is unmatched. We now have something truly timeless to look back on."
          </p>
          <h3 className={styles.coupleName}>Sanya & Ved</h3>
        </div>
        <div className={styles.rightImage}>
          <img src="/LandingPagePhotos/GroomBride15phere.jpg" alt="Couple" />

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
