import React, { useState, useEffect } from "react";
import styles from "../../styles/Footer.module.css";
import { FaArrowUp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = ["Home", "Blogs", "Films", "Testimonials", "Contact"];
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <h3 className={styles.footerHeading}>Quick Links</h3>
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              to={`/${link.toLowerCase()}`}
              className={styles.navLink}
            >
              {link}
            </Link>
          ))}
        </div>

        <div className={styles.footerCenter}>
          <Link to="/">
            <img
              src="/LogoImg.png"
              alt="Korakagaz Logo"
              className={styles.logo}
            />
          </Link>
          <div className={styles.animatedText}>
            {"KORAKAGAZ MEDIA".split("").map((letter, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {letter}
              </span>
            ))}
          </div>
          <div className={styles.socialLinks}>
            <a 
              href="https://www.instagram.com/korakagazmedia"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className={styles.footerRight}>
          <h3 className={styles.footerHeading}>Contact Info</h3>
          <div className={styles.contactInfo}>
            <a href="https://korakagazmedia.com" className={styles.contactLink}>
              <FaGlobe className={styles.contactIcon} />
              <span>www.korakagazmedia.com</span>
            </a>
            <a href="tel:+918799317340" className={styles.contactLink}>
              <FaPhone className={styles.contactIcon} />
              <span>+91 8799317340, 8655440521</span>
            </a>
            <a href="https://maps.google.com/?q=Jodhpur,Rajasthan" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>Jodhpur, Rajasthan</span>
            </a>
            <a href="mailto:connect@korakagazmedia.com" className={styles.contactLink}>
              <FaEnvelope className={styles.contactIcon} />
              <span>connect@korakagazmedia.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Korakagaz Media. All rights reserved.</p>
      </div>

      {showButton && (
        <button
          className={styles.backToTop}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp className={styles.arrowIcon} />
          <span>Back to Top</span>
        </button>
      )}
    </footer>
  );
};

export default Footer;
