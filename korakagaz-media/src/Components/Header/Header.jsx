import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { FaInstagram } from 'react-icons/fa6';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo />
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <NavLink to="/home" className={styles.link} onClick={() => setIsMenuOpen(false)}>H O M E</NavLink>
        <NavLink to="/blogs" className={styles.link} onClick={() => setIsMenuOpen(false)}>BLOGS</NavLink>
        <NavLink to="/films" className={styles.link} onClick={() => setIsMenuOpen(false)}>FILMS</NavLink>
        <NavLink to="/testimonials" className={styles.link} onClick={() => setIsMenuOpen(false)}>TESTIMONIALS</NavLink>
        <NavLink to="/contact" className={styles.link} onClick={() => setIsMenuOpen(false)}>ENQUIRY</NavLink>

        {/* Instagram Icon inside navbar */}
        <ul>
          <li className={styles.navItem}>
            <a 
              href="https://www.instagram.com/korakagazmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramIcon}
            >
              <FaInstagram />
            </a>
          </li>
        </ul>       
      </nav>
      </div>
    </header>
  );
};

export default Header;
