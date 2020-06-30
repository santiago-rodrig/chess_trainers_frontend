import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterModal.module.css';

const FilterModal = ({ setDisplaying }) => {
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
      </div>
    </>
  );
};

FilterModal.propTypes = {
  setDisplaying: PropTypes.func.isRequired,
};

export default FilterModal;

