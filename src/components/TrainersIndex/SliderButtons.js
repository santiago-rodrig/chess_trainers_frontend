import React from 'react';
import styles from './SliderButtons.module.css';
import './SliderButtonsAnimations.css';

const SliderButtons = () => {
  const handleClick = element => {
    if (element.classList.contains('sliderAnimated')) return;
    element.classList.add('sliderAnimated');
    window.setTimeout(element => element.classList.remove('sliderAnimated'), 1000, element);
  };

  return (
    <>
      <button
        type="button"
        className={styles.leftArrow}
        onClick={e => handleClick(e.target)}
      >
        <i className="fas fa-caret-left" />
      </button>
      <button
        type="button"
        className={styles.rightArrow}
        onClick={e => handleClick(e.target)}
      >
        <i className="fas fa-caret-right" />
      </button>
    </>
  );
};

export default SliderButtons;
