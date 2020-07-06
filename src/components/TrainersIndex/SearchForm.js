import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

const SearchForm = ({
  amateurTrainerFilter,
  setAmateurTrainerFilter,
  trainerNameFilter,
  expertTrainerFilter,
  setTrainerNameFilter,
  setExpertTrainerFilter,
  intermediateTrainerFilter,
  setIntermediateTrainerFilter,
  handleSubmit,
}) => {
  const trainerNameHandleChange = e => setTrainerNameFilter(e.target.value);

  const amateurTrainerHandleChange = () => (
    setAmateurTrainerFilter(!amateurTrainerFilter)
  );

  const intermediateTrainerHandleChange = () => (
    setIntermediateTrainerFilter(!intermediateTrainerFilter)
  );

  const expertTrainerHandleChange = () => (
    setExpertTrainerFilter(!expertTrainerFilter)
  );

  return (
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
          onChange={trainerNameHandleChange}
        />
      </label>
      <div className={styles.expertiseBox}>
        <div className={styles.labelHeading}>
          Expertise
        </div>
        <label htmlFor="expertTrainer" className={styles.expertise}>
          Expert
          <input
            type="checkbox"
            checked={expertTrainerFilter}
            name="expertTrainer"
            onChange={expertTrainerHandleChange}
          />
        </label>
        <label htmlFor="intermediateTrainer" className={styles.expertise}>
          Intermediate
          <input
            type="checkbox"
            checked={intermediateTrainerFilter}
            name="intermediateTrainer"
            onChange={intermediateTrainerHandleChange}
          />
        </label>
        <label htmlFor="amateurTrainer" className={styles.expertise}>
          Amateur
          <input
            type="checkbox"
            checked={amateurTrainerFilter}
            name="amateurTrainer"
            onChange={amateurTrainerHandleChange}
          />
        </label>
      </div>
      <button type="submit">filter</button>
    </form>
  );
};

SearchForm.propTypes = {
  trainerNameFilter: PropTypes.string.isRequired,
  expertTrainerFilter: PropTypes.bool.isRequired,
  setTrainerNameFilter: PropTypes.func.isRequired,
  setExpertTrainerFilter: PropTypes.func.isRequired,
  intermediateTrainerFilter: PropTypes.bool.isRequired,
  setIntermediateTrainerFilter: PropTypes.func.isRequired,
  amateurTrainerFilter: PropTypes.bool.isRequired,
  setAmateurTrainerFilter: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
