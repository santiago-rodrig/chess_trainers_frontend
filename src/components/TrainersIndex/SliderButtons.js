import React from 'react';
import PropTypes from 'prop-types';
import styles from './SliderButtons.module.css';
import './SliderButtonsAnimations.css';
import indicatorStyles from './Indicators.module.css';

const SliderButtons = ({
  startFetching,
  updateGroup,
  setCurrentTrainer,
  group,
  isLastGroup,
  trainersCount,
}) => {
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
        if (activeIndicatorIndex === 0 && group > 0) {
          indicators[0].classList.add(indicatorStyles.indicatorActive);
          updateGroup(group - 1);
          startFetching();
        } else if (activeIndicatorIndex > 0) {
          indicators[activeIndicatorIndex - 1].classList.add(indicatorStyles.indicatorActive);
          setCurrentTrainer(activeIndicatorIndex - 1);
        }
        break;
      default:
        if (activeIndicatorIndex === 2 && !isLastGroup) {
          indicators[0].classList.add(indicatorStyles.indicatorActive);
          updateGroup(group + 1);
          startFetching();
        } else if (activeIndicatorIndex < 2 && trainersCount > (activeIndicatorIndex + 1)) {
          indicators[activeIndicatorIndex + 1].classList.add(indicatorStyles.indicatorActive);
          setCurrentTrainer(activeIndicatorIndex + 1);
        }
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

SliderButtons.propTypes = {
  startFetching: PropTypes.func.isRequired,
  updateGroup: PropTypes.func.isRequired,
  setCurrentTrainer: PropTypes.func.isRequired,
  group: PropTypes.number.isRequired,
  isLastGroup: PropTypes.bool.isRequired,
  trainersCount: PropTypes.number.isRequired,
};

export default SliderButtons;
