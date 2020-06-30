import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterModal.module.css';
import SearchForm from './SearchForm';

const FilterModal = ({
  resetCallback,
  setDisplaying,
}) => {
  const closeHandleClick = () => {
    resetCallback();
    setDisplaying(false);
  };

  return (
    <React.Fragment>
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
        />
      </div>
    </React.Fragment>
  );
};

FilterModal.propTypes = {
  setDisplaying: PropTypes.func.isRequired,
  resetCallback: PropTypes.func.isRequired,
};

export default FilterModal;
