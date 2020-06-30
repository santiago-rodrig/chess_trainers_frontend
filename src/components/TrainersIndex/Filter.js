import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import FilterModal from './FilterModal';

const Filter = ({ trainerNameFilter, setTrainerNameFilter }) => {
  const [displaying, setDisplaying] = useState(false);

  const handleClick = () => {
    setDisplaying(true);
  };

  return (
    <>
      <button className={styles.filter} type="button" onClick={handleClick}>
        <i className="fas fa-filter" />
      </button>
      {displaying ? <FilterModal setDisplaying={setDisplaying} /> : ''}
    </>
  );
};

Filter.propTypes = {
  trainerNameFilter: PropTypes.string.isRequired,
  setTrainerNameFilter: PropTypes.func.isRequired,
};

export default Filter;
