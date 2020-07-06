import React, { fragment, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FilterModal.module.css';
import SearchForm from './SearchForm';

const FilterModal = ({
  amateurTrainerFilter,
  setAmateurTrainerFilter,
  intermediateTrainerFilter,
  setIntermediateTrainerFilter,
  trainerNameFilter,
  expertTrainerFilter,
  setDisplaying,
  setTrainerNameFilter,
  setExpertTrainerFilter,
  resetCallback,
}) => {
  const [previousTrainerNameFilter, setPreviousTrainerNameFilter] = useState(trainerNameFilter);
  const [previousExpertTrainerFilter, setPreviousExpertTrainerFilter] = useState(expertTrainerFilter);
  const [previousIntermediateTrainerFilter, setPreviousIntermediateTrainerFilter] = useState(intermediateTrainerFilter);
  const [previousAmateurTrainerFilter, setPreviousAmateurTrainerFilter] = useState(amateurTrainerFilter);

  const resetFilters = () => {
    setTrainerNameFilter(previousTrainerNameFilter);
    setExpertTrainerFilter(previousExpertTrainerFilter);
    setIntermediateTrainerFilter(previousIntermediateTrainerFilter);
    setAmateurTrainerFilter(previousAmateurTrainerFilter);
  };

  const equalizeFilters = () => {
    setPreviousTrainerNameFilter(trainerNameFilter);
    setPreviousExpertTrainerFilter(expertTrainerFilter);
    setPreviousIntermediateTrainerFilter(intermediateTrainerFilter);
    setPreviousAmateurTrainerFilter(amateurTrainerFilter);
  };

  const closeHandleClick = () => {
    resetFilters();
    setDisplaying(false);
  };

  const handleSubmit = () => {
    equalizeFilters();
    resetCallback();
    setDisplaying(false);
  };

  return (
    <fragment>
      <div className={styles.dimmer} />
      <div className={styles.filterModal}>
        <button
          type="button"
          className={styles.close}
          onClick={closeHandleClick}
        >
          <i className="fas fa-window-close" />
        </button>
        <SearchForm
          amateurTrainerFilter={amateurTrainerFilter}
          setAmateurTrainerFilter={setAmateurTrainerFilter}
          intermediateTrainerFilter={intermediateTrainerFilter}
          setIntermediateTrainerFilter={setIntermediateTrainerFilter}
          trainerNameFilter={trainerNameFilter}
          expertTrainerFilter={expertTrainerFilter}
          setTrainerNameFilter={setTrainerNameFilter}
          setExpertTrainerFilter={setExpertTrainerFilter}
          handleSubmit={handleSubmit}
        />
      </div>
    </fragment>
  );
};

FilterModal.propTypes = {
  amateurTrainerFilter: PropTypes.bool.isRequired,
  setAmateurTrainerFilter: PropTypes.func.isRequired,
  intermediateTrainerFilter: PropTypes.bool.isRequired,
  setIntermediateTrainerFilter: PropTypes.func.isRequired,
  setDisplaying: PropTypes.func.isRequired,
  trainerNameFilter: PropTypes.string.isRequired,
  expertTrainerFilter: PropTypes.bool.isRequired,
  setTrainerNameFilter: PropTypes.func.isRequired,
  setExpertTrainerFilter: PropTypes.func.isRequired,
  resetCallback: PropTypes.func.isRequired,
};

export default FilterModal;
