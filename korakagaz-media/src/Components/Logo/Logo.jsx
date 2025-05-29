import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Logo.module.css';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.logoContainer} onClick={() => navigate('/')}>
      <img src="/LogoImg.png" alt="Logo" className={styles.logo} />
    </div>
  );
};

export default Logo;
