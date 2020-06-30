import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterModal.module.css';
import SearchForm from './SearchForm';

const FilterModal = ({
  trainerNameFilter,
  expertTrainerFilter,
  setDisplaying,
  setTrainerNameFilter,
  setExpertTrainerFilter,
  resetCallback,
}) => {
  const closeHandleClick = () => {
    resetCallback();
    setDisplaying(false);
  };

  return (
    <>
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
          trainerNameFilter={trainerNameFilter}
          expertTrainerFilter={expertTrainerFilter}
          setTrainerNameFilter={setTrainerNameFilter}
          setExpertTrainerFilter={setExpertTrainerFilter}
        />
      </div>
    </>
  );
};

FilterModal.propTypes = {
  setDisplaying: PropTypes.func.isRequired,
  trainerNameFilter: PropTypes.string.isRequired,
  expertTrainerFilter: PropTypes.bool.isRequired,
  setTrainerNameFilter: PropTypes.func.isRequired,
  setExpertTrainerFilter: PropTypes.func.isRequired,
  resetCallback: PropTypes.func.isRequired,
};

export default FilterModal;

