import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

const SearchForm = ({
}) => {
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
        />
      </label>
      <div className={styles.expertiseBox}>
        <div className={styles.labelHeading}>
          Status
        </div>
        <label htmlFor="pending" className={styles.expertise}>
          Expert
          <input
            type="checkbox"
            name="pending"
          />
        </label>
        <label htmlFor="success" className={styles.expertise}>
          Success
          <input
            type="checkbox"
            name="success"
          />
        </label>
        <label htmlFor="failed" className={styles.expertise}>
          Failed
          <input
            type="checkbox"
            name="failed"
          />
        </label>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
};

export default SearchForm;

