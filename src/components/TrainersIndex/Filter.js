import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ trainerNameFilter, setTrainerNameFilter }) => {
  const handleClick = () => {
    window.alert('CLICKED!');
  };

  return (
    <button className={styles.filter} type="button" onClick={handleClick}>
      FILTER ICON
    </button>
  );
};

Filter.propTypes = {
  trainerNameFilter: PropTypes.string.isRequired,
  setTrainerNameFilter: PropTypes.func.isRequired,
};

export default Filter;
