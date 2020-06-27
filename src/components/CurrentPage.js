import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrentPage.module.css';

const CurrentPage = ({ page }) => (
  <div className={styles.pageBox}>
    Page
    {` ${page}`}
  </div>
);

CurrentPage.propTypes = {
  page: PropTypes.number.isRequired,
};

export default CurrentPage;
