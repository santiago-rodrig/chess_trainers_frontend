import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

const SearchForm = ({
  trainerNameFilter,
  status,
  handleSubmit,
  handleTrainerNameChange,
  handlePendingChange,
  handleSuccessChange,
  handleFailedChange,
}) => (
  <form
    className={styles.trainersSearch}
    onSubmit={handleSubmit}
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
    <button type="submit">filter</button>
  </form>
);

SearchForm.propTypes = {
  trainerNameFilter: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleTrainerNameChange: PropTypes.func.isRequired,
  handlePendingChange: PropTypes.func.isRequired,
  handleSuccessChange: PropTypes.func.isRequired,
  handleFailedChange: PropTypes.func.isRequired,
};

export default SearchForm;
