import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

const SearchForm = ({
  trainerNameFilter,
  expertTrainerFilter,
  setTrainerNameFilter,
  setExpertTrainerFilter,
}) => {
  const trainerNameHandleChange = e => setTrainerNameFilter(e.target.value);

  const expertTrainerHandleChange = e => {
    e.target.checked = !e.target.checked;
    setExpertTrainerFilter(e.target.checked);
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
          onChange={trainerNameHandleChange}
        />
      </label>
      <div className={styles.expertiseBox}>
        <div className={styles.labelHeading}>
          Expertise
        </div>
        <label htmlFor="expertTrainer" className={styles.expertise}>
          Amateur
          <input
            type="checkbox"
            checked
            name="expertTrainer"
            onChange={expertTrainerHandleChange}
          />
        </label>
        <label htmlFor="expertTrainer" className={styles.expertise}>
          Intermediate
          <input
            type="checkbox"
            checked
            name="expertTrainer"
            onChange={expertTrainerHandleChange}
          />
        </label>
        <label htmlFor="expertTrainer" className={styles.expertise}>
          Expert
          <input
            type="checkbox"
            checked
            name="expertTrainer"
            onChange={expertTrainerHandleChange}
          />
        </label>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  trainerNameFilter: PropTypes.string.isRequired,
  expertTrainerFilter: PropTypes.bool.isRequired,
  setTrainerNameFilter: PropTypes.func.isRequired,
  setExpertTrainerFilter: PropTypes.func.isRequired,
};

export default SearchForm;

