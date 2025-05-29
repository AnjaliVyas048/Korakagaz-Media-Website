import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/LandingPage.module.css';

const LandingPage = () => {
  const navigate = useNavigate();

  // You can replace these file names with your selected image names
  const imageNames = [
    'Bride1.jpg',
    'Bride2Wedd.jpg',
    'Bride3Wedd.jpg',
    'GroomBride4.jpg',
    'GroomBride5.jpg',
    'GroomBride6.jpg',
    'GroomBride7Wedd.jpg',
    'GroomBride8Wedd.jpg',
    'GroomBride9Wedd.jpg',
    'GroomBride10Wedd.jpg',
    'GroomBride11Wedd.jpg',
    'GroomBride12Wedd.jpg',
  ];

  return (
    <div className={styles.landingContainer}>
      <div className={styles.photoGrid}>
        {imageNames.map((name, i) => (
          <div
            key={i}
            className={`${styles.gridItem} ${styles[`fade${(i % 3) + 1}`]}`}
            style={{
              backgroundImage: `url(/LandingPagePhotos/${name})`,
            }}
          />
        ))}
      </div>

      <div className={styles.overlayContent}>
        <h1 className={styles.heading}>Welcome to Korakagaz Media</h1>
        <button
          className={styles.enterButton}
          onClick={() => navigate('/home')}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

