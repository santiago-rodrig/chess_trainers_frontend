import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import FilterModal from './FilterModal';

const Filter = ({
  resetCallback,
  trainerNameFilter,
  setTrainerNameFilter,
  status,
  setPendingStatus,
  setSuccessStatus,
  setFailedStatus,
}) => {
  const [displaying, setDisplaying] = useState(false);

  const handleClick = () => {
    setDisplaying(true);
  };

  return (
    <>
      <button className={styles.filter} type="button" onClick={handleClick}>
        <i className="fas fa-filter" />
      </button>
      {
        displaying
          ? (
            <FilterModal
              trainerNameFilter={trainerNameFilter}
              setTrainerNameFilter={setTrainerNameFilter}
              resetCallback={resetCallback}
              setDisplaying={setDisplaying}
              setPendingStatus={setPendingStatus}
              setSuccessStatus={setSuccessStatus}
              setFailedStatus={setFailedStatus}
              status={status}
            />
          )
          : ''
      }
    </>
  );
};

Filter.propTypes = {
  resetCallback: PropTypes.func.isRequired,
  trainerNameFilter: PropTypes.string.isRequired,
  setTrainerNameFilter: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  setPendingStatus: PropTypes.func.isRequired,
  setSuccessStatus: PropTypes.func.isRequired,
  setFailedStatus: PropTypes.func.isRequired,
};

export default Filter;
