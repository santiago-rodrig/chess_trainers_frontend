import React from 'react';
import styles from './Indicators.module.css';

const Indicators = () => (
  <div className={styles.indicatorsContainer}>
    <div className={`${styles.indicator} ${styles.indicatorActive}`} />
    <div className={styles.indicator} />
    <div className={styles.indicator} />
  </div>
);

export default Indicators;
