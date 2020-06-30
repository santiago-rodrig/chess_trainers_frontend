import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterModal.module.css';
import SearchForm from './SearchForm';

const FilterModal = ({
  trainerNameFilter,
  setDisplaying,
  setTrainerNameFilter,
}) => {
  const closeHandleClick = () => setDisplaying(false);

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
          setTrainerNameFilter={setTrainerNameFilter}
        />
      </div>
    </>
  );
};

FilterModal.propTypes = {
  setDisplaying: PropTypes.func.isRequired,
  trainerNameFilter: PropTypes.string.isRequired,
  setTrainerNameFilter: PropTypes.func.isRequired,
};

export default FilterModal;

