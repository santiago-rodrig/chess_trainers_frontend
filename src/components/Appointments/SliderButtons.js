import React from 'react';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs/build/alertify';
import 'alertifyjs/build/css/alertify.css';
import styles from './SliderButtons.module.css';
import './SliderButtonsAnimations.css';

const SliderButtons = ({
  startFetching,
  updateGroup,
  group,
  isLastGroup,
  setIsLastGroup,
}) => {
  const handleClick = (element, direction) => {
    if (element.classList.contains('sliderAnimated')) return;
    window.scrollTo(0, 0);
    element.classList.add('sliderAnimated');
    window.setTimeout(element => element.classList.remove('sliderAnimated'), 500, element);

    if (direction === 'right') {
      if (isLastGroup) {
        alertify.warning('This is the last page');
      } else {
        updateGroup(group + 1);
        startFetching();
      }
    } else if (group === 0) {
      alertify.warning('This is the first page');
    } else {
      if (isLastGroup) setIsLastGroup(false);
      updateGroup(group - 1);
      startFetching();
    }
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
  group: PropTypes.number.isRequired,
  isLastGroup: PropTypes.bool.isRequired,
  setIsLastGroup: PropTypes.func.isRequired,
};

export default SliderButtons;
