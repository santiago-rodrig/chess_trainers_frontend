import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterModal.module.css';
import SearchForm from './SearchForm';

const FilterModal = ({
  resetCallback,
  setDisplaying,
  trainerNameFilter,
  setTrainerNameFilter,
  status,
  setPendingStatus,
  setSuccessStatus,
  setFailedStatus,
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
          setTrainerNameFilter={setTrainerNameFilter}
          setPendingStatus={setPendingStatus}
          setSuccessStatus={setSuccessStatus}
          setFailedStatus={setFailedStatus}
          status={status}
        />
      </div>
    </>
  );
};

FilterModal.propTypes = {
  setDisplaying: PropTypes.func.isRequired,
  resetCallback: PropTypes.func.isRequired,
  trainerNameFilter: PropTypes.string.isRequired,
  setTrainerNameFilter: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  setPendingStatus: PropTypes.func.isRequired,
  setSuccessStatus: PropTypes.func.isRequired,
  setFailedStatus: PropTypes.func.isRequired,
};

export default FilterModal;
