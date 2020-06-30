import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

const SearchForm = ({
  trainerNameFilter,
  setTrainerNameFilter,
}) => {
  const trainerNameHandleChange = e => {
    setTrainerNameFilter(e.target.value);
  };

  return (
    <form
      className={styles.trainersSearch}
      onSubmit={e => e.preventDefault()}
    >
      <label htmlFor="trainersInput" className={styles.searchLabel}>
        Trainer name
        <input
          type="text"
          name="trainersInput"
          placeholder="pedro ruiz"
          value={trainerNameFilter}
          onChange={trainerNameHandleChange}
        />
      </label>
    </form>
  );
};

SearchForm.propTypes = {
  trainerNameFilter: PropTypes.string.isRequired,
  setTrainerNameFilter: PropTypes.func.isRequired,
};

export default SearchForm;

