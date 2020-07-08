import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmptyList.module.css';

const EmptyList = ({ children }) => (
  <p className={styles.notification}>
    <i style={{ fontSize: 40 }} className="fas fa-exclamation-circle" />
    <br />
    <br />
    {children}
  </p>
);

EmptyList.propTypes = {
  children: PropTypes.string.isRequired,
};

export default EmptyList;
