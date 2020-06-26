import React from 'react';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs/build/alertify';
import 'alertifyjs/build/css/alertify.css';
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
  toggleIsLastGroup,
}) => {
  const changeIndicator = direction => {
    const indicators = window.document.getElementsByClassName(indicatorStyles.indicator);
    let activeIndicatorIndex = null;

    for (let i = 0; i < indicators.length; i += 1) {
      if (indicators[i].classList.contains(indicatorStyles.indicatorActive)) {
        activeIndicatorIndex = i;
        break;
      }
    }

    const clearActiveIndicator = () => {
      indicators[activeIndicatorIndex].classList.remove(indicatorStyles.indicatorActive);
    };

    switch (direction) {
      case 'left':
        if (activeIndicatorIndex === 0) {
          if (group > 0) {
            if (isLastGroup) toggleIsLastGroup();
            clearActiveIndicator();
            indicators[0].classList.add(indicatorStyles.indicatorActive);
            updateGroup(group - 1);
            startFetching();
          } else {
            alertify.warning('This is the first trainer');
          }
        } else if (activeIndicatorIndex > 0) {
          clearActiveIndicator();
          indicators[activeIndicatorIndex - 1].classList.add(indicatorStyles.indicatorActive);
          setCurrentTrainer(activeIndicatorIndex - 1);
        }
        break;
      default:
        if (activeIndicatorIndex === 2) {
          if (!isLastGroup) {
            clearActiveIndicator();
            indicators[0].classList.add(indicatorStyles.indicatorActive);
            updateGroup(group + 1);
            startFetching();
          } else {
            alertify.warning('No more trainers');
          }
        } else if (activeIndicatorIndex < 2) {
          if (trainersCount > (activeIndicatorIndex + 1)) {
            clearActiveIndicator();
            indicators[activeIndicatorIndex + 1].classList.add(indicatorStyles.indicatorActive);
            setCurrentTrainer(activeIndicatorIndex + 1);
          } else {
            alertify.warning('No more trainers');
          }
        }
        break;
    }
  };

  const handleClick = (element, direction) => {
    if (element.classList.contains('sliderAnimated')) return;
    window.scrollTo(0, 0);
    changeIndicator(direction);
    element.classList.add('sliderAnimated');
    window.setTimeout(element => element.classList.remove('sliderAnimated'), 500, element);
    const item = window.document.getElementsByClassName('trainerItem')[0];
    item.classList.toggle('trainerItem');
    item.classList.toggle('fadingItem');
    window.setTimeout(() => {
      item.classList.toggle('trainerItem');
      item.classList.toggle('fadingItem');
    }, 250);
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
  toggleIsLastGroup: PropTypes.func.isRequired,
};

export default SliderButtons;
