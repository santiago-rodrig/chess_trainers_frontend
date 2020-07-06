import React, { fragment, useState } from 'react';
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
  const [previousTrainerNameFilter, setPreviousTrainerNameFilter] = useState(trainerNameFilter);
  const [previousPendingStatus, setPreviousPendingStatus] = useState(status[0]);
  const [previousSuccessStatus, setPreviousSuccessStatus] = useState(status[1]);
  const [previousFailedStatus, setPreviousFailedStatus] = useState(status[2]);

  const resetFilters = () => {
    setTrainerNameFilter(previousTrainerNameFilter);
    setPendingStatus(previousPendingStatus);
    setSuccessStatus(previousSuccessStatus);
    setFailedStatus(previousFailedStatus);
  };

  const closeHandleClick = () => {
    resetFilters();
    setDisplaying(false);
  };

  const handleSubmit = () => {
    setPreviousTrainerNameFilter(trainerNameFilter);
    setPreviousPendingStatus(status[0]);
    setPreviousSuccessStatus(status[1]);
    setPreviousFailedStatus(status[2]);
    resetCallback();
    setDisplaying(false);
  };

  const handleTrainerNameChange = e => setTrainerNameFilter(e.target.value);

  const handlePendingChange = e => {
    if (status[0] === '1') {
      e.target.checked = false;
      setPendingStatus('0');
    } else {
      e.target.checked = true;
      setPendingStatus('1');
    }
  };

  const handleSuccessChange = e => {
    if (status[1] === '1') {
      e.target.checked = false;
      setSuccessStatus('0');
    } else {
      e.target.checked = true;
      setSuccessStatus('1');
    }
  };

  const handleFailedChange = e => {
    if (status[2] === '1') {
      e.target.checked = false;
      setFailedStatus('0');
    } else {
      e.target.checked = true;
      setFailedStatus('1');
    }
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
          trainerNameFilter={trainerNameFilter}
          handleTrainerNameChange={handleTrainerNameChange}
          handlePendingChange={handlePendingChange}
          handleSuccessChange={handleSuccessChange}
          handleFailedChange={handleFailedChange}
          status={status}
          handleSubmit={handleSubmit}
        />
      </div>
    </fragment>
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
