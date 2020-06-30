import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import FilterModal from './FilterModal';

const Filter = ({
  intermediateTrainerFilter,
  setIntermediateTrainerFilter,
  trainerNameFilter,
  expertTrainerFilter,
  setTrainerNameFilter,
  setExpertTrainerFilter,
  resetCallback,
}) => {
  const [displaying, setDisplaying] = useState(false);

  const handleClick = () => {
    setDisplaying(true);
  };

  return (
    <>
      <button className={styles.filter} type="button" onClick={handleClick}>
        <i className="fas fa-filter" />
      </button>
      {
        displaying
          ? <FilterModal
              intermediateTrainerFilter={intermediateTrainerFilter}
              setIntermediateTrainerFilter={setIntermediateTrainerFilter}
              setDisplaying={setDisplaying}
              trainerNameFilter={trainerNameFilter}
              expertTrainerFilter={expertTrainerFilter}
              setTrainerNameFilter={setTrainerNameFilter}
              setExpertTrainerFilter={setExpertTrainerFilter}
              resetCallback={resetCallback}
            />
          : ''
      }
    </>
  );
};

Filter.propTypes = {
  intermediateTrainerFilter: PropTypes.bool.isRequired,
  setIntermediateTrainerFilter: PropTypes.func.isRequired,
  trainerNameFilter: PropTypes.string.isRequired,
  expertTrainerFilter: PropTypes.bool.isRequired,
  setTrainerNameFilter: PropTypes.func.isRequired,
  setExpertTrainerFilter: PropTypes.func.isRequired,
};

export default Filter;

