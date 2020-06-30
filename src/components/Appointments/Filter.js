import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import FilterModal from './FilterModal';

const Filter = ({
  resetCallback,
}) => {
  const [displaying, setDisplaying] = useState(false);

  const handleClick = () => {
    setDisplaying(true);
  };

  return (
    <React.Fragment>
      <button className={styles.filter} type="button" onClick={handleClick}>
        <i className="fas fa-filter" />
      </button>
      {
        displaying
          ? <FilterModal
            resetCallback={resetCallback}
            setDisplaying={setDisplaying}
          />
          : ''
      }
    </React.Fragment>
  );
};

Filter.propTypes = {
  resetCallback: PropTypes.func.isRequired,
};

export default Filter;

