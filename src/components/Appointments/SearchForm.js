import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

const SearchForm = ({
  trainerNameFilter,
  setTrainerNameFilter,
  status,
  setPendingStatus,
  setSuccessStatus,
  setFailedStatus,
}) => {
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
    <form
      className={styles.trainersSearch}
      onSubmit={e => e.preventDefault()}
    >
      <label htmlFor="trainersInput" className={styles.searchLabel}>
        <span className={styles.labelHeading}>Trainer name</span>
        <input
          type="text"
          name="trainersInput"
          placeholder="pedro ruiz"
          value={trainerNameFilter}
          onChange={handleTrainerNameChange}
        />
      </label>
      <div className={styles.expertiseBox}>
        <div className={styles.labelHeading}>
          Status
        </div>
        <label htmlFor="pending" className={styles.expertise}>
          Pending
          <input
            type="checkbox"
            name="pending"
            defaultChecked={status[0] === '1'}
            onChange={handlePendingChange}
          />
        </label>
        <label htmlFor="success" className={styles.expertise}>
          Success
          <input
            type="checkbox"
            name="success"
            defaultChecked={status[1] === '1'}
            onChange={handleSuccessChange}
          />
        </label>
        <label htmlFor="failed" className={styles.expertise}>
          Failed
          <input
            type="checkbox"
            name="failed"
            defaultChecked={status[2] === '1'}
            onChange={handleFailedChange}
          />
        </label>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  trainerNameFilter: PropTypes.string.isRequired,
  setTrainerNameFilter: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  setPendingStatus: PropTypes.func.isRequired,
  setSuccessStatus: PropTypes.func.isRequired,
  setFailedStatus: PropTypes.func.isRequired,
};

export default SearchForm;
