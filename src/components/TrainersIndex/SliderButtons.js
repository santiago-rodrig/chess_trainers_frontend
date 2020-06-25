import React from 'react';
import styles from './SliderButtons.module.css';

const SliderButtons = () => (
  <>
    <div className={styles.leftArrow}>
      <i className="fas fa-caret-left" />
    </div>
    <div className={styles.rightArrow}>
      <i className="fas fa-caret-right" />
    </div>
  </>
);

export default SliderButtons;
