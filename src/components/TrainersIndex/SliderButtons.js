import React from 'react';
import styles from './SliderButtons.module.css';
import './SliderButtonsAnimations.css';
import indicatorStyles from './Indicators.module.css';

const SliderButtons = () => {
  const changeIndicator = direction => {
    const indicators = window.document.getElementsByClassName(indicatorStyles.indicator);
    let activeIndicatorIndex = null;
    for (let i = 0; i < indicators.length; i += 1) {
      if (indicators[i].classList.contains(indicatorStyles.indicatorActive)) {
        activeIndicatorIndex = i;
        indicators[i].classList.remove(indicatorStyles.indicatorActive);
        break;
      }
    }
    switch (direction) {
      case 'left':
        indicators[(activeIndicatorIndex + 2) % 3].classList.add(indicatorStyles.indicatorActive);
        break;
      default:
        indicators[(activeIndicatorIndex + 1) % 3].classList.add(indicatorStyles.indicatorActive);
        break;
    }
  };

  const handleClick = (element, direction) => {
    if (element.classList.contains('sliderAnimated')) return;
    changeIndicator(direction);
    element.classList.add('sliderAnimated');
    window.setTimeout(element => element.classList.remove('sliderAnimated'), 500, element);
  };

  return (
    <>
      <button
        type="button"
        className={styles.leftArrow}
        onClick={e => handleClick(e.target, 'left')}
      >
        <i className="fas fa-caret-left" />
      </button>
      <button
        type="button"
        className={styles.rightArrow}
        onClick={e => handleClick(e.target, 'right')}
      >
        <i className="fas fa-caret-right" />
      </button>
    </>
  );
};

export default SliderButtons;
